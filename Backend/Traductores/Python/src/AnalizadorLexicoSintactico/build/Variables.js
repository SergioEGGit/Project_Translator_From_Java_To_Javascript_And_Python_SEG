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
exports.DiccionarioJava = { 1: "public", 2: "class", 3: "interface" };
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
