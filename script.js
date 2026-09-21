document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        const icon = themeToggle.querySelector("i");
        
        if (currentTheme === "light") {
            body.setAttribute("data-theme", "dark");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            body.setAttribute("data-theme", "light");
            icon.classList.replace("fa-sun", "fa-moon");
        }
    });

    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        let hasErrors = false;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        if (name.value.trim() === "") { nameError.style.display = "block"; hasErrors = true; } 
        else { nameError.style.display = "none"; }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) { emailError.style.display = "block"; hasErrors = true; } 
        else { emailError.style.display = "none"; }

        if (message.value.trim() === "") { messageError.style.display = "block"; hasErrors = true; } 
        else { messageError.style.display = "none"; }

        if (hasErrors) { e.preventDefault(); } 
        else {
            alert("Form validation successful!");
            contactForm.reset();
            e.preventDefault();
        }
    });
});
