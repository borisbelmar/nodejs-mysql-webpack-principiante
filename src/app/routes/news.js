// Ruta de consulta de News (Casi API)
const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();

    // Método GET para realizar consultas a la BBDD
    app.get('/', (req, res) => {
        // Query de consulta SQL
        connection.query('SELECT * FROM news', (err, result) => {
            console.log(result);
            // Renderizamos en la vista
            res.render('news/news', {
                news: result
            });
        });
    });

    // Método POST para insertar datos en la BBDD
    app.post('/news', (req, res) => {
        // Obtenemos todos los datos del formulario con body-parser
        // Y los almacenamos en una constante.
        const { title, news } = req.body;
        // Query de consulta y los datos.
        connection.query('INSERT INTO news SET?', {
            title: title,
            news: news
        }, (err, result) => {
            // Manejo de errores
            console.log(err)
            res.redirect('/');
        });
    });

}