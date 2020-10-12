"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CantidadIdentacion = void 0;
//export let Errores:Array<InsError>=new Array();
//export let AtBloqueGlobal:Array<AtBloque>=new Array();
//export let AllAtBloques:Array<AtBloque>=new Array();
//export let VariablesAntesEjecucion:Array<any>=new Array();
//export let TextoConsola:Array<String>=new Array();
exports.CantidadIdentacion = new Array();
function Identacion() {
    var identacion = "";
    for (var i = 0; i < exports.CantidadIdentacion.length; i++) {
        identacion += "  ";
    }
    return identacion;
}
exports.Identacion = Identacion;
