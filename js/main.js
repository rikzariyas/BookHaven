const cartStorageKey = "bookhaven-cart";
function getCart() {
  return JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
}
function saveCart(cart) {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  updateCartCount();
}
function currency(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}
function stars(rating) {
  return `${"★".repeat(Math.floor(rating))}${rating % 1 ? "½" : ""}`;
}
function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document
    .querySelectorAll(".cart-count")
    .forEach((el) => (el.textContent = count));
}
function siteHeader() {
  return `<nav class="navbar navbar-expand-lg sticky-top"><div class="container"><a class="navbar-brand brand" href="index.html"><i class="bi bi-book-half me-2"></i>BookHaven</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"><i class="bi bi-list"></i></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link" href="index.html#books">Books</a></li><li class="nav-item"><a class="nav-link" href="index.html#categories">Categories</a></li><li class="nav-item"><a class="nav-link" href="index.html#about">About</a></li><li class="nav-item"><a class="nav-link" href="index.html#contact">Contact</a></li></ul><div class="d-flex align-items-center gap-3"><div class="nav-search"><i class="bi bi-search"></i><input id="nav-search" type="search" placeholder="Search books" aria-label="Search books"></div><a class="nav-link p-0" href="login.html">Login</a><a class="btn btn-primary btn-sm" href="signup.html">Sign Up</a><a class="cart-link" href="cart.html" aria-label="Shopping cart"><i class="bi bi-bag"></i><span class="cart-count">0</span></a></div></div></div></nav>`;
}
function siteFooter() {
  return `<footer id="contact" class="site-footer"><div class="container"><div class="row g-4"><div class="col-lg-4"><div class="footer-brand"><i class="bi bi-book-half me-2"></i>BookHaven</div><p class="mt-3">Your home for great stories.</p></div><div class="col-6 col-lg-2"><h3>Quick Links</h3><p><a href="index.html">Home</a></p><p><a href="index.html#books">Books</a></p><p><a href="index.html#categories">Categories</a></p><p><a href="index.html#about">About</a></p></div><div class="col-6 col-lg-3"><h3>Customer Service</h3><p><a href="#">FAQ</a></p><p><a href="#">Shipping</a></p><p><a href="#">Returns</a></p><p><a href="#">Privacy Policy</a></p></div><div class="col-lg-3"><h3>Follow Us</h3><div class="social-links"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></div></div></div><div class="footer-bottom">© 2026 BookHaven. All Rights Reserved.</div></div></footer>`;
}
function bookCard(book) {
  return `<div class="col-sm-6 col-lg-3"><article class="book-card"><a href="book-details.html?id=${book.id}"><img class="book-cover" src="${book.image}" alt="${book.title} book cover" loading="lazy"></a><div class="card-body"><div class="rating mb-2">${stars(book.rating)} <span class="book-author">${book.rating}</span></div><h3><a class="text-decoration-none text-reset" href="book-details.html?id=${book.id}">${book.title}</a></h3><p class="book-author mb-3">${book.author}</p><div class="price">${currency(book.price)} <span class="old-price">${currency(book.originalPrice)}</span></div><div class="card-actions"><a class="btn btn-outline-primary" href="book-details.html?id=${book.id}">View Details</a><button class="btn btn-primary add-cart" data-id="${book.id}">Add to Cart</button></div></div></article></div>`;
}
function renderHomeBooks(query = "") {
  const grid = document.getElementById("books-grid");
  if (!grid) return;
  const term = query.trim().toLowerCase();
  const found = books.filter(
    (book) =>
      !term ||
      `${book.title} ${book.author} ${book.category}`
        .toLowerCase()
        .includes(term),
  );
  grid.innerHTML = found.length
    ? found.map(bookCard).join("")
    : `<div class="col-12"><div class="empty-state">No books found.</div></div>`;
  grid.querySelectorAll(".add-cart").forEach((button) =>
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.id));
      button.textContent = "Added";
      setTimeout(() => (button.textContent = "Add to Cart"), 900);
    }),
  );
}
function addToCart(id, quantity = 1) {
  const book = books.find((item) => item.id === id);
  if (!book) return;
  const cart = getCart();
  const item = cart.find((entry) => entry.id === id);
  item ? (item.quantity += quantity) : cart.push({ id, quantity });
  saveCart(cart);
}
function renderCategories() {
  const categories = [
    ["Fiction", "bi-feather"],
    ["Mystery", "bi-search"],
    ["Romance", "bi-heart"],
    ["Science Fiction", "bi-stars"],
    ["Self Development", "bi-lightbulb"],
    ["Business", "bi-briefcase"],
    ["Biography", "bi-person-lines-fill"],
    ["Academic", "bi-mortarboard"],
  ];
  const grid = document.getElementById("categories-grid");
  if (grid)
    grid.innerHTML = categories
      .map(
        ([name, icon]) =>
          `<div class="col-6 col-md-3"><a class="category-card d-block text-decoration-none" href="#books"><i class="bi ${icon}"></i><span>${name}</span></a></div>`,
      )
      .join("");
}
function renderFeatures() {
  const features = [
    [
      "bi-collection",
      "Wide Collection",
      "Thousands of books across different genres.",
    ],
    ["bi-truck", "Fast Delivery", "Get your favorite books delivered quickly."],
    [
      "bi-shield-check",
      "Secure Payment",
      "Safe and secure checkout experience.",
    ],
    ["bi-tag", "Best Prices", "Affordable prices and exciting discounts."],
  ];
  const grid = document.getElementById("features-grid");
  if (grid)
    grid.innerHTML = features
      .map(
        ([icon, title, text]) =>
          `<div class="col-sm-6"><div class="feature-card"><i class="bi ${icon}"></i><h3>${title}</h3><p>${text}</p></div></div>`,
      )
      .join("");
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-header")?.replaceChildren();
  const header = document.getElementById("site-header");
  if (header) header.innerHTML = siteHeader();
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = siteFooter();
  updateCartCount();
  renderHomeBooks();
  renderCategories();
  renderFeatures();
  const search = document.getElementById("book-search");
  const navSearch = document.getElementById("nav-search");
  search?.addEventListener("input", (e) => renderHomeBooks(e.target.value));
  navSearch?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      location.href = `index.html#books`;
      sessionStorage.setItem("bookSearch", e.target.value);
    }
  });
  const savedSearch = sessionStorage.getItem("bookSearch");
  if (savedSearch && search) {
    search.value = savedSearch;
    renderHomeBooks(savedSearch);
    sessionStorage.removeItem("bookSearch");
  }
  document
    .getElementById("newsletter-form")
    ?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletter-email");
      const message = document.getElementById("newsletter-message");
      if (!email.checkValidity()) {
        message.textContent = "Please enter a valid email address.";
        return;
      }
      message.textContent = "Thank you. You are now on the list.";
      email.value = "";
    });
});
