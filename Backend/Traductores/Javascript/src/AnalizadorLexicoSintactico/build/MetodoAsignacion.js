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
exports.MetodoAsignacion = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var MetodoAsignacion = /** @class */ (function (_super) {
    __extends(MetodoAsignacion, _super);
    // Constructor
    function MetodoAsignacion(Linea, Columna, Identificador, FuncionName, ListaParametros, PTC) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Identificador = Identificador;
        _this.FuncionName = FuncionName;
        _this.ListaParametros = ListaParametros;
        _this.PTC = PTC;
        return _this;
    }
    // Metodo Traducir
    MetodoAsignacion.prototype.Traducir = function () {
        // Declaraciones
        var FuncionName = this.FuncionName;
        var Identificador = this.Identificador;
        var Traduccion = "";
        var Parametros = "";
        var PuntoYComa = "";
        // Verificar SI Hay Que Colocar Punto Coma
        if (this.PTC = true) {
            PuntoYComa = ";";
        }
        else {
            PuntoYComa = "";
        }
        // Verificar Si Hay Parametros
        for (var Key in this.ListaParametros) {
            if (Number(Key) + 1 == this.ListaParametros.length) {
                Parametros += this.ListaParametros[Number(Key)].Traducir();
            }
            else {
                Parametros += this.ListaParametros[Number(Key)].Traducir() + ", ";
            }
        }
        // Verificar Si Hay Identificador
        if (Identificador == "") {
            Traduccion = Variables_Metodos_1.AgregarIdentacion() + FuncionName + "(" + Parametros + ")" + PuntoYComa;
        }
        else {
            Traduccion = Variables_Metodos_1.AgregarIdentacion() + Identificador + "." + FuncionName + "(" + Parametros + ")" + PuntoYComa;
        }
        return Traduccion + "\n\n";
    };
    return MetodoAsignacion;
}(Instruccion_1.Instruccion));
exports.MetodoAsignacion = MetodoAsignacion;
