// Imports
import { Instruccion } from "./Instruccion";

// Clase Principal
export class Metodo extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: String, private FuncionName: String, private ListaParametros: Instruccion[],private PTC:Boolean) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let FuncionName = this.FuncionName;
		let Identificador = this.Identificador;
		let Traduccion: string = "";
        let Parametros: string = "";
		let PtoComa = "";	
		this.PTC == true ? PtoComa = ";" : PtoComa = "";		
		
		// Recuperar Parametros
		for(let key in this.ListaParametros) {
			
			if(Number(key) + 1 == this.ListaParametros.length) { 

				Parametros += this.ListaParametros[Number(key)].Traducir();
			
			} else {
				
				Parametros += this.ListaParametros[Number(key)].Traducir() + ", ";
			
			}
		}
		
		// Verificar Si Hay Identificador
		if(Identificador == "") {
			
			Traduccion = FuncionName + "(" + Parametros + ")" + PtoComa; 
		
		} else {
			
			Traduccion = Identificador + "." + FuncionName + "(" + Parametros + ")" + PtoComa; 
		
		}
		
		return Traduccion;
    }
}