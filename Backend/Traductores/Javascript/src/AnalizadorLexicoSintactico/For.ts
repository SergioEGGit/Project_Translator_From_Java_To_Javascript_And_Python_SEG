// Imports
import { Instruccion } from "./Instruccion"; 
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class For extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number, private Declaracion: Instruccion, private Condicion: Instruccion, private Incremento: Instruccion, private BloqueFor: Instruccion) {
    
		// Super
		super(Linea, Columna)
		
    } 

	// Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let Declaracion = this.Declaracion.Traducir();
		let Condicion = this.Condicion.Traducir();
		let Incremento = this.Incremento.Traducir();
		let BloqueFor = this.BloqueFor.Traducir();
		
		// Traducción
		let Traduccion = AgregarIdentacion() + "for(" + Declaracion + " " + Condicion + "; " + Incremento + ") " +
						 "{ \n\n" +
						 BloqueFor + "\n" +
						 AgregarIdentacion() + "}\n\n";
		
		
		return Traduccion;		
		 
    }
}