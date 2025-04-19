const navbarToggle = document.querySelector(".navbar__toggle");
const navbarLinks = document.querySelector(".navbar__links");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("menuOpen");
});

let footerYear = document.querySelector("#footerYear");
footerYear.textContent = new Date().getFullYear();
