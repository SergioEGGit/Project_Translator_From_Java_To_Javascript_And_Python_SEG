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
exports.Parametros = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var Parametros = /** @class */ (function (_super) {
    __extends(Parametros, _super);
    // Constructor
    function Parametros(Linea, Columna, Tipos, Identificador) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Tipos = Tipos;
        _this.Identificador = Identificador;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Parametros.prototype.Traducir = function () {
        // Declaraciones
        var Tipos = this.Tipos;
        var Identificador = this.Identificador;
        // Traduccion
        var Traduccion = Identificador;
        return Traduccion;
    };
    return Parametros;
}(Instruccion_1.Instruccion));
exports.Parametros = Parametros;
