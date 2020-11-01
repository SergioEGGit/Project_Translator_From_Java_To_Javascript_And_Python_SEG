"use strict";
// Clase Error
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodoArbol = void 0;
var NodoArbol = /** @class */ (function () {
    // Constructor 	
    function NodoArbol(NombreNodo) {
        // Asignacion
        this.NombreNodo = NombreNodo;
        this.ArrayNodos = new Array();
    }
    // Metodo Generar Grafica
    NodoArbol.prototype.GenerarTxtGrafica = function () {
        // Declaraciones
        var Contador = 0;
        var Cadena = "";
        // Agregar Raiz
        Cadena = "    A_" + this.NombreNodo + "[label=\"" + this.NombreNodo + "\"];\n\n";
        // Verificar Si Hay Nodos Hijos
        if (this.ArrayNodos.length > 0) {
            // Recorrer Lista De Nodos Hijos
            while (Contador < this.ArrayNodos.length) {
                Cadena += "    A_" + this.NombreNodo + " -> " + "A_" + this.ArrayNodos[Contador].NombreNodo + "\n\n";
                Cadena += this.ArrayNodos[Contador].GenerarTxtGrafica() + "\n\n";
                Contador++;
            }
        }
        return Cadena;
    };
    return NodoArbol;
}());
exports.NodoArbol = NodoArbol;
