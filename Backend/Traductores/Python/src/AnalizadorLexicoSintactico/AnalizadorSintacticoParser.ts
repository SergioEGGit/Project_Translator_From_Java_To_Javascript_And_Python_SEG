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
	
	
	
	
}



// Metodo Parea 
function PrincipalParea(TipoToken: String) {
	
	// Verificar Si Hay Errores Sintacticos
	if(TokenActual.GetTipo() != TipoToken) {
		
		
		
	}	
	
}