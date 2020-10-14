// Imports
import { Instruccion } from "./Instruccion";
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Enum
export enum Sentencias {
	
	BREAK,
	CONTINUE,
	RETURN
	
}

// Clase Principal
export class SentenciasCiclos extends Instruccion {

	// Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Valor: String, private Sentencia: Sentencias, private Expresion: Instruccion | null) {

		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Valor = this.Valor;
		let ValRetornar;

		if(this.Sentencia == Sentencias.BREAK) {
			
			ValRetornar = AgregarIdentacion() + Valor + "; \n\n";
		
		} else if(this.Sentencia == Sentencias.CONTINUE) {
			
			ValRetornar = AgregarIdentacion() + Valor + "; \n\n";
		
		} else if(this.Sentencia == Sentencias.RETURN) {
			
			if(this.Expresion != null) {
				
				let Expresion = this.Expresion.Traducir();
				
				ValRetornar = AgregarIdentacion() + Valor + " " + Expresion + "; \n\n";
				
			} else {
				
				ValRetornar = AgregarIdentacion() + Valor + "; \n\n";
				
			}			
		
		} else {
			
			ValRetornar = undefined
		}
		
		return ValRetornar;
    }
    
} 