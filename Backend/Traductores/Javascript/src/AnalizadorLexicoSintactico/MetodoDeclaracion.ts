// Imports

// Clase Abstracta
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class MetodoDeclaracion extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Identificador: string, private FuncionName: string, private ListaParametros: Instruccion[], private PTC: Boolean) {
        
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
		
		// Verificar Si Hay Parametros
		for(let Key in this.ListaParametros) {
			
			if(Number(Key) + 1 == this.ListaParametros.length) { 

				Parametros += this.ListaParametros[Number(Key)].Traducir();
			
			} else {
				
				Parametros += this.ListaParametros[Number(Key)].Traducir() + ", ";
			
			}
		}
		
		// Verificar Si Hay Identificador
		if(Identificador == "") {
			
			Traduccion = FuncionName + "(" + Parametros + ")"; 
		
		} else {
			
			Traduccion = Identificador + "." + FuncionName + "(" + Parametros + ")"; 
		
		}
		
		return Traduccion;
    }
}