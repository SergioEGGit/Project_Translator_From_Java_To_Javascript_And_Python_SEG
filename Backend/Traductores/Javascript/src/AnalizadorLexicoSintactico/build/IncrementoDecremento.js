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
exports.IncrementoDecremento = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var IncrementoDecremento = /** @class */ (function (_super) {
    __extends(IncrementoDecremento, _super);
    // Constructor
    function IncrementoDecremento(Linea, Columna, Identificador, Signo) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Identificador = Identificador;
        _this.Signo = Signo;
        return _this;
    }
    // Metodo Traducir
    IncrementoDecremento.prototype.Traducir = function () {
        // Declaraciones
        var Identificador = this.Identificador;
        var Signo = this.Signo;
        var Traduccion = " ";
        // Verificar Si Es Incremento O Decremento
        if (Signo == "+") {
            Traduccion = Variables_Metodos_1.AgregarIdentacion() + Identificador + "++; \n\n";
        }
        else {
            Traduccion = Variables_Metodos_1.AgregarIdentacion() + Identificador + "--; \n\n";
        }
        return Traduccion;
    };
    return IncrementoDecremento;
}(Instruccion_1.Instruccion));
exports.IncrementoDecremento = IncrementoDecremento;
