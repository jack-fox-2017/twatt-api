const express = require('express');
const router = express.Router();
var twattcontroller = require('../controller/twattController')

router.get('/', twattcontroller.timeline)
router.post('/', twattcontroller.update)
router.get('/search',twattcontroller.search)

module.exports = router;
