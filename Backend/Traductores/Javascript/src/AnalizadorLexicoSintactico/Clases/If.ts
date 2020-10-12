// Imports
import { Instruccion } from "./Instruccion" 

// Clase Principal
export class If extends Instruccion{

    // Declaraciones
	public AST = null;
	
	// Constructor 
    constructor(Linea: number, Columna: number, private Condicion: Instruccion, private BloqueIf: Instruccion, private BloqueElse: Instruccion|null) {
    
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
				
				// Traduccion
				let Traduccion_ElseIf = "if(" + Condicion + ") " +
										"{ \n\n" +
										BloqueIf + "\n" + 
										"} else " + 
										BloqueElse;		 
							 
				return Traduccion_ElseIf;
			
			}
			
			let Traduccion_Else = "if(" + Condicion + ") " +
								  "{ \n\n" + 
								  BloqueIf + "\n" +		
                                  "} else { \n\n" +
								  BloqueElse + "\n" + 		
								  "} ";
			
			return Traduccion_Else;		
		}
		
		let Traduccion_If = "if(" + Condicion + ") " + 
							"{ \n\n" + 
							BloqueIf + "\n" +
							"} ";
		
		return Traduccion_If; 
		
    }
}