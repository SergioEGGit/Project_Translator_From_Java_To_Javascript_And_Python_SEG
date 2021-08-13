// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from './Variables_Metodos';

// Clase Principal
export class Print extends Instruccion{

	// Constructor
    constructor(Linea: number, Columna: number, private Value: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Value = this.Value.Traducir();
		
		// Traduccion
		let Traduccion = AgregarIdentacion() + "console.log(" + Value + "); \n\n";
		
		return Traduccion;
		
    }
	
}