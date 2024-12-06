const express = require('express');
const connection = require('../../SQL/connection');
const router = express.Router();

router.get('/', (req, res) => {
  const query = 'SELECT * FROM estudiantes;';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  })
});

module.exports = router


