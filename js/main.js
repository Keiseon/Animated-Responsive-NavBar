const hamburger = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Toggle the Open Animation
hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("open");

  links.forEach(link => {
    link.classList.toggle("fade"); // toggle()
  });

  nav_links.addEventListener("click", () => {
    nav_links.classList.remove("open");

    links.forEach(link => {
      link.classList.remove("fade"); // toggle()
    });
  });
});
