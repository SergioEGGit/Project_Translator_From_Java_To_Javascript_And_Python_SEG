// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class Interfaz extends Instruccion {

	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: String, private BloqueInterfaz: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Identificador = this.Identificador;
		let BloqueInterfaz = this.BloqueInterfaz.Traducir();
		
		// Traduccion
		let Traduccion = "\n";
		
		return Traduccion;
		
	}
	
}