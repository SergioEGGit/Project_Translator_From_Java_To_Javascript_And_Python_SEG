// Creación Servidor

// Variables Y Constantes
const ExpressAuxiliar = require('express');
const MorganAuxiliar = require('morgan');

// Inicializar Aplicacion
const MainAplication = ExpressAuxiliar();

// Definir Puerto
MainAplication.set('port', process.env.PORT || 8887);

// Mostrar Peticiones En Consola
MainAplication.use(MorganAuxiliar('dev'));
MainAplication.use(ExpressAuxiliar.urlencoded({extended: false}));
MainAplication.use(ExpressAuxiliar.json());
MainAplication.set('json spaces', 2);

// Permisos Peticiones HTTP
MainAplication.use( (req, res, next) => {
	
    //res.header('Access-Control-Allow-Origin', '*');
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