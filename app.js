
const storage = new Testi();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
document.querySelector('#w-change-button').addEventListener('click', (e) => {

  const city = document.querySelector('#city').value;

  weather.changeLocation(city);

  storage.setLocationData(city);
  getWeather();

  //jquery
  $('#locModal').modal('hide');

});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);

    })
    .catch(err => console.log(err));
}

