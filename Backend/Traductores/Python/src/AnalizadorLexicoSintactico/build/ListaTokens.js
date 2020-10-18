"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuevoToken = void 0;
// Clase Tokens 
var NuevoToken = /** @class */ (function () {
    // Constructor 
    function NuevoToken(Identificador, Linea, Columna, Tipo, Lexema) {
        this.Identificador = Identificador;
        this.Linea = Linea;
        this.Columna = Columna;
        this.Tipo = Tipo;
        this.Lexema = Lexema;
    }
    // Metodos Get Y Set
    // Get Identificador
    NuevoToken.prototype.GetIdentificador = function () {
        return this.Identificador;
    };
    // Get Linea
    NuevoToken.prototype.GetLinea = function () {
        return this.Linea;
    };
    // Get Columna
    NuevoToken.prototype.GetColumna = function () {
        return this.Columna;
    };
    // Get Tipo 
    NuevoToken.prototype.GetTipo = function () {
        return this.Tipo;
    };
    // Get Lexema
    NuevoToken.prototype.GetLexema = function () {
        return this.Lexema;
    };
    // Set Identificador
    NuevoToken.prototype.SetIdentificador = function (Identificador) {
        this.Identificador = Identificador;
    };
    // Set Linea
    NuevoToken.prototype.SetLinea = function (Linea) {
        this.Linea = Linea;
    };
    // Set Columna
    NuevoToken.prototype.SetColumna = function (Columna) {
        this.Columna = Columna;
    };
    // Set Tipo
    NuevoToken.prototype.SetTipo = function (Tipo) {
        this.Tipo = Tipo;
    };
    // Set Lexema
    NuevoToken.prototype.SetLexema = function (Lexema) {
        this.Lexema = Lexema;
    };
    return NuevoToken;
}());
exports.NuevoToken = NuevoToken;
