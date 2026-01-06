document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const reveals = document.querySelectorAll(".reveal");

  // Scroll reveal function
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach((el) => {
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  // Navbar scroll effect
  const handleNavbar = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  // Initial triggers
  revealOnScroll();
  handleNavbar();

  // Event listeners
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("scroll", handleNavbar);

  // Smooth scroll for nav links (handled by CSS, but good to ensure)
  document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Logo click to top
  document.querySelector(".logo").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
