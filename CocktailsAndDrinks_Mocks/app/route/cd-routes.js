const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const config = require('../config/config');
const jsonParser = bodyParser.json();
const router = express.Router();
const cdcontroller = require('../controller/cd-controller');

router.get(config.BASE_URL.concat('/ping'), cdcontroller.ping);
router.get(config.BASE_URL.concat('/categories'), cdcontroller.categories);


module.exports = app;
module.exports = router;