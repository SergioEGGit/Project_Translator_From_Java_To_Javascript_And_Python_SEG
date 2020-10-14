// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class Interfaz extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: String, private BloqueInterfaz: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		let Identificador = this.Identificador;
		let BloqueInterfaz = this.BloqueInterfaz.Traducir();
		
		// Traduccion
		let Traduccion = AgregarIdentacion() + "interface " + Identificador + " { \n\n" + 
						 BloqueInterfaz + "\n" +
						 AgregarIdentacion() + "} \n\n";
		
		return Traduccion;
		
	}
}