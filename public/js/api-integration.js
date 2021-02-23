let country = US;
// API call to get Cases by Country
$.ajax({
    url: "https://covid-api.mmediagroup.fr/v1/cases?ab=US",
    method: "GET"
}).then((data) => {
    console.log(data);
});

// API call to get historical info to add to DB
function getHistory(){
    let status = "confirmed";  //other option is "deaths"
    let country = "US";
    let queryURL = "https://covid-api.mmediagroup.fr/v1/history?";
    queryURL += "status=" + status;
    queryURL += "&country=" + country;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((data) => {
        console.log(data);
    })
}

// API to call for testing locations
function getTestingSites(lon,lat){
    let apiKey = "f6DSSKECPwqTQkKxQSd87WsvF6m7miV1IxZ6i4ac02U";
    let queryUrl = "https://discover.search.hereapi.com/v1/discover?";
    queryUrl += "apikey=" + apiKey;
    queryUrl += "&q=Covid&at=" + lon + "," + lat + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((data) => {
        console.log(data);
    })
}
