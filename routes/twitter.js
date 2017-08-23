var express = require('express');
var router = express.Router();
var controller = require('../controllers/twattController')

/* GET users listing. */
router.get('/:query', controller.getTwitter);
router.get('/home/:home_timeline', controller.getHomeTimeline);
router.post('/status', controller.postNewStatus);

module.exports = router;
