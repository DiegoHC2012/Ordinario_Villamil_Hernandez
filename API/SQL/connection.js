const mysql = require('mysql2');
const config = require('../config');

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port,
  connectTimeout: 10000
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    process.exit(1);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});

module.exports = connection;
