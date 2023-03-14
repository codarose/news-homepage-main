const nav = document.querySelector(".mobile-nav");
const menuitem = document.querySelector(".mobile-nav > li");

const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (nav.classList.contains("show-mobile-nav")) {
    nav.classList.remove("show-mobile-nav");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    nav.classList.add("show-mobile-nav");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
