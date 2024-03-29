// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Enum
export enum Sentencias {
	
	BREAK,
	CONTINUE,
	RETURN
	
}

// Clase Principal
export class SentenciasCiclos extends Instruccion {

	// Constructor
    constructor(Linea: number, Columna: number, private Valor: string, private Sentencia: Sentencias, private Expresion: Instruccion | null) {

		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Valor = this.Valor;
		let ValRetornar;
		
		// Verificar Enum
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