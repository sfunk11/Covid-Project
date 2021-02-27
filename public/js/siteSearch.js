$(document).ready(() => {
  // Getting references to our form and inputs
  const searchForm = $("form.search");
  const addressInput = $("input#inputAddress");
  const cityInput = $("input#inputCity");
  const stateInput = $("input#inputState");
  const zipInput = $("input#inputZip");

  // When the form is submitted, we validate there's an email and password entered
  searchForm.on("submit", event => {
    event.preventDefault();
    const addressData = {
      address: addressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val(),
      zip: zipInput.val().trim()
    };

    getAddressString(addressData);
    getGeoCode(addressString.trim());
    addressString = "";
    addressInput.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
  });
});
let addressString = "";
function getAddressString(Object) {
  if (Object.address) {
    addressString += Object.address + " ";
  }
  if (Object.city) {
    addressString += Object.city + " ";
  }
  if (Object.state) {
    addressString += Object.state + " ";
  }
  if (Object.zip) {
    addressString += Object.zip;
  }
}

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function getGeoCode(address) {
  $.ajax({
    url: "https://api.positionstack.com/v1/forward",
    data: {
      // eslint-disable-next-line camelcase
      access_key: "dab047f58c7876f8b75f42d8d763f574",
      query: address,
      limit: 1
    }
  }).done(data => {
    lat = data.data[0].latitude;
    lon = data.data[0].longitude;
    console.log(lat, lon);
    getSites(lat, lon);
  });
}
function getSites(lat, lon) {
  let path = "";
  const apiKey = "f6DSSKECPwqTQkKxQSd87WsvF6m7miV1IxZ6i4ac02U";
  path = "https://discover.search.hereapi.com";
  path += "/v1/discover?";
  path += "apikey=" + apiKey;
  path += "&q=Covid&at=" + lon + "," + lat + "&limit=10";

  $.ajax({
    url: path
  }).done(data => {
    console.log(data);
  });
}

//   $.post("/api/login", {
//     email: email,
//     password: password
//   })
//     .then(() => {
//       window.location.replace("/members");
//       // If there's an error, log the error
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
