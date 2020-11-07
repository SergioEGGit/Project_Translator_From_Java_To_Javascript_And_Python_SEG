"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arbol = void 0;
// Clase Arbol
var Arbol = /** @class */ (function () {
    function Arbol(Valor) {
        this.Identificador = 0;
        this.Valor = Valor;
        this.ArrayNodos = [];
    }
    // Agregar Nodo A Lista De Nodos
    Arbol.prototype.AgregarArrayNodo = function (Nodo) {
        this.ArrayNodos.push(Nodo);
    };
    return Arbol;
}());
exports.Arbol = Arbol;
