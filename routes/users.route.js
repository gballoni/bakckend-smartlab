const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const user_controller = require('../controllers/user.controller');
// teste simples
router.get('/testar', user_controller.test);
module.exports = router;
