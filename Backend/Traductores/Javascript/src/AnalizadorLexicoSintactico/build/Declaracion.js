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
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Declaracion.prototype.Traducir = function () {
        // Declaraciones
        var Traduccion = ""; // que tiene dentro variables ? imprimmitelo xD 
        for (var key in this.Variables) {
            if (Number(key) + 1 == this.Variables.length) { // no se que pasa XD que te dijo no vi 
                Traduccion += this.Variables[Number(key)].Traducir();
            }
            else {
                Traduccion += this.Variables[Number(key)].Traducir() + " , ";
            }
        }
        Traduccion = "var " + Traduccion + " ;"; //gracias // no le podes poner de que si hereda de for ? como asi? aquello de que pusiste instace of for algo asi ? XD si pero no es aqui y aparte no es por eso
        return Traduccion;
        //podrias agregar identacion si qure XD es queria hacer pero no supe como xD pues 
        // la idea seria tener una variable global con el numero de espacios que se debem dar per
        // desde javascript o typescript no pude lo unico que pude es un arreglo que creese
    };
    return Declaracion;
}(Instruccion_1.Instruccion));
exports.Declaracion = Declaracion;
//ya tenes asignacion de claracionXD jaja que mamon XD entoncse en el for seria asi ?
