// Imports
import { Instruccion } from "./Instruccion";

// Clase Principal
export class Declaracion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Tipo: String, private Variables: Instruccion[]) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Traduccion:string="" // que tiene dentro variables ? imprimmitelo xD 
		for(let key in this.Variables){
			if(Number(key)+1 == this.Variables.length){// no se que pasa XD que te dijo no vi 
				Traduccion+= this.Variables[Number(key)].Traducir();
			}else{
				Traduccion+=  this.Variables[Number(key)].Traducir()+" , ";
			}
		}
		Traduccion = "var "+ Traduccion + " ;";//gracias // no le podes poner de que si hereda de for ? como asi? aquello de que pusiste instace of for algo asi ? XD si pero no es aqui y aparte no es por eso
		return Traduccion;
		//podrias agregar identacion si qure XD es queria hacer pero no supe como xD pues 
		// la idea seria tener una variable global con el numero de espacios que se debem dar per
		// desde javascript o typescript no pude lo unico que pude es un arreglo que creese
    }
}
//ya tenes asignacion de claracionXD jaja que mamon XD entoncse en el for seria asi ?