let showSidebar = document.querySelector(".showSidebar");
let xbutton = document.querySelector(".xbutton");
let sidebar = document.querySelector(".Sidebar");

showSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
xbutton.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
