const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/books', bookController.createBook);

router.get('/books/all', bookController.getAllBooks);

router.get('/books/:id', bookController.getBookById);

router.get('/books/name/:name', bookController.getBookByName);

module.exports = router;