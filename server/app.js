const express = require('express');
const cors = require('cors');

const app = express();

// Routers
const usersRouter = require('./routes/users/users.router');
const booksRouter = require('./routes/books/books.router');

//midllewares
app.use(express.json()); // parse every json and convert it to a js object
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Routes midllewares
app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);

app.get('/', (req, res) => {
    return res.status(200).json('Ready to read books?');
});

module.exports = app;