// Imports

// Clase Abstracta
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class DeclaracionFunciones extends Instruccion {

	// Constructor
    constructor(Linea: number, Columna: number, private Tipos: String, private Identificador: String, private ListaParametros: Instruccion[]) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Tipos = this.Tipos;
		let Identificador = this.Identificador;
		let Traduccion: string = "";
        let Parametros: string = "";		
		
		// Verificar Si Hay Parametros
		for(let Key in this.ListaParametros) {
			
			// Varios Parametros
			if(Number(Key) + 1 == this.ListaParametros.length) { 
	
				Parametros += this.ListaParametros[Number(Key)].Traducir();
			
			} else {
				
				Parametros += this.ListaParametros[Number(Key)].Traducir() + ", ";
			
			}
		}
		
		// Un Solo Parametro
		Traduccion = AgregarIdentacion() + "function " + Identificador + "(" + Parametros + "); \n\n";
					 
		return Traduccion;
		
    }
	
}