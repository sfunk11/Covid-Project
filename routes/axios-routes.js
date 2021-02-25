/* eslint-disable no-unused-vars */
const axios = require("axios");
const axiosStats = axios.create({
  baseURL: "some-https://covid-api.mmediagroup.fr"
});
const axiosSites = axios.create({
  baseURL: "https://discover.search.hereapi.com"
});

module.exports = function(app) {
  // API call for current stats
  app.get("/stats", async (_req, _res) => {
    try {
      const response = await axiosStats.get("/v1/cases?ab=US");
      const data = response.data;
      console.log(data);
    } catch (error) {
      throw error;
    }
  });
  //  API call for history information
  app.get("/history", async (_req, _res) => {
    try {
      const country = "US";
      const status = "confirmed";
      let path = "/v1/history?";
      path += "status=" + status;
      path += "&country=" + country;
      const response = await axiosStats.get(path);
      const data = response.data;
      console.log(data);
    } catch (error) {
      throw error;
    }
  });
  // API call for testing locations
  app.get("/sites/:lon/:lat", async (req, _res) => {
    try {
      const lon = req.params.lon;
      const lat = req.params.lat;
      const apiKey = "f6DSSKECPwqTQkKxQSd87WsvF6m7miV1IxZ6i4ac02U";
      let path = "v1/discover?";
      path += "apikey=" + apiKey;
      path += "&q=Covid&at=" + lon + "," + lat + "&limit=10";
      const response = await axiosSites.get(path);
      const data = response.data;
      console.log(data);
    } catch (error) {
      throw error;
    }
  });
};
