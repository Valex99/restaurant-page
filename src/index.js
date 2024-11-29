// Index.js should only be the main entry point.
import "./styles.css";
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

// Module for each section - default template (on page load)
const defaultTemplate = document.createElement("div");
defaultTemplate.classList.add("default-template");
content.appendChild(defaultTemplate);

const slogan = document.createElement("p");
slogan.classList.add("slogan");
slogan.textContent = "Bite into Freedom.";
defaultTemplate.appendChild(slogan);

const subSlogan = document.createElement("p");
subSlogan.classList.add("sub-slogan");
subSlogan.textContent = "Taste the Flavor!";
slogan.appendChild(subSlogan);

const orderBtn = document.createElement("button");
orderBtn.classList.add("order-button");
orderBtn.textContent = "Order Now";
slogan.appendChild(orderBtn);

// Function that clears content div and appends new template
function switchTab(newTab) {
  content.innerHTML = "";
  content.appendChild(newTab);
}




orderBtn.addEventListener("click", () => {
  switchTab(createMenu());
});

// Add event listeners to buttons
document.querySelector(".MENU").addEventListener("click", () => {
  switchTab(createMenu());
  //body.style.filter = "brightness(0.70)"
});

document.querySelector(".ABOUT").addEventListener("click", () => {
  switchTab(createAbout());
});

document.querySelector(".CONTACT").addEventListener("click", () => {
  switchTab(createContact());
});

// Use setTimeout function
