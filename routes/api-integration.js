const axios = require("axios");
const axiosStats = axios.create({
  baseURL: "some-https://covid-api.mmediagroup.fr"
});
module.exports = function(app) {
  app.get("/stats", async (req, res) => {
    try {
      const response = await axiosStats.get("/v1/cases?ab=US");
      console.log(response);
    } catch (error) {
      throw error;
    }
  });
};
// $.ajax({
//   url: "https://covid-api.mmediagroup.fr/v1/cases?ab=US",
//   method: "GET"
// }).then(data => {
//   console.log(data);
//   let stats = JSON.parse(data);
//   console.log(stats);
// });

// // API call to get historical info to add to DB
// function getHistory() {
//   const status = "confirmed"; //other option is "deaths"
//   const country = "US";
//   let queryURL = "https://covid-api.mmediagroup.fr/v1/history?";
//   queryURL += "status=" + status;
//   queryURL += "&country=" + country;

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(data => {
//     console.log(data);
//   });
// }

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
