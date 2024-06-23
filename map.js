var map = L.map('map').setView([40.4267678, -74.3552255], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var popup = L.popup()
popup.setLatLng([40.4267678, -74.3552255])
    .setContent("52 Winding Wood Dr, Sayreville, NJ 08872")
    .openOn(map);

var circle = L.circle([40.4267678, -74.3552255], {
    color: 'rgb(214, 41, 41)',
    fillColor: '#9d0208',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

function onMapClick(e) {
    popup.setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);