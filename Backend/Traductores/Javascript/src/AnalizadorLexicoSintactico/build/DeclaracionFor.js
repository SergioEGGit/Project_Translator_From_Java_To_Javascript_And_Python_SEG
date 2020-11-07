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
exports.DeclaracionFor = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var DeclaracionFor = /** @class */ (function (_super) {
    __extends(DeclaracionFor, _super);
    // Constructor
    function DeclaracionFor(Linea, Columna, Tipo, Variables) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Tipo = Tipo;
        _this.Variables = Variables;
        return _this;
    }
    // Metodo Traducir
    DeclaracionFor.prototype.Traducir = function () {
        // Declaraciones
        var Traduccion = "";
        // Verificar Variables
        for (var Key in this.Variables) {
            // Varias Variables
            if (Number(Key) + 1 == this.Variables.length) {
                Traduccion += this.Variables[Number(Key)].Traducir();
            }
            else {
                Traduccion += this.Variables[Number(Key)].Traducir() + ", ";
            }
        }
        // Una Sola Variable
        Traduccion = "var " + Traduccion + ";";
        return Traduccion;
    };
    return DeclaracionFor;
}(Instruccion_1.Instruccion));
exports.DeclaracionFor = DeclaracionFor;
