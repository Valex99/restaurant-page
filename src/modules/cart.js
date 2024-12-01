export default function createCart() {
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-container")
    cartDiv.textContent = "Cart in the making"

    

    return cartDiv;
}