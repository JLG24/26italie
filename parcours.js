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
    <strong>22 septembre</strong><br>
    <a href="galeries/galerie-ravenne2.html">
    Ravenne
    </a><br>
  `);
  
L.marker([44.837607, 11.619539])
  .addTo(map)
  .bindPopup(`
    <strong>20 septembre</strong><br>
    <a href="galeries/galerie-ferrare.html">
    Ferrare
    </a><br>
  `);

 L.marker([44.326233, 12.320716])
  .addTo(map)
  .bindPopup(`
    <strong>21 septembre</strong><br>
    <a href="galeries/galerie-0921.html">
    Agriturismo La Casina
    </a><br>
  `); 

  L.marker([44.7199, 12.1797])
  .addTo(map)
  .bindPopup(`
    <strong>22 septembre</strong><br>
    <a href="galeries/galerie-comacchio.html">
   Comacchio
    </a><br>
  `); 

   L.marker([44.476697, 11.010731])
  .addTo(map)
  .bindPopup(`
    <strong>23 septembre</strong><br>
    <a href="galeries/galerie-vignola.html">
    Entre Ravenne et Reggio d'Emilia
    </a><br>
  `); 

     L.marker([44.813, 10.3306])
  .addTo(map)
  .bindPopup(`
    <strong>24 septembre</strong><br>
    <a href="galeries/galerie-parme.html">
    Parme
    </a><br>
  `); 

    L.marker([44.694576, 10.622932])
  .addTo(map)
  .bindPopup(`
    <strong>23-29 septembre</strong><br>
    <a href="galeries/galerie-reggio.html">
    Reggio d'Emilia
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
