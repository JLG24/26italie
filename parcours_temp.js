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


L.marker([21.008, 105.864])
  .addTo(map)
  .bindPopup(`
    <strong>19 avril</strong><br>
    <a href="galeries/galerie-Hanoi1.html">
      Voir la galerie
    </a><br>
     <strong>20 avril</strong><br>
    <a href="galeries/galerie-Hanoi2.html">
      Voir la galerie
    </a><br>
     <strong>21 avril</strong><br>
    <a href="galeries/galerie-Hanoi3.html">
      Voir la galerie
    </a><br>
  `);

L.marker([22.335394, 103.839332])
  .addTo(map)
  .bindPopup(`
    <strong>Sa Pa</strong><br>
    <strong>22 avril</strong><br>
    <a href="galeries/galerie_sapa.html">
      Arrivée à Sa Pa
    </a><br>
  `);

L.marker([22.3026607, 103.8885788])
  .addTo(map)
  .bindPopup(`
    <strong>Sa Pa</strong><br>
    <strong>22 avril</strong><br>
    <a href="galeries/galerie-tribus.html">
     Rencontre avec les tribus locales
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
//L.marker([21.008, 110.864])
//  .addTo(map)
//  .bindTooltip("Souchez (9–12 mai 1915)", { permanent: true })
//  .bindPopup(
//    "<strong>Combats de Souchez</strong><br>" +
//    "Pertes importantes signalées au JMO.<br>" +
//    "<em>Source : JMO du régiment</em>"
//  );
