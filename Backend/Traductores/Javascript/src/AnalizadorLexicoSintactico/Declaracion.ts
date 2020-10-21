// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class Declaracion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Tipo: String, private Variables: Instruccion[]) { 
        
		// Super
		super(Linea, Columna)
		
    }	

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Traduccion: string = "";
		
		for(let key in this.Variables) { 
		
			if(Number(key) + 1 == this.Variables.length) { 
			
				Traduccion += this.Variables[Number(key)].Traducir();
		
			} else {
				
				Traduccion += this.Variables[Number(key)].Traducir() + ", ";
			
			}
		}
		
		
		Traduccion = AgregarIdentacion() + "var " + Traduccion + "; \n\n";
	
		return Traduccion;
    }
}