

/ show the marker position //

console.log( objMarker.position.lat() );
console.log( objMarker.position.lng() );

// create a new point based into marker position //

var deltaLat = 1.002;
var deltaLng = -1.003;

var objPoint = new google.maps.LatLng(
  parseFloat( objMarker.position.lat() ) + deltaLat,
  parseFloat( objMarker.position.lng() ) + deltaLng
);

// now center the map using the new point //

objMap.setCenter( objPoint );var map = new google.maps.Map(document.getElementById('map_canvas'), {
  zoom: 10,
  center: new google.maps.LatLng(13.103, 80.274),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var myMarker = new google.maps.Marker({
  position: new google.maps.LatLng(18.103, 80.274),
  draggable: true
});

google.maps.event.addListener(myMarker, 'dragend', function(evt) {
  document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
});
google.maps.event.addListener(myMarker, 'dragstart', function(evt) {
  document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
});
map.setCenter(myMarker.position);
myMarker.setMap(map);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + position.coords.latitude + ' Current Lng: ' + position.coords.longitude + '</p>';
  var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    draggable: true
  });
  google.maps.event.addListener(myMarker, 'dragend', function(evt) {
    document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
  });
  google.maps.event.addListener(myMarker, 'dragstart', function(evt) {
    document.getElementById('current').innerHTML = '<p>Currently dragging marker...</p>';
  });
  map.setCenter(myMarker.position);
  myMarker.setMap(map);
}
getLocation();
