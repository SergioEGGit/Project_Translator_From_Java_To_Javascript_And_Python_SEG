// Imports
import { Instruccion } from "./Instruccion";

// Enum
export enum Operadores{
	
	NOT,
	MENOR,
	MENORIGUAL,
	MAYOR,
	MAYORIGUAL,
	IGUAL,
	DIFERENTE,
	AND,
	OR, 
	XOR
	
}

// Clase Principal
export class Logicos extends Instruccion {

	// Declaraciones
	public AST = null; 

	// Constructor
    constructor(Linea: number, Columna: number, private Izq: Instruccion, private Der: Instruccion, private Operacion: Operadores) {

		// Super
		super(Linea, Columna)
	 
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Izq = this.Izq.Traducir();
		let Der = this.Der.Traducir();
		let ValRetornar;

		if(this.Operacion == Operadores.NOT) {
			
			ValRetornar = "!" + Izq;
		
		} else if(this.Operacion == Operadores.MENOR) { 
			
			ValRetornar = Izq + " < " + Der;
		
		} else if(this.Operacion == Operadores.MENORIGUAL) {
			
			ValRetornar = Izq + " <= " + Der;
		
		} else if(this.Operacion == Operadores.MAYOR) {
			
			ValRetornar = Izq + " > " + Der;
		
		} else if(this.Operacion == Operadores.MAYORIGUAL) {
			
			ValRetornar = Izq + " >= " + Der;
		
		} else if(this.Operacion == Operadores.IGUAL) {
			
			ValRetornar = Izq + " == " + Der;
		
		} else if(this.Operacion == Operadores.DIFERENTE) {
			
			ValRetornar = Izq+" != "+Der;
		
		} else if(this.Operacion == Operadores.AND) {
			
			ValRetornar = Izq + " && " + Der;
		
		} else if(this.Operacion == Operadores.OR) {
			
			ValRetornar = Izq + " || " + Der;
		
		} else if(this.Operacion == Operadores.XOR) {
			
			ValRetornar = Izq + " ^ " + Der;
		
		} else {
			
			ValRetornar = undefined 
		
		}

		return ValRetornar;
    }
    
}