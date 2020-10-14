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
exports.Comentarios = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var Comentarios = /** @class */ (function (_super) {
    __extends(Comentarios, _super);
    // Constructor 
    function Comentarios(Linea, Columna, Comentario) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Comentario = Comentario;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Método Traducir	
    Comentarios.prototype.Traducir = function () {
        // Traducción
        var Traduccion = Variables_Metodos_1.AgregarIdentacion() + this.Comentario + "\n\n";
        return Traduccion;
    };
    return Comentarios;
}(Instruccion_1.Instruccion));
exports.Comentarios = Comentarios;
