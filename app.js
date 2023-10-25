


function getdata() {
    let city = document.getElementById("place").value
    let place = document.getElementById("city")
    let degree = document.getElementById("degree")
    let wind = document.getElementById("wind")
    let humidity = document.getElementById("humidity")
    let pressure = document.getElementById("pressure")
    let long = document.getElementById("long")
    let lat = document.getElementById("lat")

    let apikey = '22245bd297ccb7a693f1e0be899688cc'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            place.innerHTML = city
            degree.innerHTML=Math.floor(data.main.temp - 273) + "° c"
            wind.innerHTML = data.wind.speed + " km/h"
            humidity.innerHTML = data.main.humidity + " gm/kg"
            pressure.innerHTML = data.main.pressure + " p"
            long.innerHTML = data.coord.lon
            lat.innerHTML = data.coord.lat
        });
}

