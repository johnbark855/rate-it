/*
  Default generated code for express server and handlebars
*/

require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

var hbs = exphbs.create({});

// register new function for handlebars to render stars on index.handlebars

hbs.handlebars.registerHelper("renderStars", (rating) => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    let checked = rating >= i ? "star" : "star_outline";
    result += `<span class="material-icons big_star">${checked}</span>`;
  }
  return new hbs.handlebars.SafeString(result);
});

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
