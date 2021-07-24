const axios = require('axios');

const CITYBIKEURL = "http://api.citybik.es/v2/networks";

class CityBikesController {
  async getData(io, idCity) {
    const response = await this.getDataCityBike(idCity);

    setInterval(() => {
      io.emit('updateData', response);
    }, 10000);
    io.emit('updateData', response);
  }

  async getDataCityBike(idCity) {
    const response = await axios.get(`${CITYBIKEURL}/${idCity}`);
    if (response.status === 200) {
      return response.data
    }
    return null
  }

  async getCities(io) {
    const response = await axios.get(CITYBIKEURL);
    if (response.status === 200) {
      io.emit('updateDataSearch', response.data);
      return true;
    }
    io.emit('updateDataSearch', []);
    return false;
  }
}

module.exports = new CityBikesController()