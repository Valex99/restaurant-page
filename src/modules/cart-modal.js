export default function createCartModal() {
  const cartModalDiv = document.createElement("div");

  cartModalDiv.classList.add("cart-modal");
  cartModalDiv.innerHTML = "Your cart is empty.";



  return cartModalDiv;
}
