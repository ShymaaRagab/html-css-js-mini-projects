let mylinks = document.getElementsByClassName("links")[0];
let mybuttonlinks = document.getElementsByClassName("socialLinks")[0];
if (window.innerWidth <= 800) {
  mybuttonlinks.addEventListener("click", () => {
    mylinks.classList.toggle("clicked");
  });
}
