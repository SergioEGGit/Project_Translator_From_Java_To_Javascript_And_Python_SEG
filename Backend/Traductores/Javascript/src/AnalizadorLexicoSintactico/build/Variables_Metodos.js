"use strict";
//export let Errores:Array<InsError>=new Array();
//export let AtBloqueGlobal:Array<AtBloque>=new Array();
//export let AllAtBloques:Array<AtBloque>=new Array();
//export let VariablesAntesEjecucion:Array<any>=new Array();
//export let TextoConsola:Array<String>=new Array();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarIdentacion = exports.Identacion = void 0;
// Array Identacion
exports.Identacion = new Array();
// Funcion Que Cuenta Los Espacios
function AgregarIdentacion() {
    // Declaraciones
    var Espacios = "";
    // Agregar Espacios
    for (var Contador = 0; Contador < exports.Identacion.length; Contador++) {
        Espacios += "    ";
    }
    return Espacios;
}
exports.AgregarIdentacion = AgregarIdentacion;
