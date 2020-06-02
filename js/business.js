var business = document.querySelector(".business");
var businessOpen = document.querySelector(".premium__button");
var businessClose = document.querySelector(".business__button");
var businessToggled = "business--toggled";

businessOpen.addEventListener("click", function(event) {
  event.preventDefault();
  business.classList.add(businessToggled);
});

businessClose.addEventListener("click", function() {
  business.classList.remove(businessToggled);
});
