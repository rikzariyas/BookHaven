document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("book-detail");
  if (!target) return;
  const id = Number(new URLSearchParams(location.search).get("id")) || 1;
  const book = books.find((item) => item.id === id) || books[0];
  target.innerHTML = `<div class="row g-5 align-items-start"><div class="col-md-5"><img class="detail-cover" src="${book.image}" alt="${book.title} book cover"></div><div class="col-md-7 detail-content"><span class="eyebrow">${book.category}</span><h1>${book.title}</h1><p class="book-author fs-5">by ${book.author}</p><div class="rating my-3 fs-6">${stars(book.rating)} <span class="book-author">${book.rating} / 5</span></div><div class="price fs-3">${currency(book.price)} <span class="old-price">${currency(book.originalPrice)}</span> <span class="badge-discount">${Math.round((1 - book.price / book.originalPrice) * 100)}% off</span></div><p class="description my-4">${book.description}</p><div class="d-flex flex-wrap align-items-center gap-3 mb-4"><div class="quantity-control"><button id="decrease-detail" aria-label="Decrease quantity">−</button><span id="detail-quantity">1</span><button id="increase-detail" aria-label="Increase quantity">+</button></div><button id="detail-add" class="btn btn-primary">Add to Cart</button><button id="detail-buy" class="btn btn-outline-primary">Buy Now</button><button class="btn btn-link text-decoration-none text-muted"><i class="bi bi-heart me-1"></i>Add to Wishlist</button></div><div class="detail-tabs"><ul class="nav nav-tabs" role="tablist"><li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#description-tab">Description</button></li><li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#info-tab">Book Information</button></li><li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#reviews-tab">Reviews</button></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="description-tab">${book.description} A thoughtful addition to any personal library.</div><div class="tab-pane fade" id="info-tab"><div class="row g-2"><div class="col-6"><strong>Publisher</strong><br>${book.publisher}</div><div class="col-6"><strong>Publication date</strong><br>${book.publicationDate}</div><div class="col-6"><strong>ISBN</strong><br>${book.isbn}</div><div class="col-6"><strong>Pages</strong><br>${book.pages}</div><div class="col-6"><strong>Language</strong><br>${book.language}</div><div class="col-6"><strong>Category</strong><br>${book.category}</div></div></div><div class="tab-pane fade" id="reviews-tab">Readers rate this title ${book.rating} out of 5. More reviews are coming soon.</div></div></div></div></div>`;
  let quantity = 1;
  const quantityLabel = document.getElementById("detail-quantity");
  document.getElementById("decrease-detail").addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    quantityLabel.textContent = quantity;
  });
  document.getElementById("increase-detail").addEventListener("click", () => {
    quantity += 1;
    quantityLabel.textContent = quantity;
  });
  document.getElementById("detail-add").addEventListener("click", (e) => {
    addToCart(book.id, quantity);
    e.target.textContent = "Added to Cart";
    setTimeout(() => (e.target.textContent = "Add to Cart"), 1000);
  });
  document.getElementById("detail-buy").addEventListener("click", () => {
    addToCart(book.id, quantity);
    location.href = "checkout.html";
  });
});
