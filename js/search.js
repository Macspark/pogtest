var searchBtn = document.querySelectorAll(".search__toggle");
var searchToggled = "search__fieldset--toggled";

for (var i = 0; i < searchBtn.length; i++) {
    searchBtn[i].addEventListener("click", function(event) {
      if (event.target.parentElement.classList.contains(searchToggled)) {
        event.target.parentElement.classList.remove(searchToggled);
      } else {
        event.target.parentElement.classList.add(searchToggled);
      }
    });
};
