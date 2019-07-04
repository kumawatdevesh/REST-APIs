const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

var players = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    runs: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    centuries: {
      type: String,
      require: true
    }
});

players.plugin(AutoIncrement, {id:'order',inc_field: 'id'});
module.exports = mongoose.model('player', players);