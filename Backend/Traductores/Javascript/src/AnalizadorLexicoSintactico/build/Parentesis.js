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
exports.Parentesis = void 0;
// Clase Abstracta
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var Parentesis = /** @class */ (function (_super) {
    __extends(Parentesis, _super);
    // Constructor 
    function Parentesis(Linea, Columna, Expresion) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Expresion = Expresion;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Método Traducir	
    Parentesis.prototype.Traducir = function () {
        // Declaraciones
        var Expresion = this.Expresion.Traducir();
        // Traduccion
        var Traduccion = "(" + Expresion + ")";
        return Traduccion;
    };
    return Parentesis;
}(Instruccion_1.Instruccion));
exports.Parentesis = Parentesis;
