const db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Items.findAll({}).then((items) => {
      let hbsObject = {
        items: items,
      };
      res.render("index", hbsObject);
    });
  });
};
