function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

const navLinks = document.querySelectorAll("#nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("nav-links").classList.remove("active");
    });
});