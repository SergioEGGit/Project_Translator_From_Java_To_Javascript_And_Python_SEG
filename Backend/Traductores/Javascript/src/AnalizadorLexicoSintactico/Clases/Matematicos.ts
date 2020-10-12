// Imports
import { Instruccion } from "./Instruccion";

// Enum
export enum Operaciones {
	
	SUMA,
	RESTA,
	MULTIPLICACION,
	DIVISION
	
}

// Clase Principal
export class Matematicos extends Instruccion {

	// Declaraciones
	public AST=null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Izq: Instruccion, private Der: Instruccion, private Operacion: Operaciones) {

		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Izq = this.Izq.Traducir();
		let Der = this.Der.Traducir();
		let ValRetornar;

		if(this.Operacion == Operaciones.SUMA) {
			
			ValRetornar = Izq + " + " + Der;
		
		} else if(this.Operacion == Operaciones.RESTA) {
			
			ValRetornar = Izq + " - " + Der;
		
		} else if(this.Operacion == Operaciones.MULTIPLICACION) {
			
			ValRetornar = Izq + " * " + Der;
			
		} else if(this.Operacion == Operaciones.DIVISION) {
		
			ValRetornar = Izq + " / " + Der;
		
		} else {
			
			ValRetornar = undefined
		}
		
		return ValRetornar;
    }
    
} 