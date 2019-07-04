const Players = require('../models/players');

// get all player details
exports.getPlayers = (req, res, next) => {
  Players.find().then(result => {
        res.send(result);
    })
};

// get single player detail
exports.getSinglePlayer = (req, res, next) => {
  var id = req.params.id;
  Players.findOne({id: id}).then(player => {
    res.send(player);
  });
};

// creating player
exports.PostPlayer = (req, res, next) => {
    const name = req.body.name;
    const runs = req.body.runs;
    const age = req.body.age;
    const centuries = req.body.centuries;
    var player = new Players({
        name: name,
        runs: runs,
        age: age,
        centuries: centuries
    });
    player.save().then(result => {
        res.send('posted');
    }).catch(err => {
        console.log(err);
    });
};

// for updating player details
exports.updatePlayer = (req, res, next) => {
    const id = req.params.id;
    const updatedName = req.body.name;
    const updatedRuns = req.body.runs;
    const updatedAge = req.body.age;
    const updatedCenturies = req.body.centuries;

  Players.findOneAndUpdate({id: id})
  .then(player => {
    player.name = updatedName;
    player.runs = updatedRuns;
    player.age = updatedAge;
    player.centuries = updatedCenturies;
    return player.save().then(result => res.send('updated')).catch(err => {console.log(err)});
  });
};

// for deleting product
exports.deletePlayer = (req, res, next) => {
  const id = req.params.id;
  Players.findOneAndDelete({id: id}, function(err) {
    res.send('deleted');
});
};
