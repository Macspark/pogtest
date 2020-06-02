ymaps.ready(function () {
var map = new ymaps.Map("map", {
    center: [59.938631, 30.322998],
    zoom: 18,
    controls: ["zoomControl"]
});

var mapPlacemark = new ymaps.Placemark([59.938631, 30.323155], {}, {
  iconLayout: "default#image",
  iconImageHref: "img/map-marker.svg",
  iconImageSize: [54, 54],
  iconImageOffset: [-22, -22]
});

map.geoObjects.add(mapPlacemark);
});
