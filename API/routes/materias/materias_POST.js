const express = require('express');
const connection = require('../../SQL/connection');
const router = express.Router();

router.post('/', (req, res) => {
    const datos = req.body;
    const query = 'INSERT INTO materias(nombre, profesor_id, create_user) VALUES(?, ?, ?);';
    connection.query(query, [datos.nombre, datos.profesor_id, datos.create_user], (error, results) => {
      if (error) throw error;
      res.json(results);
     })
});

module.exports = router


