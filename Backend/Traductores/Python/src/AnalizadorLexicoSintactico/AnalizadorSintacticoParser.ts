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

// Tipo Print
var PrintEnd = false;

// Tipo Else 
var ElseIf = false;

// Tengo Main
var Main = false;

// Estoy En For 
var EsFor = false;

// Contador Identificadores 
var ContadorFor = 0;

// Array De Identacion 
var ArrayIdentacion: Array<String> = new Array();

// Comienzo Analisis Sintactico 
export function AnalizadorSintacticoParser() {
	
	// Indicar Inicio Analizador
	IndexToken = 0;

	// Token Pre Analisis
	TokenActual: NuevoToken;

	// Existe Error Sintactico
	ErrorSintactico = false;

	// Bandera Errores Parea
	Recuperacion = true;

	// String Que Contiene String
	Traduccion_Total = "";

	// Bandera Voy A Traducir
	Traducir = false;

	// Tipo Print
	PrintEnd = false;

	// Tipo Else 
	ElseIf = false;

	// Tengo Main
	Main = false;

	// Estoy En For 
	EsFor = false;

	// Contador Identificadores 
	ContadorFor = 0;
		
	// Pre Analisis Analizador
	TokenActual = ArrayTokens[IndexToken];
	
	// Inicio Analisis
	if(ArrayTokens.length > 0) {
		
		InicioAnalisis();
		
	}
	
	if(Main) {
		
		Traduccion_Total += "if __name__ = \"__main__\": \n    main()"
		
	}
	
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
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||				
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
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||			
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
	PrincipalParea("Simbolo_Llave_Cierre");     Traduccion_Total += "\n"; ArrayIdentacion.pop(); 

}

// Interfaz
function Interfaz() {
	
		// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_interface"); 	Traduccion_Total += AgregarIdentacion() + "class "; Traducir = true;
	PrincipalParea("Identificador");				
	PrincipalParea("Simbolo_Llave_Apertura"); 		Traduccion_Total += ": \n\n"; ArrayIdentacion.push(" ");
	ListaInstruccionesInterfaz();					
	PrincipalParea("Simbolo_Llave_Cierre");     	Traduccion_Total += "\n"; ArrayIdentacion.pop(); 
	
}

// Tipos De Datos
function TipoDeDatos() {
	
	// Verificar Tipo De Dato
	if(TokenActual.GetTipo() == "Palabra_Reservada_int") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_int");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_boolean") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_boolean");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_Boolean") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_Boolean");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_double") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_double");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_string") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_string");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_String") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_String");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_char") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_char");
		
	} else {
		
		// Error Sintactico
		ErroresSintactico("Tipo De Dato");
		
	}	
	
}

// Declaracion De Variables
function DeclaracionVariables() {
	
	// Estructura Sintactica
	TipoDeDatos();							Traduccion_Total += AgregarIdentacion(); Traducir = true;
	PrincipalParea("Identificador");		
	AsignacionDeclaracion();
	ListaDeDeclaraciones();
	PrincipalParea("Simbolo_PuntoYComa");	Traduccion_Total += "\n\n";
	
}

// Lista De Declaraciones
function ListaDeDeclaraciones() {
	
	// Verificar Si Hay Coma
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		// Lista De Declaraciones
		ListaDeDeclaracionesSintaxis();
		Recuperacion = true;
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Lista De Declaraciones Sintaxis
function ListaDeDeclaracionesSintaxis() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Coma");		Traduccion_Total += ", ";	Traducir = true;
	PrincipalParea("Identificador");	
	AsignacionDeclaracion();
	ListaDeDeclaraciones();
	
}

// Asingacion De Declaraciones
function AsignacionDeclaracion() {
	
	// Verificar Si Hay Signo Igual
	if(TokenActual.GetTipo() == "Simbolo_Igual") {
		
		// Asignacion
		AsignacionDeclaracionSintaxis();
		Recuperacion = true;
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Asignacion Declaracion Sintaxis
function AsignacionDeclaracionSintaxis() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Igual");	Traduccion_Total += " = ";
	Expr();
	
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
		Comentario = TokenActual.GetLexema().replace("/*", "\"\"\"");
		Comentario = Comentario.replace("*/", "\"\"\"");

		// Metodo Parea
		PrincipalParea("Comentario_Multilinea");	Traduccion_Total += AgregarIdentacion() + Comentario + "\n\n";		
		
	} else {
		
		ErroresSintactico("Comentario");
		Recuperacion = true;
		
	}
	
}

// Lista De Instrucciones Clase
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

// Instrucciones Clase 
function InstruccionClase() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Interfaz
		DefinicionesClase();
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
		
	} else if (TokenActual.GetTipo() == "Identificador") {	
		
		// Declaracion
		Asignacion();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		Comentarios();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("public, Tipo De Dato, Identificador O Comentario");
		Recuperacion = true;
	
	}	
	
}

// Asignacion
function Asignacion() {
	
	// Estructura Sintactica
	Traducir = true;
	Traduccion_Total += AgregarIdentacion();
	PrincipalParea("Identificador");
	TipoAsignacion();
}

// Tipo Asigancion
function TipoAsignacion() {
	
	// Verificar Si Es Asignacion Normal O ++ O --
	if(TokenActual.GetTipo() == "Simbolo_Igual") {
		
		// Asignacion
		PrincipalParea("Simbolo_Igual");		Traduccion_Total += " = ";
		Expr();
		PrincipalParea("Simbolo_PuntoYComa");	Traduccion_Total += "\n\n";
		
	} else if (TokenActual.GetTipo() == "Simbolo_Mas") {
		
		PrincipalParea("Simbolo_Mas");			
		PrincipalParea("Simbolo_Mas");			Traduccion_Total += " += 1";
		PrincipalParea("Simbolo_PuntoYComa");	Traduccion_Total += "\n\n";
		
	} else if (TokenActual.GetTipo() == "Simbolo_Menos") {
		
		PrincipalParea("Simbolo_Menos");		
		PrincipalParea("Simbolo_Menos");		Traduccion_Total += " -= 1";
		PrincipalParea("Simbolo_PuntoYComa");	Traduccion_Total += "\n\n";
		
	} else if (TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
		
		PrincipalParea("Simbolo_Parentesis_Apertura");	Traduccion_Total += "(";
		ValorFuncion();
		PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += ") \n\n";
		PrincipalParea("Simbolo_PuntoYComa");
		
	}
	
}

// Lista De Instrucciones Interfaz
function ListaInstruccionesInterfaz() {
	
	// Verificar Si Hay Mas Instrucciones
	if  (		
				TokenActual.GetTipo() == "Palabra_Reservada_public"  ||
				TokenActual.GetTipo() == "Comentario_Unilinea"   	 || 
				TokenActual.GetTipo() == "Comentario_Multilinea"	 
		) 
	{
		
		// Instruccion
		InstruccionInterfaz(); 
		
		// Instrucciones Iniciales
		ListaInstruccionesInterfaz();
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

// Instrucciones Iniciales 
function InstruccionInterfaz() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Interfaz
		DefinicionFunciones();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		Comentarios();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("public O Comentario");
		Recuperacion = true;
	
	}	
	
}

// Definicio Funciones
function DefinicionFunciones() {
	
	// Estructura Lexica
	PrincipalParea("Palabra_Reservada_public");
	TipoFuncion();
	
}

// Definicion Funciones
function TipoFuncion() { 

	// Verificar Si Es Void O Tipo De Dato
	if( 
			TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
			TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
			TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
			TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
			TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
			TokenActual.GetTipo() == "Palabra_Reservada_String"  ||			
			TokenActual.GetTipo() == "Palabra_Reservada_char"    
		) { 
		
		// Funcion Tipo De Dato
		DeclaracionFuncionTipo();
		Recuperacion = true;
	
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_void") {
		
		DeclaracionFuncionVoid();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("Tipo De Dato O void");
		Recuperacion = true;
		
	}	 

}

// Definicion Funcion Tipo De Dato
function DeclaracionFuncionTipo() {
	
	// Estructura Sintactica
	TipoDeDatos();									Traduccion_Total += AgregarIdentacion() + "def "; Traducir = true;
	PrincipalParea("Identificador");
	PrincipalParea("Simbolo_Parentesis_Apertura");	Traduccion_Total += "(";
	Parametro();
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += "); \n\n";
	PrincipalParea("Simbolo_PuntoYComa");
	
}

// Funcion Void 
function DeclaracionFuncionVoid() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_void");		Traduccion_Total += AgregarIdentacion() + "def "; Traducir = true;
	PrincipalParea("Identificador");
	PrincipalParea("Simbolo_Parentesis_Apertura");	Traduccion_Total += "(";
	Parametro();
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += "); \n\n";
	PrincipalParea("Simbolo_PuntoYComa");
	
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
		
	} else if ( TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||			
				TokenActual.GetTipo() == "Palabra_Reservada_char"    ||
				TokenActual.GetTipo() == "Palabra_Reservada_void"	 ||
				TokenActual.GetTipo() == "Palabra_Reservada_static"
			) {	
		
		// Funcion
		Funcion();
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("class, Tipo De Dato void O static");
		Recuperacion = true;
		
	}
	
}

// Funcion
function Funcion() {
	
	// Verificar Si Es Void O Tipo De Dato
	if( 
			TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
			TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
			TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
			TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
			TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
			TokenActual.GetTipo() == "Palabra_Reservada_String"  ||			
			TokenActual.GetTipo() == "Palabra_Reservada_char"    
		) { 
		
		// Funcion Tipo De Dato
		FuncionTipoDeDato();
		Recuperacion = true;
	
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_void") {
		
		FuncionVoid();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_static") {
		
		FuncionMain();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("Tipo De Dato, void O static");
		Recuperacion = true;
		
	}	 
	
}

// Funcion Tipo De Dato
function FuncionTipoDeDato() {
	
	// Estructura Sintactica
	TipoDeDatos();									Traduccion_Total += AgregarIdentacion() + "def "; Traducir = true;
	PrincipalParea("Identificador");
	PrincipalParea("Simbolo_Parentesis_Apertura");	Traduccion_Total += "(";
	Parametro();
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += ")";
	PrincipalParea("Simbolo_Llave_Apertura");		Traduccion_Total += ": \n\n";	ArrayIdentacion.push(" ");
	ListaInstruccionesFuncion();
	PrincipalParea("Simbolo_Llave_Cierre");			Traduccion_Total += "\n\n";		ArrayIdentacion.pop();
	
}

// Funcion Void 
function FuncionVoid() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_void");		Traduccion_Total += AgregarIdentacion() + "def "; Traducir = true;
	PrincipalParea("Identificador");
	PrincipalParea("Simbolo_Parentesis_Apertura");	Traduccion_Total += "(";
	Parametro();
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += ")";
	PrincipalParea("Simbolo_Llave_Apertura");		Traduccion_Total += ":\n\n ";	ArrayIdentacion.push(" ");
	ListaInstruccionesFuncion();
	PrincipalParea("Simbolo_Llave_Cierre");			Traduccion_Total += "\n\n";		ArrayIdentacion.pop();
	
}

// Parametros
function Parametro() {
	
	// Verificar Si Hay Parametro
	if(		
			TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
			TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
			TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
			TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
			TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
			TokenActual.GetTipo() == "Palabra_Reservada_String"  ||			
			TokenActual.GetTipo() == "Palabra_Reservada_char"
		) {
			
		// Parametro
		ParametroSintaxis();
		Recuperacion = true;
	
	} else  {
		
		// Vacios Epsilon
		
	}			
	
}

// Parametros Sintaxis
function ParametroSintaxis() {
	
	// Estructura Sintatica
	TipoDeDatos();						Traducir = true;
	PrincipalParea("Identificador");
	ListaParametros();
	
}

// Lista De Parametros
function ListaParametros() {
	
	// Verificar Si Hay Coma
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		// Lista De Declaraciones
		ListaParametrosSintaxis();
		Recuperacion = true;
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Lista De Parametros Sintaxis
function ListaParametrosSintaxis() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Coma");		Traduccion_Total += ", "; 
	TipoDeDatos();						Traducir = true;
	PrincipalParea("Identificador");
	ListaParametros();	
	
}

// Funcion Main
function FuncionMain() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_static");
	PrincipalParea("Palabra_Reservada_void");
	PrincipalParea("Palabra_Reservada_main");		
	PrincipalParea("Simbolo_Parentesis_Apertura");
	PrincipalParea("Palabra_Reservada_String");
	PrincipalParea("Simbolo_Corchete_Apertura");
	PrincipalParea("Simbolo_Corchete_Cierre");
	PrincipalParea("Palabra_Reservada_args");
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += AgregarIdentacion() + "def main(): \n\n"; Main = true;	
	PrincipalParea("Simbolo_Llave_Apertura"); 		ArrayIdentacion.push(" ");
	ListaInstruccionesFuncion();
	PrincipalParea("Simbolo_Llave_Cierre");			ArrayIdentacion.pop();				
	
}

// Lista De Instrucciones Funcion
function ListaInstruccionesFuncion() {
	
	// Verificar Si Hay Mas Instrucciones
	if  (		
				TokenActual.GetTipo() == "Palabra_Reservada_System"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_if"   	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_for"   	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_do"   	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_while" 	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"  	 ||
				TokenActual.GetTipo() == "Identificador"			 ||	
				TokenActual.GetTipo() == "Comentario_Unilinea"		 ||
				TokenActual.GetTipo() == "Comentario_Multilinea"	 ||	
				TokenActual.GetTipo() == "Palabra_Reservada_return"	 
		) 
	{
		
		// Instruccion
		InstruccionFuncion(); 
		
		// Instrucciones Iniciales
		ListaInstruccionesFuncion();
		
	} else {
		
		// Vacios / Epsilon

	}
	
}

// Instrucciones Funcion 
function InstruccionFuncion() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_System") {
		
		// Print
		Print();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_if") {
		
		// If
		If();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_for") {
		
		// For
		For();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_do") {
		
		// Do While
		DoWhile();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_while") {
		
		// While
		While();
		Recuperacion = true; 
				
	} else if(
	
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"  	 	
	
		) {
		
		// While
		DeclaracionVariables();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		Comentarios();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Identificador") {
		
		// Asignacion
		Asignacion();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_return") {
		
		// Comentarios Unilinea O Multilinea
		Return();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("public O Comentario");
		Recuperacion = true;
	
	}
	
}

// Print
function Print() {
	
	PrincipalParea("Palabra_Reservada_System");
	PrincipalParea("Simbolo_Punto");
	PrincipalParea("Palabra_Reservada_out");
	PrincipalParea("Simbolo_Punto");
	TipoPrint();
	PrincipalParea("Simbolo_Parentesis_Apertura");	Traduccion_Total += AgregarIdentacion() + "print(";
	Expr();
	
	// Tipo De Print
	if(PrintEnd) {
			
		Traduccion_Total += " , end=\"\"";	
		
	}
	
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += ") \n\n";
	PrincipalParea("Simbolo_PuntoYComa");
	
}

// Tipo Print
function TipoPrint() {
	
	// Verificar Tipo De Print
	if(TokenActual.GetTipo() == "Palabra_Reservada_println") {
		
		PrincipalParea("Palabra_Reservada_println");	PrintEnd = false;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_print") {
		
		PrincipalParea("Palabra_Reservada_print");		PrintEnd = true;
		
	}
	
}

// If 
function If() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_if");			
	
	// Verficar Si Es If O Else If
	if(ElseIf) {
		
		Traduccion_Total += AgregarIdentacion() + "elif ";
		
	} else {
		
		Traduccion_Total += AgregarIdentacion() + "if ";
		
	}
	
	PrincipalParea("Simbolo_Parentesis_Apertura");
	Expr();
	PrincipalParea("Simbolo_Parentesis_Cierre");
	PrincipalParea("Simbolo_Llave_Apertura");		Traduccion_Total += " : \n\n"; 	ArrayIdentacion.push(" ");
	ListaInstruccionesCiclosIf();	
	PrincipalParea("Simbolo_Llave_Cierre");			Traduccion_Total += "\n\n";		ArrayIdentacion.pop();
	ElseIf = false;
	Else();

}

// Else 
function Else() {
	
	if(TokenActual.GetTipo() == "Palabra_Reservada_else") {
		
		// Estructura Sintactica
		PrincipalParea("Palabra_Reservada_else");
		TipoElse();
		Recuperacion = true;
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

// Tipo De Else 
function TipoElse() {
	
	// Verificar Si Es Else If O Else
	if(TokenActual.GetTipo() == "Simbolo_Llave_Apertura") {
		
		// Estructura Sintactica
		PrincipalParea("Simbolo_Llave_Apertura");	Traduccion_Total += AgregarIdentacion() + "else: \n\n"; ArrayIdentacion.push(" ");	
		ListaInstruccionesCiclosIf();
		PrincipalParea("Simbolo_Llave_Cierre");		Traduccion_Total += "\n\n";	ArrayIdentacion.pop();
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_if") {
		
		// Estructura Sintactica
		ElseIf = true;
		If();		
		
	}
	
}

// For 
function For() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_for");		Traduccion_Total += AgregarIdentacion() + "for ";
	PrincipalParea("Simbolo_Parentesis_Apertura");	
	DeclaracionFor();								Traduccion_Total += ", ";
	Expr();												
	PrincipalParea("Simbolo_PuntoYComa");			EsFor = true;
	Expr();											Traduccion_Total += "): \n\n";	EsFor = false; ContadorFor = 0;			
	PrincipalParea("Simbolo_Parentesis_Cierre");	
	PrincipalParea("Simbolo_Llave_Apertura");		ArrayIdentacion.push(" ");
	ListaInstruccionesCiclosIf(); 
	PrincipalParea("Simbolo_Llave_Cierre");			ArrayIdentacion.pop();
	
}

// Declaracion For
function DeclaracionFor() {
	
	// Estructura Sintactica
	TipoDeDatos();							Traducir = true;
	PrincipalParea("Identificador");		Traduccion_Total += " in range(";
	AsignacionDeclaracionFor();
	ListaDeDeclaracionesFor();
	PrincipalParea("Simbolo_PuntoYComa");	
	
}

// Lista De Declaraciones
function ListaDeDeclaracionesFor() {
	
	// Verificar Si Hay Coma
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		// Lista De Declaraciones
		ListaDeDeclaracionesSintaxisFor();
		Recuperacion = true;
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Lista De Declaraciones Sintaxis
function ListaDeDeclaracionesSintaxisFor() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Coma");		
	PrincipalParea("Identificador");	
	AsignacionDeclaracionFor();
	ListaDeDeclaracionesFor();
	
}

// Asingacion De Declaraciones For
function AsignacionDeclaracionFor() {
	
	// Verificar Si Hay Signo Igual
	if(TokenActual.GetTipo() == "Simbolo_Igual") {
		
		// Asignacion
		AsignacionDeclaracionSintaxisFor();
		Recuperacion = true;
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Asignacion Declaracion Sintaxis For
function AsignacionDeclaracionSintaxisFor() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Igual"); if(ContadorFor >= 1) {  EsFor = true;  }	
	Expr();
	ContadorFor++; 
	EsFor = false;
	
}

// Do While 
function DoWhile() {
	
	// Estructura Sintactica 
	PrincipalParea("Palabra_Reservada_do");			Traduccion_Total += AgregarIdentacion() + "while True: \n\n";	
	PrincipalParea("Simbolo_Llave_Apertura");		ArrayIdentacion.push(" ");
	ListaInstruccionesCiclosIf();  
	PrincipalParea("Simbolo_Llave_Cierre");			Traduccion_Total += AgregarIdentacion() + "if "; ArrayIdentacion.pop();
	PrincipalParea("Palabra_Reservada_while");		
	PrincipalParea("Simbolo_Parentesis_Apertura");  
	Expr();
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += ": \n\n"; ArrayIdentacion.push(" "); ArrayIdentacion.push(" "); 
	PrincipalParea("Simbolo_PuntoYComa");			Traduccion_Total += AgregarIdentacion() + "break";  ArrayIdentacion.pop(); ArrayIdentacion.pop();	
	
}

// While 
function While() {
	
	// Estructura Sintactica 
	PrincipalParea("Palabra_Reservada_while");		Traduccion_Total += AgregarIdentacion() + "while ";
	PrincipalParea("Simbolo_Parentesis_Apertura");
	Expr();
	PrincipalParea("Simbolo_Parentesis_Cierre");	Traduccion_Total += ": \n\n";
	PrincipalParea("Simbolo_Llave_Apertura");
	ListaInstruccionesCiclosIf(); 
	PrincipalParea("Simbolo_Llave_Cierre");
	
}

// Return 
function Return() {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_return");		Traduccion_Total += AgregarIdentacion() + "return ";
	TipoReturn();
	
}

// Tipo Return 
function TipoReturn() {
	
	// Estructura Sintactica 
	if(TokenActual.GetTipo() == "Simbolo_PuntoYComa") {
		
		PrincipalParea("Simbolo_PuntoYComa");	Traduccion_Total += "\n\n";	
		
	} else {
		
		Expr();
		PrincipalParea("Simbolo_PuntoYComa");	Traduccion_Total += "\n\n";	
		
	}
	
}

// Lista De Instrucciones Ciclos If 
function ListaInstruccionesCiclosIf() {
	
	// Verificar Si Hay Mas Instrucciones
	if  (		
				TokenActual.GetTipo() == "Palabra_Reservada_System"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_if"   	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_for"   	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_do"   	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_while" 	 || 
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"  	 ||
				TokenActual.GetTipo() == "Identificador"			 ||	
				TokenActual.GetTipo() == "Comentario_Unilinea"		 ||
				TokenActual.GetTipo() == "Comentario_Multilinea"	 ||	
				TokenActual.GetTipo() == "Palabra_Reservada_return"	 ||
				TokenActual.GetTipo() == "Palabra_Reservada_break"	 ||
				TokenActual.GetTipo() == "Palabra_Reservada_continue"
		) 
	{
		
		// Instruccion
		InstruccionCiclosIf(); 
		
		// Instrucciones Iniciales
		ListaInstruccionesCiclosIf();
		
	} else {
		
		// Vacios / Epsilon

	}
	
}

// Instrucciones Funcion 
function InstruccionCiclosIf() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_System") {
		
		// Print
		Print();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_if") {
		
		// If
		If();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_for") {
		
		// For
		For();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_do") {
		
		// Do While
		DoWhile();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_while") {
		
		// While
		While();
		Recuperacion = true; 
				
	} else if(
	
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_char"  	 	
	
		) {
		
		// While
		DeclaracionVariables();
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		Comentarios();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Identificador") {
		
		// Asignacion
		Asignacion();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_return") {
		
		// Return
		Return();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_break" || TokenActual.GetTipo() == "Palabra_Reservada_continue") {
		
		// Sentencias Ciclos
		SenteciasCiclos();
		Recuperacion = true;
		
	} else {
		
		// Errores Sintacticos
		ErroresSintactico("public O Comentario");
		Recuperacion = true;
	
	}
	
}

// Sentencias Ciclos
function SenteciasCiclos() {
	
	// Estructura Sintactica 
	if(TokenActual.GetTipo() == "Palabra_Reservada_break") {
		
		// Estructura Sintactica
		PrincipalParea("Palabra_Reservada_break");		Traduccion_Total += AgregarIdentacion() + "break \n\n";
		PrincipalParea("Simbolo_PuntoYComa");
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_continue") {
		
		// Estructura Sintactica
		PrincipalParea("Palabra_Reservada_continue");		Traduccion_Total += AgregarIdentacion() + "continue \n\n";
		PrincipalParea("Simbolo_PuntoYComa");
		
	}
	
}

// Expresiones
function Expr() {
	
	// Estructura Sintactica 
	ExprR();
	SumaResta();
	Recuperacion = true;
	
}

function ExprR() {
	
	// Estructura Sintactica
	Valores();
	Recuperacion = true;
	MultiplicacionDivision();
	Recuperacion = true;
	
}

function SumaResta() {
	
	// Verificar Si Es Mas O Menos
	if(TokenActual.GetTipo() == "Simbolo_Mas") {
		
		PrincipalParea("Simbolo_Mas");				if(!EsFor) { Traduccion_Total += " + "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_Menos") {
		
		PrincipalParea("Simbolo_Menos");			if(!EsFor) { Traduccion_Total += " - "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_Or") { 

		PrincipalParea("Simbolo_Or");				if(!EsFor) { Traduccion_Total += " || "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_Xor") { 

		PrincipalParea("Simbolo_Xor");				if(!EsFor) { Traduccion_Total += " ^ "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_MayorIgualQue") { 

		PrincipalParea("Simbolo_MayorIgualQue");	if(!EsFor) { Traduccion_Total += " >= "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_MenorIgualQue") { 

		PrincipalParea("Simbolo_MenorIgualQue");	if(!EsFor) { Traduccion_Total += " <= "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_MenorQue") { 

		PrincipalParea("Simbolo_MenorQue");			if(!EsFor) { Traduccion_Total += " < "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_MayorQue") { 

		PrincipalParea("Simbolo_MayorQue");			if(!EsFor) { Traduccion_Total += " > "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_DobleIgual") { 

		PrincipalParea("Simbolo_DobleIgual");		if(!EsFor) { Traduccion_Total += " == "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_Diferente") { 

		PrincipalParea("Simbolo_Diferente");		if(!EsFor) { Traduccion_Total += " != "; }
		ExprR();
		Recuperacion = true;
		SumaResta();
		Recuperacion = true;
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

function MultiplicacionDivision() {
	
	// Verficar Si Es Multiplicacion O Division
	if(TokenActual.GetTipo() == "Simbolo_Por") {
		
		PrincipalParea("Simbolo_Por");			if(!EsFor) { Traduccion_Total += " * "; }
		Valores();
		Recuperacion = true;
		MultiplicacionDivision();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_Dividido") {
		
		PrincipalParea("Simbolo_Dividido");		if(!EsFor) { Traduccion_Total += " / "; }
		Valores();
		Recuperacion = true;
		MultiplicacionDivision();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Simbolo_And") {
		
		PrincipalParea("Simbolo_And");			if(!EsFor) { Traduccion_Total += " && "; }
		Valores();
		Recuperacion = true;
		MultiplicacionDivision();
		Recuperacion = true;
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

function Valores() {
	
	// Verificar Tipo De Valor
	if(TokenActual.GetTipo() == "Numero") {
		
		if(!EsFor) { Traducir = true; }
		PrincipalParea("Numero");	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_true") {
		
		PrincipalParea("Palabra_Reservada_true");	if(!EsFor) { Traduccion_Total += "True"; }
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_false") {
		
		PrincipalParea("Palabra_Reservada_false");	if(!EsFor) { Traduccion_Total += "False"; }
		
	} else if(TokenActual.GetTipo() == "Identificador") {
		
		if(!EsFor) { Traducir = true; }
		PrincipalParea("Identificador");
		ValoresIdentificador();
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Cadena_De_Texto") {
		
		if(!EsFor) { Traducir = true; }
		PrincipalParea("Cadena_De_Texto");
		
	} else if(TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
		
		PrincipalParea("Simbolo_Parentesis_Apertura");	if(!EsFor) { Traduccion_Total += "("; }
		Expr();
		PrincipalParea("Simbolo_Parentesis_Cierre");	if(!EsFor) { Traduccion_Total += ")"; }
		
	} else if(TokenActual.GetTipo() == "Simbolo_Menos") { 
	
		PrincipalParea("Simbolo_Menos");				if(!EsFor) { Traduccion_Total += "-"; }
		Expr();

	} else if(TokenActual.GetTipo() == "Simbolo_Negacion") { 
	
		PrincipalParea("Simbolo_Negacion");				if(!EsFor) { Traduccion_Total += "not "; }
		Expr();

	} else {
		
		// Erroers Sintacticos
		ErroresSintactico("Valores");
		Recuperacion = true;
		
	}
	
}

function ValoresIdentificador() {
	
	// Verificar Tipo
	if(TokenActual.GetTipo() == "Simbolo_Punto") {
		
		PrincipalParea("Simbolo_Punto");				if(!EsFor) { Traduccion_Total += "."; Traducir = true; }
		PrincipalParea("Identificador");
		PrincipalParea("Simbolo_Parentesis_Apertura");	if(!EsFor) { Traduccion_Total += "("; }
		ValorFuncion();
		PrincipalParea("Simbolo_Parentesis_Cierre");	if(!EsFor) { Traduccion_Total += ")"; }
		
	} else if(TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
		
		PrincipalParea("Simbolo_Parentesis_Apertura");	if(!EsFor) { Traduccion_Total += "("; }
		ValorFuncion();
		PrincipalParea("Simbolo_Parentesis_Cierre");	if(!EsFor) { Traduccion_Total += ")"; }
		
	} else if(TokenActual.GetTipo() == "Simbolo_Mas") {
		
		if(IndexToken < ArrayTokens.length - 1) {
			
			if(ArrayTokens[IndexToken + 1].GetTipo() == "Simbolo_Mas") {
				
				PrincipalParea("Simbolo_Mas");	
				PrincipalParea("Simbolo_Mas");			if(!EsFor) { Traduccion_Total += " += 1"; }
				
			}
			
		}
		
	} else if(TokenActual.GetTipo() == "Simbolo_Menos") {
		
		if(IndexToken < ArrayTokens.length - 1) {
			
			if(ArrayTokens[IndexToken + 1].GetTipo() == "Simbolo_Menos") {
				
				PrincipalParea("Simbolo_Menos");	
				PrincipalParea("Simbolo_Menos");		if(!EsFor) { Traduccion_Total += " -= 1"; }
				
			}
			
		}
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

function ValorFuncion() {
	
	// Verficar Si Hay Valor 
	if (      
	
			TokenActual.GetTipo() == "Numero"	||
			TokenActual.GetTipo() == "Palabra_Reservada_true"	||
			TokenActual.GetTipo() == "Palabra_Reservada_false"	||
			TokenActual.GetTipo() == "Identificador"	||
			TokenActual.GetTipo() == "Cadena_De_Texto"	||
			TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura"
	
		) {
		
		// Lista De Valores 
		Expr();
		ListaDeValores();
		Recuperacion = true;
		
	} else {
		
		// Vacios / Epsilon
		
	}
	 
}

function ListaDeValores() {
	
	// Verficar Si Hay Coma 
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		PrincipalParea("Simbolo_Coma");		if(!EsFor) { Traduccion_Total += ", "; }
		Expr();
		ListaDeValores();
		
	} else {
		
		// Vacios / Epsilon
		
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
			/*if (IndexToken == ArrayTokens.length - 1) {
				
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