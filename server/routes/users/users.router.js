const express = require('express');

// imports
const { httpGetAllUsers } = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);

module.exports = usersRouter;