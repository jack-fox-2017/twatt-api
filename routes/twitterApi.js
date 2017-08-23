var express = require('express');
var router = express.Router();
const twitterController = require('../controllers/twitterApi')

router.get('/', twitterController.index);
router.post('/', twitterController.updateStatus);
router.get('/search/:keyword',twitterController.keyword);
router.get('/home-timeline',twitterController.timeline);
router.get('/my-timeline',twitterController.mytimeline);


module.exports = router
