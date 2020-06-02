var profileTransportItem = document.querySelectorAll(".profile__transport .transport__item");
var profileTransportItemToggle = "transport__item--toggled";

for (var i = 0; i < profileTransportItem.length; i++) {
    profileTransportItem[i].addEventListener("click", function(event) {
      event.preventDefault();
      if (event.target.classList.contains(profileTransportItemToggle)) {
        event.target.classList.remove(profileTransportItemToggle);
      } else {
        event.target.classList.add(profileTransportItemToggle);
      }
    });
};
