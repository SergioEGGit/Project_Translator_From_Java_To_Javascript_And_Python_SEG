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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
var G = __importStar(require("./Globales"));
// Clase Principal
var Print = /** @class */ (function (_super) {
    __extends(Print, _super);
    // Constructor
    function Print(Linea, Columna, Value) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Value = Value;
        // Declaraciones
        _this.AST = null;
        return _this;
    }
    // Metodo Traducir
    Print.prototype.Traducir = function () {
        // Declaraciones
        var Value = this.Value.Traducir();
        var Traduccion = G.Identacion() + "console.log(" + Value + ");";
        return Traduccion;
    };
    return Print;
}(Instruccion_1.Instruccion));
exports.Print = Print;
