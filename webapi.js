//const selectDrop = document.querySelector('#countries');
const ximg = document.createElement("img");
var lib;

fetch('https://restcountries.com/v2/all').then(res => {
  return res.json()
}).then(data => {
  lib = data;
  let outpu = "";
  data.forEach(value => outpu += `<option value="${value.capital}">${value.name}</option>`)
  document.getElementById('selectcountries').innerHTML = outpu;
})

function showweather(){
  document.getElementById("weather_card").classList.add("showweather")
}
function myFunction(event) {
  //var x = document.getElementById("selectcountries").value;
  document.getElementById("country_card").classList.add("showcountry")
  var x = event.target.value;
  document.getElementById('xcapital').append(x);
  lib.forEach(value => {
    if (value.capital == x) {
      document.getElementById('xregion').append(value.region);
      let { png } = value.flags;
      ximg.src = png;
      document.getElementById('xpic').append(ximg);
      document.getElementById('xcode').append(value.alpha3Code);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${value.latlng[0]}&lon=${value.latlng[1]}&appid=7b202eb307c84e56afa81eb25723c577`).then(res => {
      return res.json()
      }).then(data =>
      {
    
      document.getElementById('weather_timezone').append(data.timezone)
      document.getElementById('weather_sunrise').append(data.sys.sunrise)
      document.getElementById('weather_sunset').append(data.sys.sunset)
      document.getElementById('weather_temperature').append(data.main.temp)
      document.getElementById('weather_wind').append(data.wind.speed)
      document.getElementById('weather_cloud').append(data.clouds.all)
       } 
    )
    }
    }
  )
}


