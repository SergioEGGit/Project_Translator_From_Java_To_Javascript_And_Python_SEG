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
exports.Print = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Print = /** @class */ (function (_super) {
    __extends(Print, _super);
    // Constructor
    function Print(Linea, Columna, Value) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Value = Value;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Print.prototype.Traducir = function () {
        // Declaraciones
        var Value = this.Value.Traducir();
        // Traduccion
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + "console.log(" + Value + "); \n\n";
        return Traduccion;
    };
    return Print;
}(Instruccion_1.Instruccion));
exports.Print = Print;
