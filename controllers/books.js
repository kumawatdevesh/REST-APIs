const Books = require('../models/model');

// get all products
exports.getBooks = (req, res, next) => {
  Books.find().then(result => {
        res.send(result);
    })
};

exports.getSingleProduct = (req, res, next) => {
  var id = req.params.id;
  Books.findOne({_id: id}).then(book => {
    res.send(book);
  });
};

// creating product
exports.postBooks = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const desc = req.body.desc;
    const image = req.body.image;
    var book = new Books({
        name: name,
        price: price,
        desc: desc,
        image: image
    });
    book.save().then(result => {
        res.send('posted')
    });
};

// for updating product
exports.updateItem = (req, res, next) => {
  const id = req.params.id;
  const updatedName = req.body.name;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.desc;
  const image = req.body.image;

  Books.findOne({_id: id})
  .then(book => {
    book.name = updatedName;
    book.price = updatedPrice;
    book.desc = updatedDesc;
    book.image = image;
    return book.save().then(result => res.send('updated')).catch(err => {console.log(err)});
  });
};

// for deleting product
exports.deleteItem = (req, res, next) => {
  const id = req.params.id;
  Books.remove({ _id: id}, function(err) {
    res.send('deleted');
});
};
