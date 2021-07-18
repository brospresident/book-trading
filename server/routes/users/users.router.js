const express = require('express');

// imports
const { httpGetAllUsers, httpLoginUser, httpRegisterUser } = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);
usersRouter.post('/login', httpLoginUser);
usersRouter.post('/register', httpRegisterUser);

module.exports = usersRouter;