// Imports
import { Instruccion } from './Instruccion'
import { Identacion } from './Variables_Metodos'

// Clase Principal
export class Bloque extends Instruccion{
	
	// Declaraciones
	public AST = null;
	
	// Constructor 
	constructor(Linea: number, Columna: number, private Instrucciones: Instruccion[]) {
		
		// Super
		super(Linea, Columna)
	
	}
	
	// Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let Traduccion: string = "";
		let Ast: any = null
		
		// Traducir Instrucciones
		Identacion.push(" "); //sube 1
		
		for(const Element of this.Instrucciones) {
			
			let TraduccionElement = Element.Traducir();
			
			Traduccion += TraduccionElement;	
	
		}
		
		Identacion.pop(); //cuando sale baja
		
		return Traduccion;
	}
}