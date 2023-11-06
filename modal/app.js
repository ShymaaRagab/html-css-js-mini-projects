let showModal = document.querySelector("button");
let span_btn = document.querySelector("span");
let overlay = document.querySelector(".overlay");

showModal.addEventListener("click", () => {
  overlay.classList.toggle("show-Modal");
});
span_btn.addEventListener("click", () => {
  overlay.classList.remove("show-Modal");
});
