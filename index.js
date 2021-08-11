const express = require ('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear server
const app = express();
//conectar  a la BD
conectarDB();
//HAbilitar cors
app.use(cors())
//Habilitar express.json / tambien se puede utilizar bodyparser
app.use(express.json({extended : true}))
//puerto de la app
const port = process.env.PORT || 4000;
//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'))
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

//arrancar server
app.listen(port,() => {
    console.log (`El servidor esta funcionando en el puerto ${port}`);
});