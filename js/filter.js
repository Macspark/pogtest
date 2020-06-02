var filter = document.querySelector(".filter");
var filterToggle = document.querySelector(".filter__button");
var filterClose = document.querySelector(".filter__close");
var filterHeader = document.querySelector(".filter__header");
var filterContinents = document.querySelector(".filter__continents");
var filterTable = document.querySelector(".filter__table");
var filterLetter = document.querySelectorAll(".filter__letter");
var filterItem = document.querySelectorAll(".filter__item");
var filterContinent = document.querySelectorAll(".filter__continent");
var filterContinentLink = document.querySelectorAll(".filter__continent-link");
var filterToggled = "filter--expanded";
var filterCurrentLetter = "filter__item--current";
var filterCurrentContinent = "filter__continent--current";

filterToggle.addEventListener("click", function() {
  if (filter.classList.contains(filterToggled)) {
    filter.classList.remove(filterToggled);
    filterHeader.style.marginBottom = "0";
  } else {
    filter.classList.add(filterToggled);
    filterHeader.style.marginBottom = 43 + filterContinents.offsetHeight + "px";
    setMargin();
  }
});

filterClose.addEventListener("click", function() {
  filter.classList.remove(filterToggled);
  filterHeader.style.marginBottom = "0";
});

for (var i = 0; i < filterContinentLink.length; i++) {
    filterContinentLink[i].addEventListener("click", function(event) {
      event.preventDefault();
      for (var i = 0; i < filterContinent.length; i++) {
        filterContinent[i].classList.remove(filterCurrentContinent);
      }
      event.target.parentElement.classList.add(filterCurrentContinent);
    });
}

for (var i = 0; i < filterLetter.length; i++) {
    filterLetter[i].addEventListener("click", function(event) {
      event.preventDefault();
      for (var i = 0; i < filterItem.length; i++) {
        filterItem[i].classList.remove(filterCurrentLetter);
      }
      event.target.parentElement.classList.add(filterCurrentLetter);
      setMargin();
    });
};

window.addEventListener("resize", function () {
  setMargin();
});

function setMargin () {
  var filterCurrentCountries = document.querySelector(".filter__item--current .filter__countries");

  if (window.matchMedia("(max-width: 767px)").matches) {
    filterTable.style.marginBottom = 42 + filterCurrentCountries.offsetHeight + "px";
  } else if (window.matchMedia("(max-width: 1439px)").matches) {
    if (filterCurrentCountries.offsetHeight <= filterTable.offsetHeight) {
      filterTable.style.marginBottom = 35 + "px";
    } else {
      filterTable.style.marginBottom = 35 + filterCurrentCountries.offsetHeight - filterTable.offsetHeight + "px";
    }
  } else {
    filterTable.style.marginBottom = 0;
  }
};
