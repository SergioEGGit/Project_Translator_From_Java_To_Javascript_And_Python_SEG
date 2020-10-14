//export let Errores:Array<InsError>=new Array();
//export let AtBloqueGlobal:Array<AtBloque>=new Array();
//export let AllAtBloques:Array<AtBloque>=new Array();
//export let VariablesAntesEjecucion:Array<any>=new Array();
//export let TextoConsola:Array<String>=new Array();

// Array Identacion
export let Identacion: Array<any> = new Array();

// Funcion Que Cuenta Los Espacios
export function AgregarIdentacion(): String {

	// Declaraciones
	let Espacios: string = "";
	
	// Agregar Espacios
	for(let Contador: number = 0; Contador < Identacion.length; Contador++) {
		
		Espacios += "    ";
		
	}
	
	return Espacios;
}