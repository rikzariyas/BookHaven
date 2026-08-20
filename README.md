# 📚 BookHaven — Online Bookstore

BookHaven is a classic and elegant **e-commerce bookstore website** designed for book lovers to discover, explore, and purchase books online.

The project is built using **HTML, CSS, Bootstrap 5, and JavaScript**, with a focus on responsive design, clean UI, and interactive shopping functionality.

---

## 🌟 Features

### 🏠 Landing Page

- Attractive classic bookstore-themed design
- Hero section with call-to-action buttons
- Featured books section
- Browse by category
- Why Choose Us section
- Newsletter subscription
- Responsive footer

### 📖 Book Browsing

- Dynamically rendered book cards
- Book cover, title, author, rating, price, and category
- Search books by:
  - Title
  - Author
  - Category

- Category-based browsing

### 🔍 Book Details

Clicking on a book opens a dedicated details page containing:

- Book cover
- Title
- Author
- Rating
- Current price
- Original price
- Discount
- Description
- Publisher
- Publication date
- ISBN
- Number of pages
- Language
- Category

### 🛒 Shopping Cart

- Add books to cart
- Remove books from cart
- Increase/decrease quantity
- Automatically calculate subtotal
- Calculate discounts
- Calculate total price
- Cart item counter
- Cart data stored using `localStorage`
- Cart remains available after refreshing the page

### 🔐 Authentication

Frontend-based login and registration functionality.

#### Sign Up

Users can register using:

- Full Name
- Email
- Phone Number
- Password
- Confirm Password

#### Login

Users can log in using:

- Email
- Password
- Remember Me

> **Note:** Authentication is implemented using `localStorage` for demonstration purposes only. It is not suitable for production because real authentication requires a secure backend and password handling.

---

## 🎨 Design

BookHaven follows a **classic and premium bookstore aesthetic**.

### Design Characteristics

- Warm cream and beige backgrounds
- Dark brown typography
- Burgundy accents
- Elegant serif headings
- Clean sans-serif body text
- Subtle shadows
- Smooth hover effects
- Responsive Bootstrap components
- Minimal and professional animations

The goal is to make the website feel like a traditional bookstore while providing a modern online shopping experience.

---

## 📸 Screenshots

### BookHaven Website

![BookHaven website preview](images/outlook.png)

---

## 🛠️ Technologies Used

| Technology      | Purpose                             |
| --------------- | ----------------------------------- |
| HTML5           | Website structure                   |
| CSS3            | Custom styling                      |
| Bootstrap 5     | Responsive layout and UI components |
| JavaScript      | Website functionality               |
| Bootstrap Icons | Icons                               |
| LocalStorage    | Cart and demo authentication data   |
| Live Server     | Local development                   |

---

## 📁 Project Structure

```text
bookstore/
│
├── index.html
├── login.html
├── signup.html
├── cart.html
├── book-details.html
├── checkout.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── books.js
│   ├── main.js
│   ├── auth.js
│   ├── cart.js
│   └── details.js
│
└── images/
    └── book images
```

---

## ⚙️ How It Works

### 1. Book Data

Book information is stored inside:

```text
js/books.js
```

Example:

```javascript
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 399,
    originalPrice: 499,
    rating: 4.5,
    category: "Classic",
    image: "images/gatsby.jpg",
    description: "A classic novel about...",
  },
];
```

---

### 2. Dynamic Book Rendering

JavaScript loads the book data and dynamically creates Bootstrap book cards on the homepage.

Each book has a unique ID.

For example:

```text
book-details.html?id=1
```

The ID is used to identify which book the user selected.

---

### 3. Book Details

When a user clicks **View Details**, the selected book ID is passed through the URL.

For example:

```text
book-details.html?id=5
```

JavaScript reads the ID and displays the corresponding book information.

---

### 4. Shopping Cart

When a user clicks:

```text
Add to Cart
```

the book is stored in the browser's `localStorage`.

Example:

```javascript
localStorage.setItem("cart", JSON.stringify(cart));
```

This allows the cart to remain available even after refreshing the page.

---

### 5. Cart Calculation

The application automatically calculates:

```text
Subtotal
Discount
Delivery
Total
```

Quantity changes also update the total price automatically.

---

## 🛒 Example Shopping Flow

```text
Home
  ↓
Browse Books
  ↓
Select a Book
  ↓
View Book Details
  ↓
Add to Cart
  ↓
Open Cart
  ↓
Update Quantity
  ↓
View Total
  ↓
Proceed to Checkout
```

---

## 🔐 Authentication Flow

```text
Sign Up
   ↓
Enter User Information
   ↓
Validate Form
   ↓
Store Demo User Data
   ↓
Login
   ↓
Validate Credentials
   ↓
Access Website
```

Again, this is a **frontend demonstration only** and should not be used as production authentication.

---

## 📱 Responsive Design

BookHaven is designed to work across:

- 📱 Mobile phones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

Bootstrap's responsive grid system is used to ensure that content automatically adapts to different screen sizes.

---

## 🚀 How to Run the Project

### Step 1 — Clone or Download

Download the project or clone the repository.

```bash
git clone YOUR_REPOSITORY_URL
```

### Step 2 — Open in VS Code

Open the project folder in **Visual Studio Code**.

### Step 3 — Install Live Server

Install the **Live Server** extension in VS Code.

### Step 4 — Run the Website

Open:

```text
index.html
```

Then right-click and select:

```text
Open with Live Server
```

The website will open in your browser.

---

## 🧪 Testing Checklist

Before deploying the project, verify:

- [x] Homepage loads correctly
- [x] Navigation works
- [x] Books load dynamically
- [x] Search functionality works
- [x] Book details page works
- [x] Correct book information is displayed
- [x] Add to Cart works
- [x] Cart counter updates
- [x] Quantity controls work
- [x] Remove from cart works
- [x] Cart total calculates correctly
- [x] Cart persists after refresh
- [x] Login validation works
- [x] Signup validation works
- [x] Responsive layout works
- [x] No JavaScript errors appear in the console

---

## 🔮 Future Improvements

The project can be extended with:

- Backend authentication
- MongoDB/MySQL database
- Node.js and Express.js backend
- Real payment gateway
- User profiles
- Order history
- Wishlist functionality
- Product reviews and ratings
- Admin dashboard
- Book inventory management
- Real-time order tracking
- Email notifications
- Secure authentication with JWT
- REST API integration

---

## 📌 Project Purpose

This project was created to demonstrate practical skills in:

- Frontend web development
- Bootstrap responsive design
- JavaScript DOM manipulation
- JavaScript objects and arrays
- LocalStorage
- Form validation
- Dynamic content rendering
- E-commerce functionality
- UI/UX design

It can also serve as a **portfolio project for demonstrating frontend and JavaScript skills to recruiters**.

---

## 👩‍💻 Author

**Rikza E R**

BCA Graduate | Full-Stack Web Developer

### Skills Demonstrated

- HTML
- CSS
- Bootstrap
- JavaScript
- Responsive Web Design
- DOM Manipulation
- LocalStorage
- Git & GitHub

---

## 📄 License

This project is created for **educational and portfolio purposes**.

Feel free to modify and extend the project for learning and personal use.

---

⭐ If you find this project useful, consider giving the repository a star!
