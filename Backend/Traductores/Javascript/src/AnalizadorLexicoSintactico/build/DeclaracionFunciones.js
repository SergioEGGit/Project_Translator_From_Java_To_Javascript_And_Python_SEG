"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionFunciones = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var DeclaracionFunciones = /** @class */ (function (_super) {
    __extends(DeclaracionFunciones, _super);
    // Constructor
    function DeclaracionFunciones(Linea, Columna, Tipos, Identificador, ListaParametros) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Tipos = Tipos;
        _this.Identificador = Identificador;
        _this.ListaParametros = ListaParametros;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    DeclaracionFunciones.prototype.Traducir = function () {
        // Declaraciones
        var Tipos = this.Tipos;
        var Identificador = this.Identificador;
        var Traduccion = "";
        var Parametros = "";
        for (var key in this.ListaParametros) {
            if (Number(key) + 1 == this.ListaParametros.length) {
                Parametros += this.ListaParametros[Number(key)].Traducir();
            }
            else {
                Parametros += this.ListaParametros[Number(key)].Traducir() + ", ";
            }
        }
        Traduccion = Variables_Metodos_1.AgregarIdentacion() + "function " + Identificador + "(" + Parametros + "); \n\n";
        return Traduccion;
    };
    return DeclaracionFunciones;
}(Instruccion_1.Instruccion));
exports.DeclaracionFunciones = DeclaracionFunciones;
