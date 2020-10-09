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
exports.PRINT = void 0;
var Instruccion_1 = require("./Instruccion");
var PRINT = /** @class */ (function (_super) {
    __extends(PRINT, _super);
    function PRINT(linea, columna) {
        var _this = _super.call(this, linea, columna) //super llama al constructor de la clase abstracta
         || this;
        //private value:Expresion
        _this.AST = null;
        return _this;
        //this.value=value// el valor que recibe el print System.out.print(value)
    }
    PRINT.prototype.Traducir = function () {
        console.log("ESTA SERA LA TRADUCCION DEL SOUT");
        console.log("PRINT();");
        console.log("console.log();");
        console.log("PTO");
        //Este metodo te va a hacer la traduccion del sout a donde vos lo querras 
        //por eso los console log ya solo es que decidad cual es
    };
    return PRINT;
}(Instruccion_1.Instruccion));
exports.PRINT = PRINT;
