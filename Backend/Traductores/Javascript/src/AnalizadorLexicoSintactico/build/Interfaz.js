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
exports.Interfaz = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Interfaz = /** @class */ (function (_super) {
    __extends(Interfaz, _super);
    // Constructor
    function Interfaz(Linea, Columna, Identificador, BloqueInterfaz) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Identificador = Identificador;
        _this.BloqueInterfaz = BloqueInterfaz;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Interfaz.prototype.Traducir = function () {
        var Identificador = this.Identificador;
        var BloqueInterfaz = this.BloqueInterfaz.Traducir();
        // Traduccion
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + "interface " + Identificador + " { \n\n" +
            BloqueInterfaz + "\n" +
            Variables_Metodos_1.AgregarIdentacion() + "} \n\n";
        return Traduccion;
    };
    return Interfaz;
}(Instruccion_1.Instruccion));
exports.Interfaz = Interfaz;
