import "./styles.css";
import createDefaultTemplate from "./modules/homepage.js";
import createMenu from "./modules/menu.js";
import createAbout from "./modules/about.js";
import createContact from "./modules/contact.js";

// Default website look
const content = document.getElementById("content");
const body = document.querySelector("body");

// Navigator Bar
const name = document.createElement("p");
const nav = document.querySelector("nav");
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
  button.textContent = label; // Set button text
  button.classList.add(label); // Add CSS class
  buttonsDiv.appendChild(button); // Add button to the container
});

// Function that clears content div and appends new template
function switchTab(newTab) {
  content.innerHTML = "";
  content.appendChild(newTab);
}

// Display the default template on page load
document.addEventListener("DOMContentLoaded", () => {
  const { defaultTemplate, orderBtn } = createDefaultTemplate(); // Get both the template and order button
  switchTab(defaultTemplate);

  // Add event listener for the order button
  orderBtn.addEventListener("click", () => {
    switchTab(createMenu());
  });
});

// Event listener for the restaurant name to display the default template
name.addEventListener("click", () => {
  const { defaultTemplate, orderBtn } = createDefaultTemplate(); // Get both the template and order button
  switchTab(defaultTemplate);

  // Add event listener for the order button
  orderBtn.addEventListener("click", () => {
    switchTab(createMenu());
  });
});

// Event listeners for other buttons
document.querySelector(".MENU").addEventListener("click", () => {
  switchTab(createMenu());
});

document.querySelector(".ABOUT").addEventListener("click", () => {
  switchTab(createAbout());
});

document.querySelector(".CONTACT").addEventListener("click", () => {
  switchTab(createContact());
});