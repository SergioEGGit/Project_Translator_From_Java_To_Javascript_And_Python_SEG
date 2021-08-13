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
exports.For = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var For = /** @class */ (function (_super) {
    __extends(For, _super);
    // Constructor 
    function For(Linea, Columna, Declaracion, Condicion, Incremento, BloqueFor) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Declaracion = Declaracion;
        _this.Condicion = Condicion;
        _this.Incremento = Incremento;
        _this.BloqueFor = BloqueFor;
        return _this;
    }
    // Método Traducir	
    For.prototype.Traducir = function () {
        // Declaraciones
        var Declaracion = this.Declaracion.Traducir();
        var Condicion = this.Condicion.Traducir();
        var Incremento = this.Incremento.Traducir();
        var BloqueFor = this.BloqueFor.Traducir();
        // Traducción
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + "for(" + Declaracion + " " + Condicion + "; " + Incremento + ") " +
            "{ \n\n" +
            BloqueFor + "\n" +
            Variables_Metodos_1.AgregarIdentacion() + "}\n\n";
        return Traduccion;
    };
    return For;
}(Instruccion_1.Instruccion));
exports.For = For;
