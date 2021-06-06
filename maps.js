ymaps.ready(init);
var myMap;

function init(){
  address = document.getElementById('map').getAttribute('data-address');

  myMap = new ymaps.Map("map", {
    center: [50.20145752, 39.57029674],
    zoom: 17
  });

  myGeocoder = ymaps.geocode(address);

  myGeocoder.then(
    function (res) {
      coordinates = res.geoObjects.get(0).geometry.getCoordinates();

      myMap.geoObjects.add(
        new ymaps.Placemark(
          coordinates,
          {iconContent: address},
          {preset: 'islands#blueStretchyIcon'}
        )
      );

      myMap.setCenter(coordinates);
      myMap.setZoom(15);
    }, function (err) {
      alert('Ошибка при определении местоположения');
    }
  );
}
