mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaW5jb24iLCJhIjoiY2tudnhoOXpkMG5jNzJubGdhdGYydWJpciJ9.NmdzVkNqDbrRUjSvXtoAgA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: post.coordinates,
    zoom: 5
});

// create a HTML element for our post
var el = document.createElement('div');
el.className = 'marker';

// make a marker for our location
new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);