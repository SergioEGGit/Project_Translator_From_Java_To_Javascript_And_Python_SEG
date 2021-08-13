"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeErrores = exports.ListaDeTokens = exports.VaciarIdentacion = exports.VaciarErrores = exports.VaciarTokens = exports.AgregarIdentacion = exports.ArrayTokens = exports.ArrayErrores = exports.Identacion = void 0;
// Crer PDF
var jspdf_1 = require("jspdf");
// Generar Tablas PDF
var jspdf_autotable_1 = __importDefault(require("jspdf-autotable"));
// Array Identacion
exports.Identacion = new Array();
// Array De Errores
exports.ArrayErrores = new Array();
// Array De Tokens
exports.ArrayTokens = new Array();
// Funcion Que Cuenta Los Espacios
function AgregarIdentacion() {
    // Declaraciones
    var Espacios = "";
    // Agregar Espacios
    for (var Contador = 0; Contador < exports.Identacion.length; Contador++) {
        Espacios += "    ";
    }
    return Espacios;
}
exports.AgregarIdentacion = AgregarIdentacion;
// Vaciar Lista De Tokens
function VaciarTokens() {
    // Nueva Lista De Tokens
    exports.ArrayTokens = new Array();
}
exports.VaciarTokens = VaciarTokens;
// Vaciar Lista De Errores
function VaciarErrores() {
    // Nueva Lista De Errores
    exports.ArrayErrores = new Array();
}
exports.VaciarErrores = VaciarErrores;
// Vaciar Identacion
function VaciarIdentacion() {
    // Nueva Lista De Identacion
    exports.Identacion = new Array();
}
exports.VaciarIdentacion = VaciarIdentacion;
// Funcion Generar PDF Tokens
function ListaDeTokens() {
    // Filas Tabla
    var Filas = [{}];
    // Obtener Todos Los Tokens
    for (var Contador = 0; Contador < exports.ArrayTokens.length; Contador++) {
        // Agregar Token A Array
        Filas.push([
            (Contador + 1).toString(),
            exports.ArrayTokens[Contador].Linea.toString(),
            exports.ArrayTokens[Contador].Columna.toString(),
            exports.ArrayTokens[Contador].Tipo,
            exports.ArrayTokens[Contador].Lexema
        ]);
    }
    // Documento PDF 
    var DocumentoPDF = new jspdf_1.jsPDF();
    // Generar Tabla
    jspdf_autotable_1.default(DocumentoPDF, {
        theme: 'striped',
        headStyles: {
            font: 'times',
            fontStyle: 'bold',
            fillColor: [127, 74, 241],
            fontSize: 13
        },
        head: [['No.', 'Fila', 'Columna', 'Tipo', 'Descripcion']],
        body: Filas
    });
    // Guardar PDF
    DocumentoPDF.save('src/Reportes/TablaDeTokensJS.pdf');
}
exports.ListaDeTokens = ListaDeTokens;
// Funcion Generar PDF Errores
function ListaDeErrores() {
    // Declaraciones
    // Filas Tabla
    var Filas = [{}];
    var DescripcionError = "";
    var ErroresLista = "";
    var Error = false;
    // Obtener Todos Los Tokens
    for (var Contador = 0; Contador < exports.ArrayErrores.length; Contador++) {
        // Agregar Token A Array
        if (exports.ArrayErrores[Contador].Tipo == "Error Lexico") {
            DescripcionError = "El Caracter '" + exports.ArrayErrores[Contador].Lexema + "' No Pertenece Al Lenguaje";
            Filas.push([
                (Contador + 1).toString(),
                exports.ArrayErrores[Contador].Tipo,
                exports.ArrayErrores[Contador].Linea.toString(),
                exports.ArrayErrores[Contador].Columna.toString(),
                DescripcionError
            ]);
            ErroresLista += "No: " + (Contador + 1).toString() +
                " Tipo: " + exports.ArrayErrores[Contador].Tipo +
                " Fila: " + exports.ArrayErrores[Contador].Linea.toString() +
                " Columna: " + exports.ArrayErrores[Contador].Columna.toString() +
                " Descripcion: " + DescripcionError + "\n";
        }
        else {
            DescripcionError = "Se Esperaba Otro Tipo De Token, Delimitador: " + exports.ArrayErrores[Contador].Lexema;
            Filas.push([
                (Contador + 1).toString(),
                exports.ArrayErrores[Contador].Tipo,
                exports.ArrayErrores[Contador].Linea.toString(),
                exports.ArrayErrores[Contador].Columna.toString(),
                DescripcionError
            ]);
            ErroresLista += "No: " + (Contador + 1).toString() +
                " Tipo: " + exports.ArrayErrores[Contador].Tipo +
                " Fila: " + exports.ArrayErrores[Contador].Linea.toString() +
                " Columna: " + exports.ArrayErrores[Contador].Columna.toString() +
                " Descripcion: " + DescripcionError + "\n";
        }
    }
    // Hay Errores
    if (exports.ArrayErrores.length > 0) {
        Error = true;
    }
    else {
        Error = false;
    }
    // Documento PDF 
    var DocumentoPDF = new jspdf_1.jsPDF();
    // Generar Tabla
    jspdf_autotable_1.default(DocumentoPDF, {
        theme: 'striped',
        headStyles: {
            font: 'times',
            fontStyle: 'bold',
            fillColor: [220, 20, 60],
            fontSize: 13
        },
        head: [['No.', 'Tipo Error', 'Fila', 'Columna', 'Descripcion']],
        body: Filas
    });
    // Guardar PDF
    DocumentoPDF.save('src/Reportes/TablaDeErroresJS.pdf');
    return [ErroresLista, Error];
}
exports.ListaDeErrores = ListaDeErrores;
