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
exports.Primitivo = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var Primitivo = /** @class */ (function (_super) {
    __extends(Primitivo, _super);
    // Constructor
    function Primitivo(Linea, Columna, Value) {
        var _this = 
        // Super Llamar Constructor Clase Abstracta
        _super.call(this, Linea, Columna) || this;
        // Declaraciones
        _this.AST = null;
        _this.Value = Value;
        return _this;
    }
    // Metodo Traducir
    Primitivo.prototype.Traducir = function () {
        // Retonar Valor
        return this.Value;
    };
    return Primitivo;
}(Instruccion_1.Instruccion));
exports.Primitivo = Primitivo;
