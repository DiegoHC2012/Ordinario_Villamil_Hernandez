const express = require('express');
const connection = require('../../SQL/connection');
const router = express.Router();

router.post('/', (req, res) => {
    const datos = req.body;
    const query = 'INSERT INTO estudiantes(nombre, apellidos, email, matricula, edad, semestre, usuario_creacio) VALUES(?, ?, ?, ?, ?, ?, ?);';
    connection.query(query, [datos.nombre, datos.apellidos, datos.email, datos.matricula, datos.edad, datos.semestre, datos.usuario_creacio], (error, results) => {
      if (error) throw error;
      res.json(results);
     })
});

module.exports = router


