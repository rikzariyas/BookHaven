function showMessage(id, text, type = "danger") {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<div class="alert alert-${type} py-2">${text}</div>`;
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    if (!email.checkValidity() || !password.value) {
      e.target.classList.add("was-validated");
      showMessage("login-message", "Please complete the required fields.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("bookhaven-users") || "[]");
    const user = users.find(
      (item) =>
        item.email === email.value.trim().toLowerCase() &&
        item.password === password.value,
    );
    if (!user) {
      showMessage(
        "login-message",
        "We could not find an account with those details.",
      );
      return;
    }
    localStorage.setItem(
      "bookhaven-current-user",
      JSON.stringify({ name: user.name, email: user.email }),
    );
    showMessage("login-message", "Login successful. Welcome back!", "success");
    setTimeout(() => (location.href = "index.html"), 800);
  });
  document.getElementById("signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const name = document.getElementById("signup-name");
    const phone = document.getElementById("signup-phone");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const confirm = document.getElementById("signup-confirm");
    const terms = document.getElementById("terms");
    if (!form.checkValidity() || password.value !== confirm.value) {
      form.classList.add("was-validated");
      showMessage(
        "signup-message",
        password.value !== confirm.value
          ? "Passwords do not match."
          : "Please complete all required fields.",
      );
      return;
    }
    const users = JSON.parse(localStorage.getItem("bookhaven-users") || "[]");
    if (users.some((user) => user.email === email.value.trim().toLowerCase())) {
      showMessage(
        "signup-message",
        "An account with this email already exists.",
      );
      return;
    }
    users.push({
      name: name.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim().toLowerCase(),
      password: password.value,
    });
    localStorage.setItem("bookhaven-users", JSON.stringify(users));
    showMessage(
      "signup-message",
      "Account created successfully. You can now login.",
      "success",
    );
    form.reset();
    terms.checked = false;
  });
});
