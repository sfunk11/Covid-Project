let country = US;
// API call to get Cases by Country
$.ajax({
    url: "https://covid-api.mmediagroup.fr/v1/cases?ab=US",
    method: "GET"
}).then((data) => {
    console.log(data);
});

// API call to get historical cases to add to DB
function getHistory(){
    let status = "confirmed";
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