// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from './Variables_Metodos';

// Clase Principal
export class Clase extends Instruccion {

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
				
		// Traduccion		
		let Traduccion = AgregarIdentacion() + "class " + Identificador + " { \n\n" + 
						 AgregarIdentacion() + "    constructor() { \n\n" +
						 AgregarIdentacion() + "    } \n\n" + 
						 BloqueClase + "\n" +
						 AgregarIdentacion() + "} \n\n";				
	
		return Traduccion;
		
    }
	
}