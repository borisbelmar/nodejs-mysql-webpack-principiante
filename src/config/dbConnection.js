// Almacenamiento de los datos de conexón MySQL
const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'boris',
        password: 'boris',
        database: 'news_portal'
    });
}