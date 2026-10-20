// Initialisation de la carte
var map = L.map('map').setView([44.52, 11.338], 8);

// Fond de carte

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }
).addTo(map);


L.marker([44.418161, 12.201916])
  .addTo(map)
  .bindPopup(`
    <strong>19 septembre</strong><br>
    <a href="galeries/galerie-ravenne.html">
    Ravenne
    </a><br>
  `);



var parcours = [
  [21.008, 105.864], //  //
  [22.335394, 103.839332],// Hotel Sapa
  [22.3026607, 103.8885788],  // Village de Ta Van
   [22.335394, 103.839332],// Hotel Sapa
  [22.5411, 104.2918]// Marché de Bac HA 22 avril : randonnée à Ta Phin
]
;

L.polyline(parcours, {
  color: "black",
  weight: 2,
  dashArray: "4,4"
  }).addTo(map);
