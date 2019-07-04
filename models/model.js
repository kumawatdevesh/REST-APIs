const mongoose = require('mongoose');

var books = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
      type: String,
      require: true
    }
});

module.exports = mongoose.model('book', books);
