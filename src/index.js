import "./styles.css";
import createDefaultTemplate from "./modules/homepage.js";
import createMenu from "./modules/menu.js";
import createAbout from "./modules/about.js";
import createContact from "./modules/contact.js";
//import createCart from "./modules/cart.js";
import createCartModal from "./modules/cart-modal.js";

let cartItems = [];

const content = document.getElementById("content");

const nav = document.querySelector("nav");

const name = document.createElement("h1");
name.classList.add("name");
name.textContent = "The Patriot Grill";
nav.appendChild(name);

// Create buttons
const buttons = ["MENU", "ABOUT", "CONTACT"];
const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons-div");
nav.appendChild(buttonsDiv);

buttons.forEach((label) => {
  const button = document.createElement("button");
  button.classList.add("nav-button");
  button.textContent = label;
  button.classList.add(label);
  buttonsDiv.appendChild(button);
});

//
const cartDiv = document.createElement("div");
cartDiv.classList.add("cart-icon-div");

const cart = document.createElement("img");
cart.classList.add("cart-image");
// Add cart icon.
cart.src = "icons/cart-outline.png";
cart.alt = "Cart Icon";

let cartItemCount = document.createElement("span");
cartItemCount.classList.add("cart-item-count");
cartItemsCount();

//cartItemCount.textContent = cartItems.length;
function cartItemsCount() {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity === 0) {
    cartItemCount.classList.add("empty-cart");
  } else {
    cartItemCount.classList.remove("empty-cart");
    cartItemCount.textContent = totalQuantity;
  }
}

//nav.appendChild(cart);
cartDiv.appendChild(cart);
cartDiv.appendChild(cartItemCount);

nav.appendChild(cartDiv);

// Function that clears content div and appends new template
// When called - function should be passed in as an argument
function switchTab(newTab) {
  content.innerHTML = "";
  content.appendChild(newTab);
}

// Display the default template on page load
document.addEventListener("DOMContentLoaded", () => {
  const { defaultTemplate, orderBtn } = createDefaultTemplate();
  switchTab(defaultTemplate);

  // Add event listener for the order button
  orderBtn.addEventListener("click", () => {
    switchTab(createMenu());
    addPlusIconListeners();
  });
});

// Event listener for the restaurant name to display the default template
name.addEventListener("click", () => {
  const { defaultTemplate, orderBtn } = createDefaultTemplate();
  switchTab(defaultTemplate);

  // Add event listener for the order button
  orderBtn.addEventListener("click", () => {
    switchTab(createMenu());
    addPlusIconListeners();
  });
});

// Event listeners for other nav buttons
document.querySelector(".MENU").addEventListener("click", () => {
  switchTab(createMenu());
  addPlusIconListeners();
});

document.querySelector(".ABOUT").addEventListener("click", () => {
  switchTab(createAbout());
});

document.querySelector(".CONTACT").addEventListener("click", () => {
  switchTab(createContact());
});

cart.addEventListener("click", () => {
  switchTab(createCart());
});

// Make an array to store cart items
// Only do this if cart is NOT EMPTY

const cartModal = createCartModal();
nav.appendChild(cartModal);
console.log(cartModal);

// Show the modal on mouseenter
cart.addEventListener("mouseenter", () => {
  console.log("Mouse entered cart");
  cartModal.classList.add("active");
  console.log(cartModal.classList); // Check if 'active' is added
});

// Hide modal on mouseleave
cart.addEventListener("mouseleave", () => {
  console.log("Mouse left cart"); // Check if this log appears
  cartModal.classList.remove("active");
});

// Only once that menu has been loaded eventlisteners for plus icons should be active
function addPlusIconListeners() {
  const allPlusIcons = document.querySelectorAll(".plus-icon");

  allPlusIcons.forEach((plusIcon) => {
    plusIcon.addEventListener("click", () => {
      console.log("Added"); // This should log "aaaaa" on click

      // Get the burger name, price, and description from the menu item
      // .textContent is how you access value of items
      const menuItem = event.target.closest(".menu-item");
      const SelectedName = menuItem.querySelector(".burger-name").textContent;
      const SelectedPrice = menuItem.querySelector(".burger-price").textContent;
      const SelectedDescription = menuItem.querySelector(
        ".burger-description"
      ).textContent;

      // Create a new Burger instance and add it to the cart
      const burger = new Burger(
        SelectedName,
        SelectedPrice,
        SelectedDescription
      );
      console.log(burger);
      addBurgerToCart(burger, cartItems);
    });
  });
}

// Create a constructor function to store elements into array
function Burger(name, price, description, quantity = 1) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.quantity = quantity; // Added quantity property which is initially set to 1 first time that burger is added
}

// Very useful lesson here
function addBurgerToCart(newBurger, cartItemsArr) {
  // Check if the burger already exists in the cart
  const existingBurger = cartItemsArr.find(
    (item) => item.name === newBurger.name
  );

  if (existingBurger) {
    // If the burger exists, increase its quantity
    existingBurger.quantity += 1;
  } else {
    // If the burger doesn't exist, add it to the cart
    cartItemsArr.push(newBurger);
  }

  console.log("All cart items: ", cartItemsArr);
  cartItemsCount();
}
// PROBLEM WITH addPlusIconListeners() -> scoping problem.
// Can not acces properties of dynamically created elements

// Create cart - same as every module but now it is being created in index.js
function createCart() {
  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cart-container");

  const title = document.createElement("h2");
  title.textContent = "Your Cart";
  cartDiv.appendChild(title);

  if (cartItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("cart-empty");
    emptyMessage.textContent =
      "Your cart is empty. Add some delicious burgers!";
    cartDiv.appendChild(emptyMessage);
  } else {
    const cartList = document.createElement("ul");
    cartList.classList.add("cart-items-list");

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart-item");

      const namePriceDiv = document.createElement("div");
      namePriceDiv.classList.add("name-price");

      const itemName = document.createElement("span");
      itemName.classList.add("cart-item-name");
      itemName.textContent = item.name;

      const itemPrice = document.createElement("span");
      itemPrice.classList.add("cart-item-price");
      itemPrice.textContent = item.price;

      namePriceDiv.appendChild(itemName);
      namePriceDiv.appendChild(itemPrice);

      const itemDescription = document.createElement("p");
      itemDescription.classList.add("cart-item-description");
      itemDescription.textContent = item.description;

      const allButtonsDiv = document.createElement("div");
      allButtonsDiv.classList.add("all-buttons-div");

      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-item-button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeItemFromCart(index);
      });

      const amountDiv = document.createElement("div");
      amountDiv.classList.add("amount-burger-div");

      const increaseButton = document.createElement("button");
      increaseButton.classList.add("plus-button");
      increaseButton.textContent = "+";

      const itemCounter = document.createElement("p");
      itemCounter.classList.add("item-counter");
      itemCounter.textContent = item.quantity; // Display quantity

      const decreaseButton = document.createElement("button");
      decreaseButton.classList.add("minus-button");
      decreaseButton.textContent = "-";

      amountDiv.appendChild(decreaseButton);
      amountDiv.appendChild(itemCounter);
      amountDiv.appendChild(increaseButton);

      allButtonsDiv.appendChild(removeButton);
      allButtonsDiv.appendChild(amountDiv);

      cartItem.appendChild(namePriceDiv);
      cartItem.appendChild(itemDescription);
      cartItem.appendChild(allButtonsDiv);

      cartList.appendChild(cartItem);

      // Increase button event listener
      increaseButton.addEventListener("click", () => {
        item.quantity++;
        itemCounter.textContent = item.quantity;
        console.log("Updated cart: ", cartItems);
      });

      // Decrease button event listener
      decreaseButton.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          itemCounter.textContent = item.quantity;
          console.log("Updated cart: ", cartItems);
        } else {
          removeItemFromCart(index);
        }
      });
    });

    cartDiv.appendChild(cartList);
  }

  return cartDiv;
}

function removeItemFromCart(index) {
  cartItems.splice(index, 1); // Remove the item from the array
  console.log("Item removed. Updated cart:", cartItems);
  switchTab(createCart()); // Refresh the cart display
  cartItemsCount();
}

// 1) Everytime a plus or a minus gets clicked, increase or decrease the amount of clicked item
// Take all items array
// Find clicked item
// Duplicate it

// ADD FUNCTIONALITY TO THE CART
// Make sure if the same item is already in the cart, you just update the amount, dont add same item
// Go through array and check for duplication
// Do the same for cart modal in the top right corner
//
// Optional -> when first item is added to cart maybe notify the user (maybe add the button to the bottom of the menu
// that leads to the cart