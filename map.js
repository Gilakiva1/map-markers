let map;
let locs;


async function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 32.394044, lng: 34.489571 },
        zoom: 7,
    });
    const locs = await getData()
    console.log(locs);
    map.setCenter({lat:locs[2].lat, lng:locs[2].lng})

    locs.forEach(loc=>setMarker(loc.lat, loc.lng, loc.name))

    google.maps.event.addListener(map, "click", (event) => {
        addMarker(event.latLng, map, prompt('Name of new location?'));
        console.log(locs);
      });    

}

function setMarker(lat, lng, title) {
    new google.maps.Marker({
        position: {lat,lng},
        map,
        title
    });
}

function addMarker(location, map, title) {
    locs.push({name:title, lat:location.lat(), lng: location.lng()})
    new google.maps.Marker({
      position: location,
      map: map,
      title
    });
  }
  
