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
exports.Logicos = exports.Operadores = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
// Enum
var Operadores;
(function (Operadores) {
    Operadores[Operadores["NOT"] = 0] = "NOT";
    Operadores[Operadores["MENOR"] = 1] = "MENOR";
    Operadores[Operadores["MENORIGUAL"] = 2] = "MENORIGUAL";
    Operadores[Operadores["MAYOR"] = 3] = "MAYOR";
    Operadores[Operadores["MAYORIGUAL"] = 4] = "MAYORIGUAL";
    Operadores[Operadores["IGUAL"] = 5] = "IGUAL";
    Operadores[Operadores["DIFERENTE"] = 6] = "DIFERENTE";
    Operadores[Operadores["AND"] = 7] = "AND";
    Operadores[Operadores["OR"] = 8] = "OR";
    Operadores[Operadores["XOR"] = 9] = "XOR";
})(Operadores = exports.Operadores || (exports.Operadores = {}));
// Clase Principal
var Logicos = /** @class */ (function (_super) {
    __extends(Logicos, _super);
    // Constructor
    function Logicos(Linea, Columna, Izq, Der, Operacion) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Izq = Izq;
        _this.Der = Der;
        _this.Operacion = Operacion;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Logicos.prototype.Traducir = function () {
        // Declaraciones
        var Izq = this.Izq.Traducir();
        var Der = this.Der.Traducir();
        var ValRetornar;
        if (this.Operacion == Operadores.NOT) {
            ValRetornar = "!" + Izq;
        }
        else if (this.Operacion == Operadores.MENOR) {
            ValRetornar = Izq + " < " + Der;
        }
        else if (this.Operacion == Operadores.MENORIGUAL) {
            ValRetornar = Izq + " <= " + Der;
        }
        else if (this.Operacion == Operadores.MAYOR) {
            ValRetornar = Izq + " > " + Der;
        }
        else if (this.Operacion == Operadores.MAYORIGUAL) {
            ValRetornar = Izq + " >= " + Der;
        }
        else if (this.Operacion == Operadores.IGUAL) {
            ValRetornar = Izq + " == " + Der;
        }
        else if (this.Operacion == Operadores.DIFERENTE) {
            ValRetornar = Izq + " != " + Der;
        }
        else if (this.Operacion == Operadores.AND) {
            ValRetornar = Izq + " && " + Der;
        }
        else if (this.Operacion == Operadores.OR) {
            ValRetornar = Izq + " || " + Der;
        }
        else if (this.Operacion == Operadores.XOR) {
            ValRetornar = Izq + " ^ " + Der;
        }
        else {
            ValRetornar = undefined;
        }
        return ValRetornar;
    };
    return Logicos;
}(Instruccion_1.Instruccion));
exports.Logicos = Logicos;
