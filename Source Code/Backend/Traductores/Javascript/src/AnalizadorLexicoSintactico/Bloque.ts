// Imports

// Clase Abstracta 
import { Instruccion } from './Instruccion';

// Metodo Identacion
import { Identacion } from './Variables_Metodos';

// Clase Principal
export class Bloque extends Instruccion {
	
	// Constructor 
	constructor(Linea: number, Columna: number, private Instrucciones: Instruccion[]) {
		
		// Super
		super(Linea, Columna)
	
	}
	
	// Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let Traduccion: string = "";
		
		// Traducir Instrucciones
		Identacion.push(" ");
		
		// Recorrer Elementos
		for(const Element of this.Instrucciones) {
			
			let TraduccionElement = Element.Traducir();
			
			Traduccion += TraduccionElement;	
	
		}
		
		Identacion.pop();
		
		return Traduccion;
		
	}
	
}