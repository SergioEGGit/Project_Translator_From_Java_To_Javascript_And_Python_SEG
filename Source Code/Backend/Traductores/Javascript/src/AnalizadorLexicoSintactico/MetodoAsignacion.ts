// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos";

// Clase Principal
export class MetodoAsignacion extends Instruccion {

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
		let PuntoYComa = "";	
		
		// Verificar SI Hay Que Colocar Punto Coma
		if(this.PTC = true) {
			
			PuntoYComa = ";";
			
		} else {
			
			PuntoYComa = "";
			
		}		
		
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
			
			Traduccion = AgregarIdentacion() + FuncionName + "(" + Parametros + ")" + PuntoYComa; 
		
		} else {
			
			Traduccion = AgregarIdentacion() + Identificador + "." + FuncionName + "(" + Parametros + ")" + PuntoYComa; 
		
		}
		
		return Traduccion + "\n\n";
		
    }
	
}