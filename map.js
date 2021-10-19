let map;
let locations;

async function initMap() {
    let center = { lat: 32.394044, lng: 34.489571 }
    map = new google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 7,
    });
    const centerControlDiv = document.querySelector('.center-map');
    centerControlDiv.addEventListener('click', ()=>{
        map.setZoom(7);
        map.setCenter(center);
    })
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
    map.addListener('click', ({ latLng }) => {
        const name = prompt('Name of new location?');
        locs.push({ name, lat: latLng.lat(), lng: latLng.lng() });
        setMarker(latLng.lat(), latLng.lng(), name);
    });

    locations = await query();
    center = { lat, lng } = locations[2];
    map.setCenter(center);
    locations.forEach(({ lat, lng, name }) => setMarker(lat, lng, name));
}

function setMarker(lat, lng, title) {
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title,
    });
    marker.addListener('click', () => {
        map.setZoom(10);
        map.setCenter(marker.getPosition());
      });
}
