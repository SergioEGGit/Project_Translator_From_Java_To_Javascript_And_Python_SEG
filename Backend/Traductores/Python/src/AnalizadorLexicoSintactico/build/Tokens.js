"use strict";
// Clase Tokens 
var Nuevo_Token = /** @class */ (function () {
    // Constructor 
    function Nuevo_Token(Identificador, Linea, Columna, Tipo, Lexema) {
        this.Identificador = Identificador;
        this.Linea = Linea;
        this.Columna = Columna;
        this.Tipo = Tipo;
        this.Lexema = Lexema;
    }
    // Metodos Get Y Set
    Nuevo_Token.prototype.GetIdentificador = function () {
        return this.Identificador;
    };
    return Nuevo_Token;
}());
