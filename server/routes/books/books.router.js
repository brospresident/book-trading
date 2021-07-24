const express = require('express');

const booksRouter = express.Router();

const { httpGetAllUserBooks, httpAddNewUserBook } = require('./books.controller');

// routes
booksRouter.get('/', httpGetAllUserBooks);
booksRouter.get('/:id', httpGetAllUserBooks);
booksRouter.post('/', httpAddNewUserBook);

module.exports = booksRouter;