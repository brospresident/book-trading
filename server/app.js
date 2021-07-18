const express = require('express');

const app = express();

// Routers
const usersRouter = require('./routes/users/users.router');

//midllewares
app.use(express.json()); // parse every json and convert it to a js object

// Routes midllewares
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
    return res.status(200).json('Ready to read books?');
});

module.exports = app;