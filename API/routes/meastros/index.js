const express = require('express');
const router = express();
const maestro_GET = require('./maestros_GET')
const maestro_POST = require('./maestros_POST')

router.use('/GET', maestro_GET);
router.use('/POST', maestro_POST);

module.exports = router
