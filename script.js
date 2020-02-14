let displayTemperature = document.getElementById('display-temperature');
let displayHumidity = document.getElementById('display-humidity');
let displayWind = document.getElementById('display-wind');
let displayWeather = document.getElementById('display-weather');


function weatherDetail() {
  let location = document.getElementById('submitInput').value || 'paris,fr';
	const aeris = new AerisWeather('SPyn10r7ceioTjRkIBC2n', '1NkYSLvQll8RHWrd02mIwO3cmB3LHwDVDv9oXEUx');
	const request = aeris.api().endpoint('observations').place(location).format('json').filter('allstations').limit(1);
	request.get().then((result) => {
    displayWeather.innerHTML = 'Today the weather in ' + location + ' is ' + result.data.ob.weather;
    displayTemperature.innerHTML = 'Temperature: ' + result.data.ob.tempC + ' C';
    displayHumidity.innerHTML = 'Humidity: ' + result.data.ob.humidity + '%';
    displayWind.innerHTML = 'Wind speed: ' + result.data.ob.windSpeedKPH + ' km/h';
   });
};

weatherDetail();

// change location
document.getElementById('submitBtn').addEventListener('click', weatherDetail);
