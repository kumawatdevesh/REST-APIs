const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

var books = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
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

books.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});
module.exports = mongoose.model('book', books);
