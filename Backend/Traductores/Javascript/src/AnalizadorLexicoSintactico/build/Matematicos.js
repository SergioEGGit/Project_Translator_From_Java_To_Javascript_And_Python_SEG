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
exports.Matematicos = exports.Operaciones = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Enum
var Operaciones;
(function (Operaciones) {
    Operaciones[Operaciones["SUMA"] = 0] = "SUMA";
    Operaciones[Operaciones["RESTA"] = 1] = "RESTA";
    Operaciones[Operaciones["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    Operaciones[Operaciones["DIVISION"] = 3] = "DIVISION";
    Operaciones[Operaciones["INCREMENTO"] = 4] = "INCREMENTO";
    Operaciones[Operaciones["DECREMENTO"] = 5] = "DECREMENTO";
    Operaciones[Operaciones["NEGATIVO"] = 6] = "NEGATIVO";
})(Operaciones = exports.Operaciones || (exports.Operaciones = {}));
// Clase Principal
var Matematicos = /** @class */ (function (_super) {
    __extends(Matematicos, _super);
    // Constructor
    function Matematicos(Linea, Columna, Izq, Der, Operacion) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Izq = Izq;
        _this.Der = Der;
        _this.Operacion = Operacion;
        return _this;
    }
    // Metodo Traducir
    Matematicos.prototype.Traducir = function () {
        // Declaraciones
        var Izq = this.Izq.Traducir();
        var Der = this.Der.Traducir();
        var ValRetornar;
        // Verificar Valor Enum
        if (this.Operacion == Operaciones.SUMA) {
            ValRetornar = Izq + " + " + Der;
        }
        else if (this.Operacion == Operaciones.RESTA) {
            ValRetornar = Izq + " - " + Der;
        }
        else if (this.Operacion == Operaciones.MULTIPLICACION) {
            ValRetornar = Izq + " * " + Der;
        }
        else if (this.Operacion == Operaciones.DIVISION) {
            ValRetornar = Izq + " / " + Der;
        }
        else if (this.Operacion == Operaciones.INCREMENTO) {
            ValRetornar = Izq + "++";
        }
        else if (this.Operacion == Operaciones.DECREMENTO) {
            ValRetornar = Izq + "--";
        }
        else if (this.Operacion == Operaciones.NEGATIVO) {
            ValRetornar = "-" + Der;
        }
        else {
            ValRetornar = undefined;
        }
        return ValRetornar;
    };
    return Matematicos;
}(Instruccion_1.Instruccion));
exports.Matematicos = Matematicos;
