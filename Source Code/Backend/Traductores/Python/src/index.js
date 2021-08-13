// Creación Servidor

// Variables Y Constantes

// Express 
const ExpressAuxiliar = require('express');

// Morgan
const MorganAuxiliar = require('morgan');

// Inicializar Aplicacion
const MainAplication = ExpressAuxiliar();

// Definir Puerto
MainAplication.set('port', process.env.PORT || 8887);

// Dev
MainAplication.use(MorganAuxiliar('dev'));

// Urlencoded
MainAplication.use(ExpressAuxiliar.urlencoded({extended: false}));

// JSON
MainAplication.use(ExpressAuxiliar.json());

// Json Format
MainAplication.set('json spaces', 2);

// Permisos Peticiones HTTP
MainAplication.use( (req, res, next) => {
	
    // Solicitar Permisos Peticiones
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Max-Age", "1800");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();

});

// Routes
MainAplication.use(require('./Routes'));

// Inicializar Aplicacion
MainAplication.listen(MainAplication.get('port'), () => {
	
	// Mensaje De Verificacion
	console.log("Servidor Escuchando En Puerto:", MainAplication.get('port'));	
	
}); 