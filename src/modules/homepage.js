// homepage.js
export default function createDefaultTemplate() {
  const defaultTemplate = document.createElement("div");
  defaultTemplate.classList.add("default-template");

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

  // Return the default template and the orderBtn (so event listener can be added to it)
  return { defaultTemplate, orderBtn };
}
