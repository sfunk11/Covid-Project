const axios = require("axios");
const axiosStats = axios.create({
  baseURL: "some-https://covid-api.mmediagroup.fr"
});
const axiosSites = axios.create({
  baseURL: "https://discover.search.hereapi.com"
});

module.exports = function(app) {
  // API call for current stats
  app.get("/stats", async (req, res) => {
    try {
      const response = await axiosStats.get("/v1/cases?ab=US");
      console.log(response);
    } catch (error) {
      throw error;
    }
  });
  //  API call for history information
  app.get("/history", async (req, res) => {
    try {
      let country = "US";
      let status = "confirmed";
      let path = "/v1/history?";
      path += "status=" + status;
      path += "&country=" + country;
      const response = await axiosStats.get(path);
      console.log(response);
    } catch (error) {
      throw error;
    }
  });
  // API call for testing locations
  app.get("/sites/:lon/:lat", async (req, res) => {
    try {
      let lon = req.params.lon;
      let lat = req.params.lat;
      const apiKey = "f6DSSKECPwqTQkKxQSd87WsvF6m7miV1IxZ6i4ac02U";
      let path = "v1/discover?";
      path += "apikey=" + apiKey;
      path += "&q=Covid&at=" + lon + "," + lat + "&limit=10";
      const response = await axiosSites.get(path);
      console.log(response);
    } catch (error) {
      throw error;
    }
  });
};

// // API to call for testing locations
// function getTestingSites(lon, lat) {
//   const apiKey = "f6DSSKECPwqTQkKxQSd87WsvF6m7miV1IxZ6i4ac02U";
//   let queryUrl = "https://discover.search.hereapi.com/v1/discover?";
//   queryUrl += "apikey=" + apiKey;
//   queryUrl += "&q=Covid&at=" + lon + "," + lat + "&limit=10";

//   $.ajax({
//     url: queryUrl,
//     method: "GET"
//   }).then(data => {
//     console.log(data);
//   });
// }
