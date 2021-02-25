const db = require("../models");

module.exports = function(app) {
  // Get national stats from DB
  app.get("/api/stats", async (req, res) => {
    db.Stats.findAll({
      include: [db.State]
    }).then(allStats => {
      res.json(allStats);
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
