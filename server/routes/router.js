const express = require("express");
const router = express.Router();

const controller = require('../controller/controller');

router.post('/api/users', controller.createUser)

router.get('/api/users', controller.findUsers)

router.put('/api/users/:id', controller.updateUser)

router.delete('/api/users/:id', controller.deleteUser)

router.get('/api/users/:id', controller.findUser)

module.exports = router

