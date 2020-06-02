var countriesBlock = document.querySelector(".countries__item--new");
var countriesOpen = document.querySelector(".countries__item--new .countries__country");
var countriesClose = document.querySelector(".add-country__close");
var countriesToggled = "countries__item--expanded";

countriesOpen.addEventListener("click", function(event) {
  event.preventDefault();
  countriesBlock.classList.add(countriesToggled);
});

countriesClose.addEventListener("click", function(event) {
  event.preventDefault();
  countriesBlock.classList.remove(countriesToggled);
});
