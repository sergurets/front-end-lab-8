var express = require("express");
var routes = require("./routes.js");
var app = express();
var handlers = require("./controllers/handlers.js");
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

routes(app);
app.get('/', function(req, res) {
  res.send("rockstars server started");
});

const port = process.env.PORT || 3000;
app.listen(port);