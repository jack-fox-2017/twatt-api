var express = require('express');
var router = express.Router();
const twitterController = require('../controllers/twitterController');

/* GET users listing. */
router.get('/', twitterController.index)
router.post('/', twitterController.index)
router.get('/timeline', twitterController.timeline);
router.get('/trends', twitterController.trends);
router.get('/followers', twitterController.follower);

module.exports = router;
