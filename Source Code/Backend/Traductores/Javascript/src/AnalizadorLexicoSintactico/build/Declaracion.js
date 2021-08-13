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
exports.Declaracion = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Declaracion = /** @class */ (function (_super) {
    __extends(Declaracion, _super);
    // Constructor
    function Declaracion(Linea, Columna, Tipo, Variables) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Tipo = Tipo;
        _this.Variables = Variables;
        return _this;
    }
    // Metodo Traducir
    Declaracion.prototype.Traducir = function () {
        // Declaraciones
        var Traduccion = "";
        // Verificar Cada Valor
        for (var Key in this.Variables) {
            // Traduccion De Varias Variables
            if (Number(Key) + 1 == this.Variables.length) {
                Traduccion += this.Variables[Number(Key)].Traducir();
            }
            else {
                Traduccion += this.Variables[Number(Key)].Traducir() + ", ";
            }
        }
        // Traduccion Una Sola Variables
        Traduccion = Variables_Metodos_1.AgregarIdentacion() + "var " + Traduccion + "; \n\n";
        return Traduccion;
    };
    return Declaracion;
}(Instruccion_1.Instruccion));
exports.Declaracion = Declaracion;
