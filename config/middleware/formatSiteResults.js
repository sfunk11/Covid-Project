// This function will format the site results data to extract the parts needed for handlebars
module.exports = function(data) {
  const siteArray = [];

  for (i = 0; i < data.length; i++) {
    const siteName = data[i].title;
    const streetNumber = data[i].address.houseNumber;
    const streetName = data[i].address.street;
    const city = data[i].address.city;
    const state = data[i].address.state;
    const postalCode = data[i].address.postalCode;
    const website = data[i].contacts[0].www[0].value;

    siteObject = {
      title: siteName,
      houseNumber: streetNumber,
      street: streetName,
      city: city,
      state: state,
      postalCode: postalCode,
      website: website
    };
    siteArray.push(siteObject);
  }
  return siteArray;
};
