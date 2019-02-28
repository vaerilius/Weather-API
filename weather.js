class Weather {
  constructor(city) {
    this.apiKey = '7e42e1d9120def0da94cf1c8f0351816';
    this.city = city;
  }
  
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);
    const responseData = await response.json();
  
    return responseData;
  }

  async changeLocation(city) {
    this.city = city;
  }
}