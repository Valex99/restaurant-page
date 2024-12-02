import "./styles.css";
import createDefaultTemplate from "./modules/homepage.js";
import createMenu from "./modules/menu.js";
import createAbout from "./modules/about.js";
import createContact from "./modules/contact.js";
import createCart from "./modules/cart.js";
import createCartModal from "./modules/cart-modal.js";

const content = document.getElementById("content");

// Navigator Bar
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
const cart = document.createElement("img");
cart.classList.add("cart-image");
// Add cart icon.
cart.src = "icons/cart-outline.png";
cart.alt = "Cart Icon";
nav.appendChild(cart);
//

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
  });
});

// Event listener for the restaurant name to display the default template
name.addEventListener("click", () => {
  const { defaultTemplate, orderBtn } = createDefaultTemplate();
  switchTab(defaultTemplate);

  // Add event listener for the order button
  orderBtn.addEventListener("click", () => {
    switchTab(createMenu());
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

// Add event listeners to + icon
let cartItems = [];

// Only once that menu has been loaded eventlisteners for plus icons should be active
function addPlusIconListeners() {
  const allPlusIcons = document.querySelectorAll(".plus-icon");

  allPlusIcons.forEach((plusIcon) => {
    plusIcon.addEventListener("click", () => {
      console.log("aaaaa"); // This should log "aaaaa" on click

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
function Burger(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
}

function addBurgerToCart(newBurger, cartItemsArr) {
  cartItemsArr.push(newBurger);
  console.log("All cart items: ",cartItemsArr);
}
// PROBLEM WITH addPlusIconListeners() -> scoping problem.
// Can not acces properties of dynamically created elements

// SOLUTION -> Return Items from menu (export them)

