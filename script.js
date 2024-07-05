L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//this shit isn't that useful since it isnt declared outside of this page

// gabe if you are reading this, please let me know how I could've done this
// in a js file and call and reference it to a html file 