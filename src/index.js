import "./styles.css";

// Default website look
const content = document.getElementById("content");
const body = document.querySelector("body");

// Background Image
//const image = document.createElement("img");
//image.src = "images/burger.jpg";
//image.alt = "Burger Image";
//const container = document.querySelector("body");
//image.classList.add("background-image");
//container.appendChild(image);

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

// Create and style buttons
buttons.forEach((label) => {
  const button = document.createElement("button");
  button.textContent = label; // Set button text
  button.classList.add(label); // Add CSS class
  buttonsDiv.appendChild(button); // Add button to the container
});

// Module for each section - default
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

// Menu module
const menuBtn = document.querySelector(".MENU");
menuBtn.addEventListener("click", () => {
  slogan.style.display = "none";
});

// About module
const aboutBtn = document.querySelector(".ABOUT");
aboutBtn.addEventListener("click", () => {
  slogan.style.display = "none";
});

// Contact module
const contactBtn = document.querySelector(".CONTACT");
contactBtn.addEventListener("click", () => {
  defaultTemplate.style.display = "none";

  const contactTemplate = document.createElement("div");
  contactTemplate.classList.add("contact-template");
  content.appendChild(contactTemplate);

  content.style.display = "flex";
  content.style.justifyContent = "center";
  content.style.alignItems = "center";

  body.style.filter = "brightness(0.61)";

  // Make elements diasppear slowly.
});
