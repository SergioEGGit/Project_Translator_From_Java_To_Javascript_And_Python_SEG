import { Instruccion } from "./Instruccion";
export class PRINT extends Instruccion{

    //private value:Expresion
	public AST=null;
    constructor(linea:number,columna:number){
        super(linea,columna)//super llama al constructor de la clase abstracta
        //this.value=value// el valor que recibe el print System.out.print(value)
    }

    public Traducir() {
		console.log("ESTA SERA LA TRADUCCION DEL SOUT");
		console.log("PRINT();")
		console.log("console.log();")
		console.log("PTO");
		//Este metodo te va a hacer la traduccion del sout a donde vos lo querras 
		//por eso los console log ya solo es que decidad cual es
    }
    
}

