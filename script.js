(function () {
  const temperature = document.getElementById('display-temperature');
  const locationInput = document.getElementById('submitInput');
  const weatherSummary = document.getElementById('display-weather');
  const humidity = document.getElementById('display-humidity');
  const wind = document.getElementById('display-wind');
  const location = document.getElementById('display-location');

  async function doFetch() {
    const locationQuery = locationInput.value || 'Paris';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&appid=60fee5f1883f2bcb8859a8b45aebc7e2&units=metric`,
      { mode: 'cors' }
    )
    const weatherData = await response.json();
    temperature.innerHTML = Math.round(weatherData.main.temp) + ' &deg;C';
    weatherSummary.innerHTML = weatherData.weather[0].description;
    humidity.innerHTML = weatherData.main.humidity + '%';
    wind.innerHTML = weatherData.wind.speed + ' km/h';
    location.innerHTML = weatherData.name;

    let img = document.getElementById('img');
    let code = weatherData.weather[0].icon;

    img.src = `http://openweathermap.org/img/wn/${code}@2x.png`;
  }


  document.getElementById('submitBtn').addEventListener('click', doFetch);

  document.addEventListener('DOMContentLoaded', function(){ 
    doFetch();
  }, false);
})();
