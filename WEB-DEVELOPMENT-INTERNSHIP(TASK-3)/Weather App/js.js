let inputBox = document.querySelector(".input-box");
let searchBtn = document.getElementById("searchBtn");

let weather_img = document.querySelector(".weather-img");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let location_not_found = document.querySelector(".location-not-found");
let weather_body = document.querySelector(".weather-body");

let humidity = document.getElementById("humidity");
let wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  let api_key = "9d9b583b4f2693499b2a7ed668ac29d7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  let weather_data = await fetch(`${url}`).then((Response) => Response.json());

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    return;
  }

  weather_body.style.display = "flex";
  location_not_found.style.display = "none";

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "./images/cloud_cloudy_sun_sunny_weather_icon.png";
      break;

    case "Clear":
      weather_img.src = "./images/clear.png";
      break;

    case "Rain":
      weather_img.src = "./images/rain.png";
      break;

    case "Mist":
      weather_img.src = "./images/misty.png";
      break;

    case "Snow":
      weather_img.src = "./images/snow.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
