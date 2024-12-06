const express = require('express');
const connection = require('../../SQL/connection');
const router = express.Router();

router.post('/', (req, res) => {
    const datos = req.body;
    const query = 'INSERT INTO calificaciones(estudiante_id, maestro_id, materia_id, create_user) VALUES(?, ?, ?, ?);';
    connection.query(query, [datos.estudiante_id, datos.maestro_id, datos.materia_id, datos.create_user], (error, results) => {
      if (error) throw error;
      res.json(results);
     })
});

module.exports = router


