
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", function() {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();
});

// Welcome message
console.log("Welcome to Nancy Designing!");
