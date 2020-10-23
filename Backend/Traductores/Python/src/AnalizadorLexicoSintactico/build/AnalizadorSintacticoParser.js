"use strict";
// imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalizadorSintacticoParser = void 0;
// Lista De Tokens
var Variables_1 = require("./Variables");
// Declaraciones
// Index Lista De Tokens
var IndexToken = 0;
// Token Pre Analisis
var TokenActual;
// Existe Error Sintactico
var ErrorSintactico = false;
// Bandera Errores Parea
var Recuperacion = true;
// Comienzo Analisis Sintactico 
function AnalizadorSintacticoParser() {
    // Indicar Inicio Analizador
    IndexToken = 0;
    // Pre Analisis Analizador
    TokenActual = Variables_1.ArrayTokens[IndexToken];
    // Inicio Analisis
    InicioAnalisis();
}
exports.AnalizadorSintacticoParser = AnalizadorSintacticoParser;
// Inicio Analisis
function InicioAnalisis() {
    // Instrucciones Principales
}
// Metodo Parea 
function PrincipalParea(TipoToken) {
    // Verificar Si Hay Errores Sintacticos
    if (TokenActual.GetTipo() != TipoToken) {
    }
}
