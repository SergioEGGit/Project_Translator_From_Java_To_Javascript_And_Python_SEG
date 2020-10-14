// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class Funciones extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Tipos: String, private Identificador: String, private ListaParametros: Instruccion[], private BloqueFuncion: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Tipos = this.Tipos;
		let Identificador = this.Identificador;
		let BloqueFuncion = this.BloqueFuncion.Traducir();
		let Traduccion: string = "";
        let Parametros: string = "";		
		
		for(let key in this.ListaParametros) {
			
			if(Number(key) + 1 == this.ListaParametros.length) { 
	
				Parametros += this.ListaParametros[Number(key)].Traducir();
			
			} else {
				
				Parametros += this.ListaParametros[Number(key)].Traducir() + ", ";
			
			}
		}
		
		Traduccion = AgregarIdentacion() + "function " + Identificador + "(" + Parametros + ") {\n\n" +
					 BloqueFuncion + "\n" +
					 AgregarIdentacion() + "} \n\n";
					 
		return Traduccion;
    }
}