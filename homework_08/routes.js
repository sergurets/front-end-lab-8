var fs = require("fs");
var handlers = require('./controllers/handlers.js');
var routes = function(app) {
  app.get('/rockstars', handlers.getArtists);
  app.get('/rockstar/:id', handlers.getById);
  app.delete('/rockstar/:id', handlers.delById);
  app.post('/rockstar', handlers.postStar);
  app.put('/rockstar/:id', handlers.update);
}

module.exports = routes;

