const express = require('express');
const router = express();
const estudiante_GET = require('./estudiantes_GET')
const estudiante_POST = require('./estudiantes_POST')

router.use('/GET', estudiante_GET);
router.use('/POST', estudiante_POST);

module.exports = router
