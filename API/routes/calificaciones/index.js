const express = require('express');
const router = express();
const calificaciones_GET = require('./calificaciones_GET')
const calificaciones_POST = require('./calificaciones_POST')

router.use('/GET', calificaciones_GET);
router.use('/POST', calificaciones_POST);

module.exports = router