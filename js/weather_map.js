"use strict";

//mapbox
mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/dark-v11', // Map style to use
    center: [-98.4916, 29.4252], // Starting position [lng, lat]
    zoom: 12, // Starting zoom level
});



$(`#search`).on(`click`, function(){
    let userLocation = $(`#location`).val();
    geocode(userLocation, keys.mapbox).then(function (result){
        map.setCenter(result);
        map.setZoom(10);

        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
        function onDragEnd() {
            map.addControl(geocode);
            let lngLat = marker.getLngLat()
        }
        $.get('https://api.openweathermap.org/data/2.5/forecast', {
            lat: result[1],
            lon: result[0],
            appid: keys.openWeather,
            units: 'imperial'

        }).done(function(data){
            console.log(data);
            let html = '';
            for (let i = 0; i < data.list.length; i += 8) {
                html += `<div class="card m-2 bg-dark text-light border border-secondary"" style="width: 18rem;">
                    <div class="card-header">
                    <div>${data.list[i].dt_txt.slice(0,10)}</div>
                    </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-secondary text-light">High ${data.list[i].main.temp_max}/Low ${data.list[i].main.temp_min}</li>
                    <li class="list-group-item bg-secondary text-light"> Description ${data.list[i].weather[0].description}</li>
                    <li class="list-group-item bg-secondary text-light">Humidity ${data.list[i].main.humidity}</li>
                    <li class="list-group-item bg-secondary text-light"> Pressure ${data.list[i].main.pressure}</li>
                </ul>
                </div>`;
            }
            $('#weather').html(html);

        }).fail(function (jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });
    });
});