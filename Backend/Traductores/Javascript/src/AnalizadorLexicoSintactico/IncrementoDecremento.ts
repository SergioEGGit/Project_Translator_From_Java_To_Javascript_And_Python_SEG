// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class IncrementoDecremento extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: string, private Signo: String) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Identificador = this.Identificador;
		let Signo = this.Signo
		let Traduccion = " ";
		
		// Verificar Si Es Incremento O Decremento
		if(Signo == "+") {
			
			Traduccion = AgregarIdentacion() + Identificador + "++; \n\n";
		
		} else {
			
			Traduccion = AgregarIdentacion() + Identificador + "--; \n\n";
			
		}
		
		return Traduccion;
    }
}