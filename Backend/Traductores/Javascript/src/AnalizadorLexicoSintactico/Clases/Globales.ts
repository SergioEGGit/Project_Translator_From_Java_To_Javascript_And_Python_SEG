//export let Errores:Array<InsError>=new Array();
//export let AtBloqueGlobal:Array<AtBloque>=new Array();
//export let AllAtBloques:Array<AtBloque>=new Array();
//export let VariablesAntesEjecucion:Array<any>=new Array();
//export let TextoConsola:Array<String>=new Array();
export let CantidadIdentacion:Array<any>=new Array();

function Identacion():String{
	let identacion:string="";
	for(let i:number=0;i<CantidadIdentacion.length;i++){
		identacion+="  ";
	}
	return identacion;
}
exports.Identacion = Identacion;