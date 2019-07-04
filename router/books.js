const express = require('express')
const router = express();
const controller = require('../controllers/books');

router.get('/', controller.getBooks);

router.post('/', controller.postBooks);

router.put('/update/:id', controller.updateItem);

router.delete('/delete/:id', controller.deleteItem);

router.get('/singleProduct/:id', controller.getSingleProduct);

module.exports = router;
