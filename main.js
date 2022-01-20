document
  .querySelector(".input-form")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.fetchWeather(this.value);
    }
  });

let weather = {
  apiKey: "b1a68e1da9f067e82a8979c7b7b72a2b",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city-name").innerHTML = name;
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".real-feel").innerHTML =
      "Real Feel : " + feels_like + "°C";
    document.querySelector(".humidity").innerHTML =
      "Humidity : " + humidity + "%";
    document.querySelector(".speed").innerHTML =
      "Wind Speed : " + speed + " km/h";
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector(".weather-container").classList.add("active");
  },
};
