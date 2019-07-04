const express = require('express')
const router = express();
const books = require('../controllers/books');
const players = require('../controllers/players');

router.get('/books', books.getBooks);

router.post('/books', books.postBooks);

router.put('/books/update/:id', books.updateItem);

router.delete('/books/delete/:id', books.deleteItem);

router.get('/books/singleProduct/:id', books.getSingleProduct);

router.get('/players', players.getPlayers);

router.post('/players', players.PostPlayer);

router.put('/players/update/:id', players.updatePlayer);

router.delete('/players/delete/:id', players.deletePlayer);

router.get('/players/singlePlayer/:id', players.getSinglePlayer);

module.exports = router;
