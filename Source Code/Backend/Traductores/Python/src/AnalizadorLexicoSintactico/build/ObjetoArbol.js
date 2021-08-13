"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodoArbol = void 0;
// Clase NodoArbol
var NodoArbol = /** @class */ (function () {
    // Constructor 	
    function NodoArbol(Identificador, NombreNodo) {
        // Asignacion
        this.Identificador = Identificador;
        this.NombreNodo = NombreNodo;
        this.ArrayNodos = new Array();
    }
    // Metodo Generar Grafica
    NodoArbol.prototype.GenerarTxtGrafica = function () {
        // Declaraciones
        var Contador = 0;
        var Cadena = "";
        // Agregar Raiz
        Cadena = "    A_" + this.Identificador + "[label=\"" + this.NombreNodo + "\"];\n\n";
        // Verificar Si Hay Nodos Hijos
        if (this.ArrayNodos.length > 0) {
            // Recorrer Lista De Nodos Hijos
            while (Contador < this.ArrayNodos.length) {
                Cadena += "    A_" + this.Identificador + " -> " + "A_" + this.ArrayNodos[Contador].Identificador + "\n";
                Cadena += this.ArrayNodos[Contador].GenerarTxtGrafica();
                Contador++;
            }
        }
        return Cadena;
    };
    return NodoArbol;
}());
exports.NodoArbol = NodoArbol;
