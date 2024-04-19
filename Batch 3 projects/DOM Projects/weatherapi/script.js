document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("cityInput");
  const getWeatherButton = document.getElementById("getWeatherButton");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("windSpeed");

  getWeatherButton.addEventListener("click", function () {
    const city = cityInput.value;
    if (city) {
      fetchWeather(city);
    }
  });

  function fetchWeather(city) {
    const apiKey = "ed32656bb1f11a7bd92be77acadca901";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      })
      .catch((error) => {
        cityName.textContent = error.message;
        temperature.textContent = "";
        description.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";
      });
  }
});
