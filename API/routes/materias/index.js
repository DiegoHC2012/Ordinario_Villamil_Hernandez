const express = require('express');
const router = express();
const materias_GET = require('./materias_GET')
const materias_POST = require('./materias_POST')

router.use('/GET', materias_GET);
router.use('/POST', materias_POST);

module.exports = router