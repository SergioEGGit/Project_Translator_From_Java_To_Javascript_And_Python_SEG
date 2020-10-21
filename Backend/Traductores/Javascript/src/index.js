// Creación Servidor

// Variables Y Constantes

// Módulo Express
const ExpressAuxiliar = require('express');

// Módulo Morgan
const MorganAuxiliar = require('morgan');

// Inicializar Aplicacion
const MainAplication = ExpressAuxiliar();

// Definir Puerto
MainAplication.set('port', process.env.PORT || 7776);

// Mostrar Peticiones En Consola

// Usar Dev
MainAplication.use(MorganAuxiliar('dev'));

// Usar Urlencoded
MainAplication.use(ExpressAuxiliar.urlencoded( { extended: false } ));

// Usar Json
MainAplication.use(ExpressAuxiliar.json());

// Set Espaciado Json
MainAplication.set('json spaces', 2);

// Permisos Peticiones HTTP
MainAplication.use( (req, res, next) => {
	
    // Habilitar Permisos Peticiones HTTP
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