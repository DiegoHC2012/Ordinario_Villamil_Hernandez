const express = require('express');
const connection = require('../../SQL/connection');
const router = express.Router();

router.post('/', (req, res) => {
    const datos = req.body;
    const query = 'INSERT INTO maestros(nombre, edad, telefono, correo, usuario_creacio) VALUES(?, ?, ?, ?, ?);';
    connection.query(query, [datos.nombre, datos.edad, datos.telefono, datos.correo, datos.usuario_creacio], (error, results) => {
      if (error) throw error;
      res.json(results);
     })
});

module.exports = router


