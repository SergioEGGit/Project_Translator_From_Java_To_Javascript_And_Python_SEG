// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from './Variables_Metodos'

// Clase Principal
export class Clase extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: String, private BloqueClase: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Identificador = this.Identificador;
		let BloqueClase = this.BloqueClase.Traducir();
				
		let Traduccion = AgregarIdentacion() + "class " + Identificador + " { \n\n" + 
						 AgregarIdentacion() + "    constructor() { \n\n" +
						 AgregarIdentacion() + "    } \n\n" + 
						 BloqueClase + "\n" +
						 AgregarIdentacion() + "} \n\n";				
		
		return Traduccion;
    }
}