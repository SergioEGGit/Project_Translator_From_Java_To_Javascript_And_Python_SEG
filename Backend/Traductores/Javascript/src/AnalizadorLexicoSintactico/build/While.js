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
exports.While = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var While = /** @class */ (function (_super) {
    __extends(While, _super);
    // Constructor 
    function While(Linea, Columna, Condicion, BloqueWhile) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Condicion = Condicion;
        _this.BloqueWhile = BloqueWhile;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Método Traducir	
    While.prototype.Traducir = function () {
        // Declaraciones
        var Condicion = this.Condicion.Traducir();
        var BloqueWhile = this.BloqueWhile.Traducir();
        // Traducción
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + "while(" + Condicion + ") " +
            "{ \n\n" +
            BloqueWhile + "\n" +
            Variables_Metodos_1.AgregarIdentacion() + "} \n\n";
        return Traduccion;
    };
    return While;
}(Instruccion_1.Instruccion));
exports.While = While;
