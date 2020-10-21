"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tokens = void 0;
// Imports
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Tokens = /** @class */ (function () {
    // Constructor
    function Tokens(Linea, Columna, Tipo, Lexema) {
        this.Linea = Linea;
        this.Columna = Columna;
        this.Tipo = Tipo;
        this.Lexema = Lexema;
        // Rellenear Arreglo
        Variables_Metodos_1.ArrayTokens.push(this);
    }
    return Tokens;
}());
exports.Tokens = Tokens;
