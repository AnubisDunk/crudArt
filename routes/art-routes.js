const express = require('express');
const { getHome, getArt } = require('../controllers/art-controller')
const router = express.Router();

router.get('/', getHome);
router.get('/makeartwork', getArt);

module.exports = router;
