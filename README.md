# map-interactive-with-maptiler
Création d'une map interactive avec maptiler / polygon geojson

GeoJSON signifie en anglais Geographic JSON, c’est-à-dire JSON géographique qui est un format de fichier permettant de décrire des données géographiques et spatiales comme des points, des lignes, des polygones et des chaînes de caractères. Il permet également d’associer à ces données, des informations non géographiques en utilisant le format JSON (JavaScript Object Notation).
l doit obligatoirement commencer par le type du fichier, qui doit être "FeatureCollection". Les différents éléments contenus sur la carte décrite par le GeoJSON seront listés dans l’attribut features, qui est un tableau d’objets. Voici une description des attributs que doivent comporter tous les éléments de ce tableau :

type: "Feature" (type de l'élément).
properties: propriétés associées à cet élément. Il peut y avoir autant de propriétés que vous le souhaitez et vous pouvez leur attribuer les noms et valeurs que vous voulez.
geometry: description de la forme de l’élément. Contient les attributs:
type: type d’élément. "Point", "LineString" ou "Polygon".
coordinates: tableau des coordonnées des points constituant la forme.

Get Started With MapLibre GL JS
GitHubLogoView complete source code on GitHub

You will learn the following:

Obtain the MapTiler api key.
Initialize map and load the style.
Create MapTiler account for FREE and obtain the api key.

Include the MapLibre JavaScript and CSS files in the <head> of your HTML file.

 <script src='https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.js'></script>
 <link href='https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css' rel='stylesheet' />
Initialize a map in an HTML element with MapLibre GL JS.

Add <div> tag into your page. This div will be the container where the map will be loaded.

 <div id="map"></div>
The div must have non-zero height.

#map {
     position: absolute;
     top: 0;
     bottom: 0;
     width: 100%;
}
Finally, load the map

const key='<your key here>';
const map = new maplibregl.Map({
container: 'map', // container id
style: `https://api.maptiler.com/maps/streets/style.json?key=${key}`, // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});