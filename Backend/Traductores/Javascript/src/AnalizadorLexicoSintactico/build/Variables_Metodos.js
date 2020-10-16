"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarIdentacion = exports.ArrayTokens = exports.ArrayErrores = exports.Identacion = void 0;
// Array Identacion
exports.Identacion = new Array();
exports.ArrayErrores = new Array();
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
