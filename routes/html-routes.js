const db = require("../models");

// Requiring our custom middleware
const isAuthenticated = require("../config/middleware/isAuthenticated");
const formatStats = require("../config/middleware/formatNumbers");

module.exports = function(app) {
  app.get("/", (req, res) => {
    db.Stat.findOne({
      where: {
        state: "All"
      },
      include: [db.Vaccination]
    }).then(statsData => {
      const hbsObj = formatStats(statsData);
      console.log(hbsObj);
      res.render("index", hbsObj);
    });
  });

  app.get("/state/:state", (req, res) => {
    db.Stat.findOne({
      where: {
        state: req.params.state
      },
      include: [db.Vaccination]
    }).then(statsData => {
      const hbsObj = formatStats(statsData);
      res.render("stateResults", hbsObj);
    });
  });

  app.get("/state", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("state");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });
  // route for Test Site Search Page

  app.post("/results", (req, res) => {
    siteData = req.body.hbsObj;
    res.render("siteResults", siteData);
  });

  app.get("/site", (req, res) => {
    res.render("siteSearch");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // // Here we've add our isAuthenticated middleware to this route.
  // // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("update");
  });
};
