const db = require("../models");

module.exports = function(app) {
  // Get national stats from DB
  app.get("/api/stats", async (req, res) => {
    db.Stats.findOne({
      where: {
        state: "All"
      }
    }).then(allStats => {
      res.json(allStats);
    });
  });

  // Get Vaccinations for all
  app.get("/api/vaccinations", async (req, res) => {
    db.Stats.findAll().then(allVaccinations => {
      res.json(allVaccinations);
    });
  });

  // Get Vaccinations by state
  app.get("/api/vaccinations/:state", async (req, res) => {
    db.Stats.findOne({
      where: {
        state: req.params.state
      }
    }).then(stateVaccinations => {
      res.json(stateVaccinations);
    });
  });

  // Get stats for a single state
  app.get("/api/stats/:state", (req, res) => {
    db.Stats.findOne({
      where: {
        state: req.params.state
      }
    }).then(stateData => {
      res.json(stateData);
    });
  });

  // Get Testing Sites by State
  app.get("/api/sites/:state", (req, res) => {
    db.Site.findAll({
      where: {
        state: req.params.state
      }
    }).then(stateData => {
      res.json(stateData);
    });
  });
};
