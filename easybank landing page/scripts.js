const close = document.querySelector(".navbar-toggler-icon");
const overlay = document.querySelector(".overlay");
const navlist = document.querySelector(".nav-list-container");

close.addEventListener("click", () => {
  close.classList.toggle("active");
  overlay.classList.toggle("active");
  navlist.classList.toggle("active");
});
