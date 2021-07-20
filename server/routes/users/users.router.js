const express = require('express');

// imports
const { httpGetAllUsers, httpGetUserById, httpLoginUser, httpRegisterUser } = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);
usersRouter.post('/login', httpLoginUser);
usersRouter.post('/register', httpRegisterUser);
usersRouter.get('/:id', httpGetUserById);

module.exports = usersRouter;