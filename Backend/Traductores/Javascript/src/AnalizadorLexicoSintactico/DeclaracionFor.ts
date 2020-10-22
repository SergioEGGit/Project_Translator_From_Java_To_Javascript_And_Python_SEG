// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class DeclaracionFor extends Instruccion {

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
		
		// Verificar Variables
		for(let Key in this.Variables) { 
		
			// Varias Variables
			if(Number(Key) + 1 == this.Variables.length) { 
			
				Traduccion += this.Variables[Number(Key)].Traducir();
		
			} else {
				
				Traduccion += this.Variables[Number(Key)].Traducir() + ", ";
			
			}
		}
		
		// Una Sola Variable
		Traduccion = "var " + Traduccion + ";";
	
		return Traduccion;
    }
}