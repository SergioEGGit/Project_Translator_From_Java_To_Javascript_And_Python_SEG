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
exports.Tokens = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Tokens = /** @class */ (function (_super) {
    __extends(Tokens, _super);
    // Constructor
    function Tokens(Linea, Columna, Tipo, Lexema) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        // Declaraciones
        _this.AST = null;
        Variables_Metodos_1.ArrayTokens.push(_this);
        return _this;
    }
    // Metodo Traducir
    Tokens.prototype.Traducir = function () {
        // Declaraciones
        var Traduccion = "\n";
        return Traduccion;
    };
    return Tokens;
}(Instruccion_1.Instruccion));
exports.Tokens = Tokens;
