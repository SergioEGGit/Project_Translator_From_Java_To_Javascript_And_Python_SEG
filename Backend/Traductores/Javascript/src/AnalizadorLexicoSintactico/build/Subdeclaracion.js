"use strict";
// Imports
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
exports.Subdeclaracion = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var Subdeclaracion = /** @class */ (function (_super) {
    __extends(Subdeclaracion, _super);
    // Constructor
    function Subdeclaracion(Linea, Columna, Identificador, Expresion) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Identificador = Identificador;
        _this.Expresion = Expresion;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Subdeclaracion.prototype.Traducir = function () {
        // Declaraciones
        var Identificador = this.Identificador;
        var Expresion;
        var Traduccion = "";
        // Verificar Si Hay Expresion
        if (this.Expresion != null) {
            Expresion = this.Expresion.Traducir();
            Traduccion = Identificador + " = " + Expresion;
            return Traduccion;
        }
        return Identificador;
    };
    return Subdeclaracion;
}(Instruccion_1.Instruccion));
exports.Subdeclaracion = Subdeclaracion;
