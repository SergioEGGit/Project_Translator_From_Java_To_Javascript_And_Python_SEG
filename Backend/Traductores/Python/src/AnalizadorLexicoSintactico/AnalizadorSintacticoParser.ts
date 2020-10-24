// imports

// Objeto Token
import { NuevoToken } from "./ObjetoToken";

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

// Comienzo Analisis Sintactico 
export function AnalizadorSintacticoParser() {
	
	// Indicar Inicio Analizador
	IndexToken = 0;
	
	// Pre Analisis Analizador
	TokenActual = ArrayTokens[IndexToken];
	
	// Inicio Analisis
	InicioAnalisis();
	
}

// Inicio Analisis
function InicioAnalisis() {
	
	// Instrucciones Principales
	InstruccionInicial();
	
	// Lista De Instrucciones Principales
	ListaInstruccionesIniciales();
	
	// Fin Del Analisis
	console.log("Termine Analisis");
	
}

// Lista De Instrucciones Iniciales
function ListaInstruccionesIniciales() {
	
	// Verificar Si Hay Mas Instrucciones
	if  (		TokenActual.GetTipo() == "Palabra_Reservada_public"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"    ||
				TokenActual.GetTipo() == "Comentario_Unilinea"   || 
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
		
		
	} else if (TokenActual.GetTipo() == "Palabra_Reservada_int" || TokenActual.GetTipo() == "Palabra_Reservada_double" || TokenActual.GetTipo() == "Palabra_Reservada_string") {
		
		// Declaracion
		
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		
	} else {
		
		// Error Sintactico
		
	}	
	
}

// Definicion Tipo Clase (Class / Interface)
function DefinicionTipoClase() {

	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_public");
	TipoClase();	
	
}

// Tipo Clase (Class / Interface)
function TipoClase() {
	
	// Verificar Si Es Clase O Interfaz
	if(TokenActual.GetTipo() == "Palabra_Reservada_class") {
		
		Clase();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_interface") {
		
		//Interfaz();
		
	} else {
		
		// Error Sintactico
		
	}
	
}

// Clase
function Clase() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_class");
	PrincipalParea("Identificador");

	
	// Avazar Al Siguiente Token
	if (IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Identificador") {
        
		// Aumentar Indice Lista Tokens
		IndexToken++;
		
		// Recuperar Token Actual
		TokenActual = ArrayTokens[IndexToken]
    }	
	
}

// Metodo Parea 
function PrincipalParea(TipoToken: String) {
	
	// Verificar Si Hay Errores Sintacticos
	if(Recuperacion) {
		
		// Verificar Si Es El Token Esperado
		if (TokenActual.GetTipo() == TipoToken) {
			
			if(IndexToken < ArrayTokens.length - 1) {
				
				// Avanzo En La Lista De Tokens
				IndexToken++;
				TokenActual = ArrayTokens[IndexToken];
				
			} else if(IndexToken == ArrayTokens.length - 1) {
				
				// Colocar Token Final Como ;
				TokenActual.SetTipo("Simbolo_PuntoYComa");	
				
			}		
			
		} else {
			
			// Verficar Si Estoy Al Final Del Archivo
			if (IndexToken == ArrayTokens.length - 1) {
				
               // Colocar Token Final Como ;
			   TokenActual.SetTipo("Simbolo_PuntoYComa");
				
            }
			
			// Hay Un Error Sintactico
			// Agregar Error Sintactico	
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
					if(IndexToken < ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_PuntoYComa") {
						
						// Recuperado Con Exito
						ErrorSintactico = false;
						
					}
					
				}
				
			} 
		}
		
	} else {
		
		// Recuperacion Modo Panico Espero Token ;
		
	}	
	
}