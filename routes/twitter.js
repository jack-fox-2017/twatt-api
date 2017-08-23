var express = require('express');
var router = express.Router();
var controller = require('../controllers/twitterController')

router.get('/search/:name', controller.search)
router.get('/timeline', controller.timelineHome)
router.get('/profile', controller.timelineUser)
router.post('/post', controller.postTwitter)

module.exports = router;
