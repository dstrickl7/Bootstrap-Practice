const close = document.querySelector(".navbar-toggler-icon");
const overlay = document.querySelector(".overlay");

close.addEventListener("click", () => {
  close.classList.toggle("active");
  overlay.classList.toggle("active");
});
