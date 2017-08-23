const express = require('express');
const controller = require('../controllers/twitt')
const router = express.Router();


router.get('/search', controller.searchTwit);
router.get('/timeline', controller.timeLineTwitt);
router.post('/posting', controller.postTwitt);


module.exports = router;
