"use strict";
// Clase Error
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuevoError = void 0;
var NuevoError = /** @class */ (function () {
    // Constructor 
    function NuevoError(Identificador, Linea, Columna, Tipo, Lexema, Descripcion) {
        // Asignacion
        this.Identificador = Identificador;
        this.Linea = Linea;
        this.Columna = Columna;
        this.Tipo = Tipo;
        this.Lexema = Lexema;
        this.Descripcion = Descripcion;
    }
    // Metodos Get Y Set
    // Get Identificador
    NuevoError.prototype.GetIdentificador = function () {
        return this.Identificador;
    };
    // Get Linea
    NuevoError.prototype.GetLinea = function () {
        return this.Linea;
    };
    // Get Columna
    NuevoError.prototype.GetColumna = function () {
        return this.Columna;
    };
    // Get Tipo 
    NuevoError.prototype.GetTipo = function () {
        return this.Tipo;
    };
    // Get Lexema
    NuevoError.prototype.GetLexema = function () {
        return this.Lexema;
    };
    // Get Descripcion
    NuevoError.prototype.GetDescripcion = function () {
        return this.Descripcion;
    };
    // Set Identificador
    NuevoError.prototype.SetIdentificador = function (Identificador) {
        this.Identificador = Identificador;
    };
    // Set Linea
    NuevoError.prototype.SetLinea = function (Linea) {
        this.Linea = Linea;
    };
    // Set Columna
    NuevoError.prototype.SetColumna = function (Columna) {
        this.Columna = Columna;
    };
    // Set Tipo
    NuevoError.prototype.SetTipo = function (Tipo) {
        this.Tipo = Tipo;
    };
    // Set Lexema
    NuevoError.prototype.SetLexema = function (Lexema) {
        this.Lexema = Lexema;
    };
    // Set Descripcion
    NuevoError.prototype.SetDescripcion = function (Descripcion) {
        this.Descripcion = Descripcion;
    };
    return NuevoError;
}());
exports.NuevoError = NuevoError;
