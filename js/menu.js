var header = document.querySelector(".page-header");
var main = document.querySelector(".page-main");
var navBtn = document.querySelector(".page-header__toggle");
var headerToggled = "page-header--toggled";
var headerScrolled ="page-header--scrolled";
var mainScrolled = "page-main--scrolled";
var offset = main.offsetTop;

header.classList.remove("page-header--nojs");

navBtn.addEventListener("click", function() {
  if (header.classList.contains(headerToggled)) {
    header.classList.remove(headerToggled);
  } else {
    header.classList.add(headerToggled);
  }
});

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= offset) {
    header.classList.add(headerScrolled)
    main.classList.add(mainScrolled)
  } else {
    header.classList.remove(headerScrolled);
    main.classList.remove(mainScrolled)
  }
});
