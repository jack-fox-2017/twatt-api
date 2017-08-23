var express = require('express');
var router = express.Router();
var oauth = require('../controllers/oauth')

/* GET users listing. */
router.get('/', oauth)

module.exports = router;
