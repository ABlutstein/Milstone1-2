const input = document.querySelector(".input_text");
const main = document.querySelector("#name");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const clouds = document.querySelector(".clouds");
const button = document.querySelector(".submit");
const icon = document.querySelector(".icon");
const country = document.querySelector(".country");
const apiKey = "3f24b2bf14e436852ff873111d6e8a0d";

button.addEventListener("click", function(name) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    `&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let tempValue = data.main.temp;
      let nameValue = data.name;
      let descValue = data.weather[0].description;
      let iconValue = data.weather[0].icon;
      let countryValue = data.sys.country;

      main.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue + "°C";
      icon.innerHTML = iconValue;
      iconUrl = "http://openweathermap.org/img/wn/" + iconValue + ".png";
      country.innerHTML = countryValue;
    })

    .catch(err => alert("Please search for a valid location"));
});
