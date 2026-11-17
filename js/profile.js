// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: show a thank-you message instead of reloading the page
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  const name = document.getElementById("cName").value.trim();

  formStatus.textContent = "Thank you, " + name + "! Your message was sent.";
  contactForm.reset();

  // Clear the message after 4 seconds
  setTimeout(function () {
    formStatus.textContent = "";
  }, 4000);
});

// Close the mobile menu after clicking a nav link
const menu = document.getElementById("menu");
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});