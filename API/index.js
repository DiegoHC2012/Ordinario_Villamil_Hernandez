const express = require('express');
const app = express();
const materias_rutas = require('./routes/materias/index');
const calificaciones_rutas = require('./routes/calificaciones/index');
const port = 3000;

app.use(express.json())

app.use('/api/asignaturas', materias_rutas);
app.use('/api/calificaciones', calificaciones_rutas);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//index bueno, el mero mero
