const axios = require('axios');

const CITYBIKEURL = "http://api.citybik.es/v2/networks/decobike-miami-beach";

class CityBikesController {
  async getData(io) {
    const response = await this.getDataCityBike();

    setInterval(() => {
      io.emit('updateData', response);
    }, 10000);
    io.emit('updateData', response);
  }

  async getDataCityBike() {
    const response = await axios.get(CITYBIKEURL);
    if (response.status === 200) {
      return response.data
    }
    return null
  }
}

module.exports = new CityBikesController()