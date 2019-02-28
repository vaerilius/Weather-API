

class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.temp = document.querySelector('#w-temperature');
    this.icon = document.querySelector('#w-icon');
    this.wind = document.querySelector('#wind');
    this.humidity = document.querySelector('#humidity');
    this.weatherMain = document.querySelector('#weather-main');
    this.clouds = document.querySelector('#clouds');

  }

  paint(weather) {
    this.location.innerHTML = weather.name;
    this.temp.innerHTML = weather.main.temp + ' \xB0C';
    this.humidity.innerHTML = `Humidity: ${weather.main.humidity} %`;
    this.weatherMain.innerHTML = `Pressure: ${weather.main.pressure}  hPa`;
    this.clouds.innerHTML = `Clouds: ${weather.clouds.all} % `;
    let iconUrl = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    this.icon.setAttribute('src', iconUrl);
    this.wind.innerHTML = `Wind ${weather.wind.speed} m/s`;

  }

}
