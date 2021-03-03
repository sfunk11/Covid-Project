const db = require("../../models");
const fs = require("fs");
const csv = require("fast-csv");

const uploadStat = async (req, res) => {
  try {
    if (req.file === undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    const csvData = [];
    const path = __basedir + `public/csvFiles/${req.file.filename}`;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true, discardUnmappedColumns: true }))
      .on("error", error => {
        throw error.message;
      })
      .on("data", row => {
        csvData.push(row);
      })
      .on("end", () => {
        console.log(csvData);
        db.Stat.bulkCreate(csvData, {
          updateOnDuplicate: ["totalCases", "totalDeaths", "updatedAt"]
        })
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname
            });
          })
          .catch(error => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname
    });
  }
};

const uploadVacc = async (req, res) => {
  try {
    if (req.file === undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    const csvData = [];
    const path = __basedir + `public/csvFiles/${req.file.filename}`;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true, discardUnmappedColumns: true }))
      .on("error", error => {
        throw error.message;
      })
      .on("data", row => {
        csvData.push(row);
      })
      .on("end", () => {
        console.log(csvData);
        db.Vaccination.bulkCreate(csvData, {
          updateOnDuplicate: [
            "totalDelivered",
            "totalAdministered",
            "deliveredPer100k",
            "administeredPer100k",
            "atLeastOneDose",
            "atLeastOneDosePer100k",
            "atLeastTwoDoses",
            "atLeastTwoDosesPer100k"
          ]
        })
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname
            });
          })
          .catch(error => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname
    });
  }
};
module.exports = {
  uploadStat,
  uploadVacc
};
