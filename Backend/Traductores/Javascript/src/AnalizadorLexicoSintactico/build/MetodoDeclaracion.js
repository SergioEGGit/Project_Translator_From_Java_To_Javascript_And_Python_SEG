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
exports.MetodoDeclaracion = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var MetodoDeclaracion = /** @class */ (function (_super) {
    __extends(MetodoDeclaracion, _super);
    // Constructor
    function MetodoDeclaracion(Linea, Columna, Identificador, FuncionName, ListaParametros, PTC) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Identificador = Identificador;
        _this.FuncionName = FuncionName;
        _this.ListaParametros = ListaParametros;
        _this.PTC = PTC;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    MetodoDeclaracion.prototype.Traducir = function () {
        // Declaraciones
        var FuncionName = this.FuncionName;
        var Identificador = this.Identificador;
        var Traduccion = "";
        var Parametros = "";
        // Recuperar Parametros
        for (var key in this.ListaParametros) {
            if (Number(key) + 1 == this.ListaParametros.length) {
                Parametros += this.ListaParametros[Number(key)].Traducir();
            }
            else {
                Parametros += this.ListaParametros[Number(key)].Traducir() + ", ";
            }
        }
        // Verificar Si Hay Identificador
        if (Identificador == "") {
            Traduccion = FuncionName + "(" + Parametros + ")";
        }
        else {
            Traduccion = Identificador + "." + FuncionName + "(" + Parametros + ")";
        }
        return Traduccion;
    };
    return MetodoDeclaracion;
}(Instruccion_1.Instruccion));
exports.MetodoDeclaracion = MetodoDeclaracion;
