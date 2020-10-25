// imports

// Objeto Token
import { NuevoToken } from "./ObjetoToken";

// Objeto Error
import { NuevoError } from "./ObjetoError";

// Lista De Tokens
import { ArrayTokens } from "./Variables";

// Declaraciones

// Index Lista De Tokens
var IndexToken = 0;

// Token Pre Analisis
var TokenActual: NuevoToken;

// Existe Error Sintactico
var ErrorSintactico = false;

// Bandera Errores Parea
var Recuperacion = true;

// String Que Contiene String
var Traduccion_Total = "";

// Bandera Voy A Traducir
var Traducir = false;

// Array De Identacion 
var ArrayIdentacion: Array<String> = new Array();

// Comienzo Analisis Sintactico 
export function AnalizadorSintacticoParser() {
	
	// Indicar Inicio Analizador
	IndexToken = 0;
		
	// Traduccion
	Traduccion_Total = "";
		
	// Pre Analisis Analizador
	TokenActual = ArrayTokens[IndexToken];
	
	// Inicio Analisis
	InicioAnalisis();
	
	// Fin Del Analisis
	console.log(Traduccion_Total + " \n\n\n Termine Analisis");
	
}

// Inicio Analisis
function InicioAnalisis() {
	
	// Instrucciones Principales
	InstruccionInicial();
	
	// Lista De Instrucciones Principales
	ListaInstruccionesIniciales();	
	
}

// Lista De Instrucciones Iniciales
function ListaInstruccionesIniciales() {
	
	// Verificar Si Hay Mas Instrucciones
	if  (		
				TokenActual.GetTipo() == "Palabra_Reservada_public"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"    ||
				TokenActual.GetTipo() == "Comentario_Unilinea"   	 || 
				TokenActual.GetTipo() == "Comentario_Multilinea"
		) 
	{
		
		// Instruccion
		InstruccionInicial(); 
		
		// Instrucciones Iniciales
		ListaInstruccionesIniciales();
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

// Instrucciones Iniciales 
function InstruccionInicial() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Interfaz	
		DefinicionTipoClase();
		Recuperacion = true; 
				
	} else if ( TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"    
			) {	
		
		// Declaracion
		DeclaracionVariables();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		Comentarios();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("public, Tipo De Dato O Comentario");
		Recuperacion = true;
	
	}	
	
}

// Definicion Tipo Clase (Class / Interface)
function DefinicionTipoClase() {

	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_public");
	TipoClase();	
	
}

// Declaracion De Variables
function DeclaracionVariables() {
	
	// Estructura Sintactica
	
	
}

// Comentarios
function Comentarios() {
	
	// Declaraciones
	var Comentario = "";
	
	// Estructura Sintactica
	if(TokenActual.GetTipo() == "Comentario_Unilinea") {
		
		// Comentario Unilinea
		
		// Comentario		
		Comentario = TokenActual.GetLexema().replace("//", "#");
		
		// Metodo Parea
		PrincipalParea("Comentario_Unilinea");	Traduccion_Total += AgregarIdentacion() + Comentario + "\n\n";	   
		
	} else if(TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentario Multilinea
		
		// Comentario 
		Comentario = TokenActual.GetLexema().replace("/*", "...");
		Comentario = Comentario.replace("*/", "...");

		// Metodo Parea
		PrincipalParea("Comentario_Multilinea");	Traduccion_Total += AgregarIdentacion() + Comentario + "\n\n";		
		
	} else {
		
		ErroresSintactico("Comentario");
		Recuperacion = true;
		
	}
	
}

// Tipo Clase (Class / Interface)
function TipoClase() {
	
	// Verificar Si Es Clase O Interfaz
	if(TokenActual.GetTipo() == "Palabra_Reservada_class") {
		
		// Clases 
		Clase();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_interface") {
		
		// Interfaces
		Interfaz();
		Recuperacion = true;
		
	} else {
		
		// Error Sintactico
		ErroresSintactico("clase o interface");
		Recuperacion = true;

	}
	
}

// Clase
function Clase() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_class"); 	Traduccion_Total += AgregarIdentacion() + "class "; Traducir = true;
	PrincipalParea("Identificador");				
	PrincipalParea("Simbolo_Llave_Apertura"); 	Traduccion_Total += ": \n\n"; ArrayIdentacion.push(" ");
	ListaInstruccionesClase();					
	PrincipalParea("Simbolo_Llave_Cierre");     Traduccion_Total += "\n"; ArrayIdentacion.pop(); ArrayIdentacion.pop(); 
	
	// Avazar Al Siguiente Token
	if (IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
        
		// Aumentar Indice Lista Tokens
		IndexToken++;
		
		// Recuperar Token Actual
		TokenActual = ArrayTokens[IndexToken]
    }	
	
}

// Interfaz
function Interfaz() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_interface"); 	Traduccion_Total += AgregarIdentacion() + "class "; Traducir = true;
	PrincipalParea("Identificador");				
	PrincipalParea("Simbolo_Llave_Apertura"); 		Traduccion_Total += ": \n"; ArrayIdentacion.push(" ");
	PrincipalParea("Simbolo_Llave_Cierre");    	 	ArrayIdentacion.pop();
	
	// Avazar Al Siguiente Token
	if (IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
        
		// Aumentar Indice Lista Tokens
		IndexToken++;
		
		// Recuperar Token Actual
		TokenActual = ArrayTokens[IndexToken]
    }	
	
}

// Lista De Instrucciones Iniciales
function ListaInstruccionesClase() {
	
	// Verificar Si Hay Mas Instrucciones
	if  (		
				TokenActual.GetTipo() == "Palabra_Reservada_public"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"    ||
				TokenActual.GetTipo() == "Comentario_Unilinea"   	 || 
				TokenActual.GetTipo() == "Comentario_Multilinea"	 ||
				TokenActual.GetTipo() == "Identificador"
		) 
	{
		
		// Instruccion
		InstruccionClase(); 
		
		// Instrucciones Iniciales
		ListaInstruccionesClase();
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

// Instrucciones Iniciales 
function InstruccionClase() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Interfaz	
		DefinicionTipoClase();
		Recuperacion = true; 
				
	} else if ( TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"    
			) {	
		
		// Declaracion
		DeclaracionVariables();
		
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		Comentarios();
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("public, Tipo De Dato O Comentario");
		Recuperacion = true;
	
	}	
	
}

// Definicio Clase 
function DefinicionesClase() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_public");
	TipoDefinicionesClase();
	
}

// Tipo De Definiciones Dentro De Un Clase
function TipoDefinicionesClase() {
	
	// Verificar Palabra
	if(TokenActual.GetTipo() == "Palabra_Reservada_class") {
		
		Clase();
		Recuperacion = true;
		
	} else if(true) {
		
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("Clase, ");
		Recuperacion = true;
		
	}
	
}

// Errores Sintacticos
function ErroresSintactico(TipoError: String) {
	
	// Metodo Parea	
	PrincipalParea(TipoError);
	
}

// Metodo Parea 
function PrincipalParea(TipoToken: String) {
	
	// Verificar Si Hay Errores Sintacticos
	if(Recuperacion) {
		
		// Verificar Si Es El Token Esperado
		if(TokenActual.GetTipo() == TipoToken) {
			
			// Voy A Traducir
			if(Traducir) {
				
				Traduccion_Total += TokenActual.GetLexema();
				Traducir = false;
				
			}	

			// Verificar Si Hay Un Comentario
			if((TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") && IndexToken == ArrayTokens.length - 1) {
				
				// Cambio El Valor Del Token
				TokenActual.SetTipo("Final");
				
			}	
			
			// Verificar Si Tengo Que Avanzar Token
			if(IndexToken < ArrayTokens.length - 1) {
				
				// Avanzo En La Lista De Tokens
				IndexToken++;
				TokenActual = ArrayTokens[IndexToken];
				
			}	
		 
			/*if(IndexToken == ArrayTokens.length - 1) {
				
				// Colocar Token Final Como ;
				TokenActual.SetTipo("Simbolo_PuntoYComa");	
				
			}*/			
			
		} else {

			// Verficar Si Estoy Al Final Del Archivo
			/*if (IndexToken == ArrayTokens.length + 1) {
				
               // Colocar Token Final Como ;
			   TokenActual.SetTipo("Simbolo_PuntoYComa");
				
            }*/
			
			// Hay Un Error Sintactico
			// Agregar Error Sintactico	
			console.log("Error Sintactico: Se Esperaba " + TipoToken + " Y Se Encontro: " + TokenActual.GetTipo() + "\n");
			ErrorSintactico = true;
            Recuperacion = false;
			
			if(ErrorSintactico) {
				
				// Recuperacion Del Error
				while(ErrorSintactico && IndexToken < ArrayTokens.length - 1) {
					
					// Avanzo Indice Token
					IndexToken++;
					
					// Recuperar Token Actual
					TokenActual = ArrayTokens[IndexToken]
					
					// Verificar Si Es Punto Y Coma
					if(					
								(IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_PuntoYComa") ||
								(IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_Parentesis_Cierre") ||
								(IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_Llave_Cierre")  
								
						) {
						
						// Recuperado Con Exito
						
						// Aumentar Indice
						IndexToken++;
						
						// Recuperar Token Actual
						TokenActual = ArrayTokens[IndexToken];
						
						// Ya no Es Error Sintactico
						ErrorSintactico = false;
						
					}
					
				}
				
			} 
		}
		
	} else {
		
		// Recuperacion Modo Panico Espero Token ;
		console.log("Me Estoy Recuperando");
	}	
	
}

// Generar Identación 
function AgregarIdentacion(): String {
	
	// Declaraciones
	var Espacios = "";
	
	// Agregar Identacion 
	for(var Contador = 0; Contador < ArrayIdentacion.length; Contador++) {
		
		// Agregar Espacios En Blanco
		Espacios += "    ";
		
	}
	
	// Return 
	return Espacios;
	
}