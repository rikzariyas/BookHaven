function cartBook(id) {
  return books.find((book) => book.id === id);
}
function updateQuantity(id, change) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += change;
  saveCart(item.quantity < 1 ? cart.filter((entry) => entry.id !== id) : cart);
  loadCart();
}
function removeFromCart(id) {
  saveCart(getCart().filter((item) => item.id !== id));
  loadCart();
}
function calculateTotal() {
  return getCart().reduce((sum, item) => {
    const book = cartBook(item.id);
    return sum + (book ? book.price * item.quantity : 0);
  }, 0);
}
function summaryMarkup() {
  const subtotal = calculateTotal();
  const discount = getCart().reduce((sum, item) => {
    const book = cartBook(item.id);
    return sum + (book ? (book.originalPrice - book.price) * item.quantity : 0);
  }, 0);
  return `<h2>Order Summary</h2><div class="summary-line"><span>Subtotal</span><strong>${currency(subtotal)}</strong></div><div class="summary-line"><span>Discount</span><strong class="text-success">- ${currency(discount)}</strong></div><div class="summary-line"><span>Delivery</span><strong>Free</strong></div><div class="summary-line summary-total"><span>Total</span><strong>${currency(subtotal)}</strong></div><a href="checkout.html" class="btn btn-primary w-100 mt-3 ${subtotal ? "" : "disabled"}">Proceed to Checkout</a>`;
}
function loadCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;
  const cart = getCart();
  container.innerHTML = cart.length
    ? cart
        .map((item) => {
          const book = cartBook(item.id);
          return `<div class="cart-item"><img src="${book.image}" alt="${book.title}"><div class="cart-item-details"><h3>${book.title}</h3><p class="book-author mb-2">${book.author}</p><div class="price">${currency(book.price)}</div></div><div class="cart-controls"><button aria-label="Decrease quantity" data-action="decrease" data-id="${book.id}">−</button><span>${item.quantity}</span><button aria-label="Increase quantity" data-action="increase" data-id="${book.id}">+</button></div><div class="item-total fw-bold">${currency(book.price * item.quantity)}</div><button class="remove-btn" aria-label="Remove ${book.title}" data-action="remove" data-id="${book.id}"><i class="bi bi-trash3"></i></button></div>`;
        })
        .join("")
    : `<div class="empty-state"><i class="bi bi-bag-x"></i><h2>No books in your cart.</h2><a class="btn btn-primary mt-2" href="index.html#books">Continue Shopping</a></div>`;
  document.getElementById("cart-summary").innerHTML = summaryMarkup();
  container.querySelectorAll("[data-action]").forEach((button) =>
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      button.dataset.action === "remove"
        ? removeFromCart(id)
        : updateQuantity(id, button.dataset.action === "increase" ? 1 : -1);
    }),
  );
}
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  const checkoutSummary = document.getElementById("checkout-summary");
  if (checkoutSummary) checkoutSummary.innerHTML = summaryMarkup();
  document.getElementById("checkout-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.target.classList.add("was-validated");
      return;
    }
    localStorage.removeItem(cartStorageKey);
    document.getElementById("checkout-message").innerHTML =
      '<div class="alert alert-success">Order placed successfully. Thank you for shopping with BookHaven.</div>';
    e.target.querySelector("button").disabled = true;
    updateCartCount();
  });
});
