const app = require('./config/server');

require('./app/routes/news')(app);

// Iniciar el servidor

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});

