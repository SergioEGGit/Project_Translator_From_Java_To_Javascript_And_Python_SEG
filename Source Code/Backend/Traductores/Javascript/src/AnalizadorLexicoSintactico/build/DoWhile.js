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
exports.DoWhile = void 0;
// Clase Abstracta
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var DoWhile = /** @class */ (function (_super) {
    __extends(DoWhile, _super);
    // Constructor 
    function DoWhile(Linea, Columna, BloqueDoWhile, Condicion) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.BloqueDoWhile = BloqueDoWhile;
        _this.Condicion = Condicion;
        return _this;
    }
    // Método Traducir	
    DoWhile.prototype.Traducir = function () {
        // Declaraciones
        var BloqueDoWhile = this.BloqueDoWhile.Traducir();
        var Condicion = this.Condicion.Traducir();
        // Traducción
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + "do { \n\n" +
            BloqueDoWhile + "\n" +
            Variables_Metodos_1.AgregarIdentacion() + "} " +
            "while(" + Condicion + "); \n\n";
        return Traduccion;
    };
    return DoWhile;
}(Instruccion_1.Instruccion));
exports.DoWhile = DoWhile;
