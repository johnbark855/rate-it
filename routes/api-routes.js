/*
  API routes to get, post, and delete user entries from application
*/

const db = require("../models");

module.exports = (app) => {
  app.get("/api/items", function (req, res) {
    db.Items.findAll({}).then((dbPost) => res.json(dbPost));
  });

  app.post("/api/items", function (req, res) {
    db.Items.create({
      item: req.body.userInput,
      rating: req.body.userRating,
    }).then((dbPost) => res.json(dbPost));
  });

  app.delete("/api/items/:id", function (req, res) {
    db.Items.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
};
