class Testi {
  constructor() {
    this.city;
    this.defaultCity = 'Helsinki';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return this.city

  }
  setLocationData(city) {
    //saving String not JSON object so don't have to JSON.stringify 
    localStorage.setItem('city', city);
  }

}