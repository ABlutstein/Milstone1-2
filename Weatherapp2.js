const getWeatherButton = document.getElementById("get-weather-button");
const weatherInput = document.getElementById("weather-input");
const errorParagraph = document.getElementById("error");
const weatherDataParagraph = document.getElementById("weather-data");
const tempDescription = document.querySelector(".temp-description");
const tempDegree = document.querySelector(".degree-section");
const tempSpam = document.querySelector(".span");
const apiKey = "3f24b2bf14e436852ff873111d6e8a0d";



getWeatherButton.addEventListener("click", () => {
  const weatherValue = weatherInput.value;

  const url = "https://api.openweathermap.org/data/2.5";


  fetch(`${url}/weather?q=${weatherValue}&appid=${apiKey}&units=metric`, {
    method: "GET"
  })
    .then(response => {
        return response.json();
    })
    .then(data => {
        const {temp, summary} = data.currently;
        tempDegree.textContent = temp;
        tempDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        setIcons(icon, document.querySelector(".icon"));ß
