"use strict";
// Imports 
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaciarArrayErrores = exports.VaciarArrayTokens = exports.DiccionarioJava = exports.ArrayErrores = exports.ArrayTokens = void 0;
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
    // Recorrer Array
    for (var Contador = 0; Contador <= exports.ArrayTokens.length + 1; Contador++) {
        // Pop Array
        exports.ArrayTokens.pop();
    }
}
exports.VaciarArrayTokens = VaciarArrayTokens;
// Vaciar Array Errores
function VaciarArrayErrores() {
    // Recorrer Array
    for (var Contador = 0; Contador <= exports.ArrayErrores.length + 1; Contador++) {
        // Pop Array
        exports.ArrayErrores.pop();
    }
}
exports.VaciarArrayErrores = VaciarArrayErrores;
