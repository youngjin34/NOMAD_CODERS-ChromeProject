const API_KEY = "2085460daa205c5dfab009eb6857497c";
const color = document.querySelector("#weather");

const weatherColors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather div:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}  ${data.main.temp}`;
    })
}

function onGeoError() {
  alert("Can't fine you, No weather for you.");
}

function changeWeatherColor() {
  const text = weatherColors[Math.floor(Math.random() * textColors.length)];
  color.style.color = `${text}`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
color.addEventListener("mouseenter", changeWeatherColor);