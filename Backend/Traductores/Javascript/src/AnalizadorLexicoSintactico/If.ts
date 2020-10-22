// Imports

// Clase Abstracta 
import { Instruccion } from "./Instruccion";

// Metodo Identacion
import { AgregarIdentacion } from "./Variables_Metodos"; 

// Clase Principal
export class If extends Instruccion {

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number, private Condicion: Instruccion, private BloqueIf: Instruccion, private BloqueElse: Instruccion | null) {
    
		// Super
		super(Linea, Columna)
		
    } 

    // Método Traducir	
	public Traducir() {
		
		// Declaraciones
		let Condicion = this.Condicion.Traducir();
		let BloqueIf = this.BloqueIf.Traducir();
		let BloqueElse = "";
		
		// Verificar Si Hay Bloque Else
		if(this.BloqueElse != null) {
			
			// Recuperar Bloque
			BloqueElse = this.BloqueElse.Traducir();
			
			// Verificar Si Es Clase Heredada De If
			if (this.BloqueElse instanceof If) { 
				
				// Traduccion Else If
				let Traduccion_ElseIf = AgregarIdentacion() + "if(" + Condicion + ") " +
										"{ \n\n" +
										BloqueIf + "\n" + 
										AgregarIdentacion() + "} else " + 
										BloqueElse.trim() + "\n\n";		 
							 
				return Traduccion_ElseIf;
			
			}
			
			// Traduccion Else
			let Traduccion_Else = AgregarIdentacion() + "if(" + Condicion + ") " +
								  "{ \n\n" + 
								  BloqueIf + "\n" +		
                                  AgregarIdentacion() + "} else { \n\n" +
								  BloqueElse + "\n" + 		
								  AgregarIdentacion() + "} \n\n";
			
			return Traduccion_Else;		
		}
		
		// Traduccion If 
		let Traduccion_If = AgregarIdentacion() + "if(" + Condicion + ") " + 
							"{ \n\n" + 
							BloqueIf + "\n" +
							AgregarIdentacion() + "} \n\n";
		
		return Traduccion_If; 
		
    }
}