"use strict";
// Imports 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeErrores = exports.ListaDeTokens = exports.VaciarArrayErrores = exports.VaciarArrayTokens = exports.DiccionarioJava = exports.ArrayErrores = exports.ArrayTokens = void 0;
// Crer PDF
var jspdf_1 = require("jspdf");
// Generar Tablas PDF
var jspdf_autotable_1 = __importDefault(require("jspdf-autotable"));
// Variables
// Array De Tokens
exports.ArrayTokens = new Array();
// Array De Errores
exports.ArrayErrores = new Array();
// Diccionario De Palabras Reservadas
exports.DiccionarioJava = {
    1: "public",
    2: "static",
    3: "class",
    4: "interface",
    5: "void",
    6: "for",
    7: "do",
    8: "while",
    9: "if",
    10: "else",
    11: "break",
    12: "continue",
    13: "return",
    14: "main",
    15: "args",
    16: "int",
    17: "Boolean",
    18: "boolean",
    19: "double",
    20: "String",
    21: "string",
    22: "char",
    23: "true",
    24: "false",
    25: "System",
    26: "out",
    27: "println",
    28: "print"
};
// Metodos / Funciones
// Vaciar Array Tokens
function VaciarArrayTokens() {
    // Declaracion 
    var SizeArray = exports.ArrayTokens.length;
    // Recorrer Array	
    for (var Contador = 0; Contador <= SizeArray; Contador++) {
        // Pop Array
        exports.ArrayTokens.pop();
    }
}
exports.VaciarArrayTokens = VaciarArrayTokens;
// Vaciar Array Errores
function VaciarArrayErrores() {
    // Declaracion
    var SizeErrores = exports.ArrayErrores.length;
    // Recorrer Array
    for (var Contador = 0; Contador <= SizeErrores; Contador++) {
        // Pop Array
        exports.ArrayErrores.pop();
    }
}
exports.VaciarArrayErrores = VaciarArrayErrores;
// Funcion Generar PDF Tokens
function ListaDeTokens() {
    // Filas Tabla
    var Filas = [{}];
    // Obtener Todos Los Tokens
    for (var Contador = 0; Contador < exports.ArrayTokens.length; Contador++) {
        // Agregar Token A Array
        Filas.push([
            exports.ArrayTokens[Contador].Identificador.toString(),
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
    DocumentoPDF.save('src/Reportes/TablaDeTokensPY.pdf');
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
        Filas.push([
            exports.ArrayErrores[Contador].Identificador.toString(),
            exports.ArrayErrores[Contador].Tipo,
            exports.ArrayErrores[Contador].Linea.toString(),
            exports.ArrayErrores[Contador].Columna.toString(),
            exports.ArrayErrores[Contador].Descripcion
        ]);
        ErroresLista += "No: " + exports.ArrayErrores[Contador].Identificador.toString() +
            " Tipo: " + exports.ArrayErrores[Contador].Tipo +
            " Fila: " + exports.ArrayErrores[Contador].Linea.toString() +
            " Columna: " + exports.ArrayErrores[Contador].Columna.toString() +
            " Descripcion: " + exports.ArrayErrores[Contador].Descripcion + "\n";
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
    DocumentoPDF.save('src/Reportes/TablaDeErroresPY.pdf');
    return [ErroresLista, Error];
}
exports.ListaDeErrores = ListaDeErrores;
