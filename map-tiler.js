// var urlParams = new URLSearchParams(window.location.search);
// var key = urlParams.get('key');
//
// var map = new maplibregl.Map({
//     container: 'map', // container id
//     style: `https://api.maptiler.com/maps/streets/style.json?key=${key}`, // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });

const key='gSpqRvXHka35aymDOCAQ';
let map;
map = new maplibregl.Map({
    container: 'map', // container id
    style: `https://api.maptiler.com/maps/streets/style.json?key=${key}`, // style URL
    center: [6.129384, 45.899247], // starting position [lng, lat]
    zoom: 9 // starting zoom
});