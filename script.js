document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (navbar.children.length === 0) {
      fetch("navbar.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to load navbar");
          }
          return response.text();
        })
        .then((data) => {
          navbar.innerHTML = data;

          initNavbar();
        })
        .catch((error) => {
          console.error("Error loading navbar:", error);
        });
    } else {
      initNavbar();
    }
  }
});

function initNavbar() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !mobileMenu.contains(event.target) &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });

    const navLinks = document.querySelectorAll(".link-nav");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }
}

// nrityamrit page

document.addEventListener('DOMContentLoaded', function () {
  const joinUsTab = document.getElementById('join-us-tab');
  const feedbackTab = document.getElementById('feedback-tab');
  const joinUsForm = document.getElementById('join-us-form');
  const feedbackForm = document.getElementById('feedback-form');

  joinUsTab.addEventListener('click', function () {
    joinUsTab.classList.add('active');
    feedbackTab.classList.remove('active');
    joinUsForm.classList.add('active');
    feedbackForm.classList.remove('active');
  });

  feedbackTab.addEventListener('click', function () {
    feedbackTab.classList.add('active');
    joinUsTab.classList.remove('active');
    feedbackForm.classList.add('active');
    joinUsForm.classList.remove('active');
  });
});