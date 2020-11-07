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
exports.SentenciasCiclos = exports.Sentencias = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Enum
var Sentencias;
(function (Sentencias) {
    Sentencias[Sentencias["BREAK"] = 0] = "BREAK";
    Sentencias[Sentencias["CONTINUE"] = 1] = "CONTINUE";
    Sentencias[Sentencias["RETURN"] = 2] = "RETURN";
})(Sentencias = exports.Sentencias || (exports.Sentencias = {}));
// Clase Principal
var SentenciasCiclos = /** @class */ (function (_super) {
    __extends(SentenciasCiclos, _super);
    // Constructor
    function SentenciasCiclos(Linea, Columna, Valor, Sentencia, Expresion) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Valor = Valor;
        _this.Sentencia = Sentencia;
        _this.Expresion = Expresion;
        return _this;
    }
    // Metodo Traducir
    SentenciasCiclos.prototype.Traducir = function () {
        // Declaraciones
        var Valor = this.Valor;
        var ValRetornar;
        // Verificar Enum
        if (this.Sentencia == Sentencias.BREAK) {
            ValRetornar = Variables_Metodos_1.AgregarIdentacion() + Valor + "; \n\n";
        }
        else if (this.Sentencia == Sentencias.CONTINUE) {
            ValRetornar = Variables_Metodos_1.AgregarIdentacion() + Valor + "; \n\n";
        }
        else if (this.Sentencia == Sentencias.RETURN) {
            if (this.Expresion != null) {
                var Expresion = this.Expresion.Traducir();
                ValRetornar = Variables_Metodos_1.AgregarIdentacion() + Valor + " " + Expresion + "; \n\n";
            }
            else {
                ValRetornar = Variables_Metodos_1.AgregarIdentacion() + Valor + "; \n\n";
            }
        }
        else {
            ValRetornar = undefined;
        }
        return ValRetornar;
    };
    return SentenciasCiclos;
}(Instruccion_1.Instruccion));
exports.SentenciasCiclos = SentenciasCiclos;
