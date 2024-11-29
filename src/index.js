import "./styles.css";
import createDefaultTemplate from "./modules/homepage.js";
import createMenu from "./modules/menu.js";
import createAbout from "./modules/about.js";
import createContact from "./modules/contact.js";

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
  button.classList.add("nav-button");
  button.textContent = label;
  button.classList.add(label);
  buttonsDiv.appendChild(button);
});

// Function that clears content div and appends new template
// When called - function should be passed as an argument
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
});

document.querySelector(".ABOUT").addEventListener("click", () => {
  switchTab(createAbout());
});

document.querySelector(".CONTACT").addEventListener("click", () => {
  switchTab(createContact());
});
