/* eslint-disable prettier/prettier */
// This middleware function will format the Stats data into a standard format
module.exports = function(statsData) {
  const stateValue = statsData.dataValues.state;
  const totalCasesValue = statsData.dataValues.totalCases.toLocaleString("en-US");
  const totalDeathsValue = statsData.dataValues.totalDeaths.toLocaleString("en-US");
  const totalAdministeredValue = statsData.dataValues.Vaccination.totalAdministered.toLocaleString("en-US");
  const atLeast2DosesValue = statsData.dataValues.Vaccination.atLeastTwoDoses.toLocaleString("en-US");
  const atLeast2DosesPer100kValue = statsData.dataValues.Vaccination.atLeastTwoDosesPer100k.toLocaleString("en-US");
  
  const atLeast2DosesPercentFormatted = atLeast2DosesPer100kValue + "%";

  const hbsObj = {
    Stats: {
      state: stateValue,
      totalCases: totalCasesValue,
      totalDeaths: totalDeathsValue,
      totalAdministered: totalAdministeredValue,
      atLeastTwoDoses: atLeast2DosesValue,
      atLeastTwoDosesPer100k: atLeast2DosesPercentFormatted
    }
  };
  return hbsObj;
};
