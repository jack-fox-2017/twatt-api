const express = require('express');
const router = express.Router();

const {getTwitter} = require('../controller/twit');

router.get('/', getTwitter)

module.exports = router
