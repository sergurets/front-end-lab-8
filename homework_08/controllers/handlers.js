var fs = require("fs");

exports.postStar = function(req, res) {
  var result = JSON.parse(fs.readFileSync("./data/storage.json"));
  var newArtist = {};
  var stat;
  var name = req.body.name;
  if (!(req.body.hasOwnProperty("name") & req.body.hasOwnProperty("band") & req.body.hasOwnProperty("instrument"))) {
    res.status(400).send('incorrect data');
  }
  for (let i in result) {
    if (result[i].name === name) {
      stat = true
    }
  }
  if (stat) {
    res.status(409).send({
      "message": "Musician already exist."
    });
  } else {
    newArtist.name = req.body.name;
    newArtist.id = result.length + 1;
    newArtist.band = req.body.band;
    newArtist.instrument = req.body.instrument;

    result.push(newArtist);
    fs.writeFile("./data/storage.json", JSON.stringify(result), function(err) {
      if (err) throw err;
    });
    res.sendStatus(201);
  }
}

exports.getArtists = function(req, res) {
  var result = JSON.parse(fs.readFileSync("./data/storage.json"));
  res.status(200).send(result);
}

exports.getById = function(req, res) {
  var result = JSON.parse(fs.readFileSync("./data/storage.json"));
  let rockstar = result.find(function(star) {
    return star.id === Number(req.params.id);
  });
  if (rockstar) {
    res.status(200).send(rockstar)
  } else {
    res.status(404).send('404 Musician Not found')
  }
}

exports.delById = function(req, res) {
  var result = JSON.parse(fs.readFileSync("./data/storage.json"));
  var id = Number(req.params.id);
  for (let i in result) {
    if (result[i].id === id) {
      result.splice(i, 1);
      fs.writeFile("./data/storage.json", JSON.stringify(result), function(err) {
        if (err) res.sendStatus(404);
      });
      res.status(200).send({
        "message": "Musician has been successfully removed."
      });
    }
  }
}

exports.update = function(req, res) {
  var artist = {
    id: +req.params.id,
    name: req.body.name,
    band: req.body.band,
    instrument: req.body.instrument
  };
  var result = JSON.parse(fs.readFileSync("./data/storage.json"));
  for (let i in result) {
    if (result[i].id === artist.id) {
      result[i].name = artist.name;
      result[i].band = artist.band;
      result[i].instrument = artist.instrument;
      fs.writeFile("./data/storage.json", JSON.stringify(result), function(err) {
        if (err) res.sendStatus(404);
      });
      res.status(200).send(artist);
    }
  }
}
