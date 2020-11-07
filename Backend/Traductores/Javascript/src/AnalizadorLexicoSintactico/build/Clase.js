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
exports.Clase = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Clase = /** @class */ (function (_super) {
    __extends(Clase, _super);
    // Constructor
    function Clase(Linea, Columna, Identificador, BloqueClase) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Identificador = Identificador;
        _this.BloqueClase = BloqueClase;
        return _this;
    }
    // Metodo Traducir
    Clase.prototype.Traducir = function () {
        // Declaraciones
        var Identificador = this.Identificador;
        var BloqueClase = this.BloqueClase.Traducir();
        // Traduccion		
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + "class " + Identificador + " { \n\n" +
            Variables_Metodos_1.AgregarIdentacion() + "    constructor() { \n\n" +
            Variables_Metodos_1.AgregarIdentacion() + "    } \n\n" +
            BloqueClase + "\n" +
            Variables_Metodos_1.AgregarIdentacion() + "} \n\n";
        return Traduccion;
    };
    return Clase;
}(Instruccion_1.Instruccion));
exports.Clase = Clase;
