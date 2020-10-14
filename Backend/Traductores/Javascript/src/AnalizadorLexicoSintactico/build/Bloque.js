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
exports.Bloque = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Bloque = /** @class */ (function (_super) {
    __extends(Bloque, _super);
    // Constructor 
    function Bloque(Linea, Columna, Instrucciones) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Instrucciones = Instrucciones;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Método Traducir	
    Bloque.prototype.Traducir = function () {
        // Declaraciones
        var Traduccion = "";
        var Ast = null;
        // Traducir Instrucciones
        Variables_Metodos_1.Identacion.push(" "); //sube 1
        for (var _i = 0, _a = this.Instrucciones; _i < _a.length; _i++) {
            var Element_1 = _a[_i];
            var TraduccionElement = Element_1.Traducir();
            Traduccion += TraduccionElement;
        }
        Variables_Metodos_1.Identacion.pop(); //cuando sale baja
        return Traduccion;
    };
    return Bloque;
}(Instruccion_1.Instruccion));
exports.Bloque = Bloque;
