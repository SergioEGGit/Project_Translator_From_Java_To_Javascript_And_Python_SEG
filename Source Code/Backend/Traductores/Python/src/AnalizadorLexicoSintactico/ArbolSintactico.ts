// imports

// Objeto Token
import { NuevoToken } from "./ObjetoToken";

// Objeto Error
import { NodoArbol } from "./ObjetoArbol";

// Lista De Tokens Y Contador Nodos
import { ArrayTokens, VariablesGlobales } from "./Variables";

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

// Contador Seguro
var SeguroContador = 0;

// Estoy En Do While
var EsDoWhile = false;

// Contador Errores
var ContadorErrores = 1;

// Array De Identacion 
var ArrayIdentacion: Array<String> = new Array();

// Agregar Valor 
var AgregarValor = false;

// Valor String 
var ValorString: String;

// Nodo Raiz Arbol
var Raiz = new NodoArbol(VariablesGlobales.ContadorNodos, "Raiz");
VariablesGlobales.ContadorNodos++;
	
// Nodo LIsta De Instruccioens
var NodoListaDeInstruccionesIniciales = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Iniciales");
VariablesGlobales.ContadorNodos++;

// Lista De Declaraciones
var NodoListaDeDeclaracionesSintaxis = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones");
VariablesGlobales.ContadorNodos++;

// Lista De Declaraciones For 
var NodoListaDeDeclaracionesFor = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones_For");
VariablesGlobales.ContadorNodos++;

// Expresion
var NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
VariablesGlobales.ContadorNodos++;

// Lista De Parametros
var NodoListaParametros = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Parametros");
VariablesGlobales.ContadorNodos++;

// Instrucciones Clase 
var NodoInstruccionesClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Clase");
VariablesGlobales.ContadorNodos++;

var ArregloInstruccionesClase: Array<NodoArbol> = new Array();
 
var ContadorArrayClase = 0;

// Instrucciones Interfaz
var NodoInstruccionesInterfaz= new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Interfaz");
VariablesGlobales.ContadorNodos++;

var ArregloInstruccionesInterfaz: Array<NodoArbol> = new Array();
 
var ContadorArrayInterfaz = 0;

// Instrucciones Funcion
var NodoInstruccionesFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Funcion");
VariablesGlobales.ContadorNodos++;

var ArregloInstruccionesFuncion: Array<NodoArbol> = new Array();
 
var ContadorArrayFuncion = 0;

// Instrucciones CiclosIf
var NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
VariablesGlobales.ContadorNodos++;

var ArregloInstruccionesCiclosIf: Array<NodoArbol> = new Array();
 
var ContadorArrayCiclosIf = 0;

// Comienzo Analisis Sintactico 
export function ArbolSintactico(): any {
	
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
	
	// Contador Seguro
	SeguroContador = 0;
	
	// Estoy En Do While
	EsDoWhile = false;
	
	// Contador Errores
	ContadorErrores = 1;
		
	// Pre Analisis Analizador
	TokenActual = ArrayTokens[IndexToken];
	
	// Identacion 	 
	ArrayIdentacion = new Array();
	
	// Contador Nodos 
	VariablesGlobales.ContadorNodos = 0;
	
	// Agregar Valor 
	AgregarValor = false;
	
	// Valor String 
	ValorString = "";
	
	// Nodo Raiz Arbol
	Raiz = new NodoArbol(VariablesGlobales.ContadorNodos, "Raiz");
	VariablesGlobales.ContadorNodos++;
		
	// Lista De Declaraciones For 
	NodoListaDeDeclaracionesFor = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones_For");
	VariablesGlobales.ContadorNodos++;	
		
	// Lista De Parametros
	NodoListaParametros = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Parametros");
	VariablesGlobales.ContadorNodos++;
	
	// Expresion
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;

	// Nodo LIsta De Instruccioens
	NodoListaDeInstruccionesIniciales = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Iniciales");
	VariablesGlobales.ContadorNodos++;
 
	// Nodo Lista De Instruccioens Clase 
	NodoInstruccionesClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Clase");
	VariablesGlobales.ContadorNodos++; 
 
	ArregloInstruccionesClase = new Array();
 
	ContadorArrayClase = 0;
	
	// Nodo LIsta De Instruccioens Interfaz
	NodoInstruccionesInterfaz = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Interfaz");
	VariablesGlobales.ContadorNodos++;
 
	ArregloInstruccionesInterfaz = new Array();
 
	ContadorArrayInterfaz = 0;
	
	// Nodo LIsta De Funcion
	NodoInstruccionesFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Funcion");
	VariablesGlobales.ContadorNodos++;
 
	ArregloInstruccionesFuncion = new Array();
 
	ContadorArrayFuncion = 0;
	
	// Instrucciones CiclosIf
	NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
	VariablesGlobales.ContadorNodos++;

	ArregloInstruccionesCiclosIf = new Array();
	 
	ContadorArrayCiclosIf = 0;

	// Inicio Analisis
	if(ArrayTokens.length > 0) {
		
		InicioAnalisis();
		
	}
	
	// Formar Grafica 
	var TxtGrafica = "digraph ArbolSintaticoPY { \n\n    node[color = crimson] \n\n" + Raiz.GenerarTxtGrafica() + "\n\n}";
	
	return TxtGrafica;
	
}

// Inicio Analisis
function InicioAnalisis() {
	
	// Agregar Nodo Inicial
	Raiz.ArrayNodos.push(NodoListaDeInstruccionesIniciales);
	
	// Instrucciones Principales
	InstruccionInicial();
	
	// Lista De Instrucciones Principales
	ListaInstruccionesIniciales();	
	
}

// Lista De Instrucciones Iniciales
function ListaInstruccionesIniciales() {
	
	// Verificar Si Hay Instruccioens 
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
				
		)  {
		
		// Instruccion
		InstruccionInicial(); 
		
		// Instrucciones Iniciales
		ListaInstruccionesIniciales();
		
	} else {
		
		if(TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
			
			// Vacios / Epsilon	
			
		} else {
			
			// Instruccion
			InstruccionInicial(); 
		
			// Instrucciones Iniciales
			ListaInstruccionesIniciales();	
			
		}	
		
	}
	
}

// Instrucciones Iniciales 
function InstruccionInicial() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Interfaz	
		var NodoDefinicionTipoClase = DefinicionTipoClase();

		NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoDefinicionTipoClase);
		
		Recuperacion = true; 
				
	} else if ( 
	
				TokenActual.GetTipo() == "Palabra_Reservada_int"     ||
				TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
				TokenActual.GetTipo() == "Palabra_Reservada_double"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_string"  ||
				TokenActual.GetTipo() == "Palabra_Reservada_String"  ||			
				TokenActual.GetTipo() == "Palabra_Reservada_char"    
			
			) {	
		
		// Declaracion
		var NodoDeclaracionVariables = DeclaracionVariables();
		
		NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoDeclaracionVariables);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		var NodoComentarios = Comentarios();
		
		NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoComentarios);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Fin_De_Cadena") {  
	
		// Vacios / Epsilon	
	
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Una Clase, Interfaz, Declaracion De Variables O Comentarios");
		
		NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoError);
		
		Recuperacion = true;
	
	}	
	
}

// Definicion Tipo Clase (Class / Interface)
function DefinicionTipoClase(): any {

	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_public");	
	
	var NodoTipoClase = TipoClase();
	
	return NodoTipoClase;
	
}

// Tipo Clase (Class / Interface)
function TipoClase(): any {
	
	// Verificar Si Es Clase O Interfaz
	if(TokenActual.GetTipo() == "Palabra_Reservada_class") {
		
		// Clases
		var NodoPalabraPublic = new NodoArbol(VariablesGlobales.ContadorNodos, "public");
		VariablesGlobales.ContadorNodos++;
		
		var NodoTipoClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Clase");
		VariablesGlobales.ContadorNodos++;		
		
		var NodoClase = Clase();
		
		NodoTipoClase.ArrayNodos.push(NodoPalabraPublic);
		NodoTipoClase.ArrayNodos.push(NodoClase);
		
		Recuperacion = true;		
		
		return NodoTipoClase;
	
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_interface") {
		
		// Interfaces
		var NodoPalabraPublic = new NodoArbol(VariablesGlobales.ContadorNodos, "public");
		VariablesGlobales.ContadorNodos++;
		
		var NodoTipoClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Clase");
		VariablesGlobales.ContadorNodos++;
		
		var NodoInterfaz = Interfaz();
		
		NodoTipoClase.ArrayNodos.push(NodoPalabraPublic);
		NodoTipoClase.ArrayNodos.push(NodoInterfaz);
		
		Recuperacion = true;
		
		return NodoTipoClase;
		
	} else {
		
		// Error Sintactico
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("La Palabra class o interface");
		//Recuperacion = true;
		
		return NodoError;

	}
		
}

// Clase
function Clase(): any {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_class"); 	AgregarValor = true;
	PrincipalParea("Identificador");				
	PrincipalParea("Simbolo_Llave_Apertura"); 	
	
	var NodoClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Clase");
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "class");
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");	
	VariablesGlobales.ContadorNodos++;
	
	NodoClase.ArrayNodos.push(Sintaxis1);
	NodoClase.ArrayNodos.push(Sintaxis2);
	NodoClase.ArrayNodos.push(Sintaxis3);
	
	NodoInstruccionesClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Clase");
	VariablesGlobales.ContadorNodos++;
	
	// Arreglo De Instrucciones Clase 
	ContadorArrayClase++;
	
	ArregloInstruccionesClase[ContadorArrayClase] = NodoInstruccionesClase;
	
	ListaInstruccionesClase();	
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	NodoClase.ArrayNodos.push(ArregloInstruccionesClase[ContadorArrayClase]);
	
	NodoClase.ArrayNodos.push(Sintaxis4);
	
	ContadorArrayClase--;
	
	PrincipalParea("Simbolo_Llave_Cierre");  

	return NodoClase;

}

// Interfaz
function Interfaz(): any {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_interface");	AgregarValor = true; 
	PrincipalParea("Identificador");				
	PrincipalParea("Simbolo_Llave_Apertura"); 	
	
	var NodoInterfaz = new NodoArbol(VariablesGlobales.ContadorNodos, "Interfaz");
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "interface");
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");	
	VariablesGlobales.ContadorNodos++;
	
	NodoInterfaz.ArrayNodos.push(Sintaxis1);
	NodoInterfaz.ArrayNodos.push(Sintaxis2);
	NodoInterfaz.ArrayNodos.push(Sintaxis3);
	
	NodoInstruccionesInterfaz = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Interfaz");
	VariablesGlobales.ContadorNodos++;
	
	// Arreglo De Instrucciones Clase 
	ContadorArrayInterfaz++;
	
	ArregloInstruccionesInterfaz[ContadorArrayInterfaz] = NodoInstruccionesInterfaz;	
	
	ListaInstruccionesInterfaz();	

	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	NodoInterfaz.ArrayNodos.push(ArregloInstruccionesInterfaz[ContadorArrayInterfaz]);
	
	NodoInterfaz.ArrayNodos.push(Sintaxis4);
	
	ContadorArrayInterfaz--;
	
	PrincipalParea("Simbolo_Llave_Cierre");  

	return NodoInterfaz;
	
}

// Tipos De Datos
function TipoDeDatos(): any {
	
	// Verificar Tipo De Dato
	if(TokenActual.GetTipo() == "Palabra_Reservada_int") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_int");
		
		var NodoInt = new NodoArbol(VariablesGlobales.ContadorNodos, "int");
		VariablesGlobales.ContadorNodos++;

		return NodoInt;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_boolean") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_boolean");
		
		var NodoBoolean = new NodoArbol(VariablesGlobales.ContadorNodos, "boolean");
		VariablesGlobales.ContadorNodos++;

		return NodoBoolean;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_Boolean") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_Boolean");
		
		var NodoBoolean = new NodoArbol(VariablesGlobales.ContadorNodos, "Boolean");
		VariablesGlobales.ContadorNodos++;

		return NodoBoolean;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_double") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_double");
		
		var NodoDouble = new NodoArbol(VariablesGlobales.ContadorNodos, "double");
		VariablesGlobales.ContadorNodos++;

		return NodoDouble;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_string") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_string");
		
		var NodoString = new NodoArbol(VariablesGlobales.ContadorNodos, "string");
		VariablesGlobales.ContadorNodos++;

		return NodoString;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_String") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_String");
		
		var NodoString = new NodoArbol(VariablesGlobales.ContadorNodos, "String");
		VariablesGlobales.ContadorNodos++;

		return NodoString;	
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_char") {
		
		// Metodo Parea 
		PrincipalParea("Palabra_Reservada_char");
		
		var NodoChar = new NodoArbol(VariablesGlobales.ContadorNodos, "char");
		VariablesGlobales.ContadorNodos++;

		return NodoChar;	
		
	} else {
		
		// Error Sintactico
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Un Tipo De Dato");
		// Recuperacion = true;
		
		return NodoError;
		
	}	
	
}

// Declaracion De Variables
function DeclaracionVariables(): any {
	
	// Estructura Sintactica
	var NodoDeclaracionVariables = new NodoArbol(VariablesGlobales.ContadorNodos, "Declaracion_De_Variables");	
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;
	
	var TipoDato = TipoDeDatos();	
	
	Sintaxis1.ArrayNodos.push(TipoDato); AgregarValor = true;	
	
	PrincipalParea("Identificador");	
	
	NodoListaDeDeclaracionesSintaxis = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones");
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	NodoDeclaracionVariables.ArrayNodos.push(Sintaxis1);	
	NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(Sintaxis2);
	
	AsignacionDeclaracion();	
	
	ListaDeDeclaraciones();
	
	NodoDeclaracionVariables.ArrayNodos.push(NodoListaDeDeclaracionesSintaxis);
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++;
	
	NodoDeclaracionVariables.ArrayNodos.push(Sintaxis5);
	
	PrincipalParea("Simbolo_PuntoYComa");		
	
	return NodoDeclaracionVariables;
	
}

// Lista De Declaraciones
function ListaDeDeclaraciones() {
	
	// Verificar Si Hay Coma
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		// Lista De Declaraciones
		ListaDeDeclaracionesSintaxis();
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Lista De Declaraciones Sintaxis
function ListaDeDeclaracionesSintaxis() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Coma");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ",");
	VariablesGlobales.ContadorNodos++;
	
	AgregarValor = true;
	
	PrincipalParea("Identificador");	
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(Sintaxis1);
	NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(Sintaxis2);
	
	AsignacionDeclaracion();
	ListaDeDeclaraciones(); 
	
}

// Asingacion De Declaraciones
function AsignacionDeclaracion() {
	
	// Verificar Si Hay Signo Igual
	if(TokenActual.GetTipo() == "Simbolo_Igual") {
		
		// Asignacion
		AsignacionDeclaracionSintaxis();
	
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Asignacion Declaracion Sintaxis
function AsignacionDeclaracionSintaxis() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Igual");
	
	var NodoAsignacionDeclaracionSintaxis = new NodoArbol(VariablesGlobales.ContadorNodos, "=");
	VariablesGlobales.ContadorNodos++;
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(NodoAsignacionDeclaracionSintaxis);
	
	NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(NodoExpresion);
	
}

// Comentarios
function Comentarios(): any {
	
	// Declaraciones
	var Comentario = "";
	
	var NodoComentarios = new NodoArbol(VariablesGlobales.ContadorNodos, "Comentario");
	VariablesGlobales.ContadorNodos++;
	
	// Estructura Sintactica
	if(TokenActual.GetTipo() == "Comentario_Unilinea") {
		
		// Comentario Unilinea
		
		// Comentario		
		Comentario = TokenActual.GetLexema().toString();
		
		// Metodo Parea
		PrincipalParea("Comentario_Unilinea");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, Comentario);	
		VariablesGlobales.ContadorNodos++;
		
		NodoComentarios.ArrayNodos.push(Sintaxis1);
		
		return NodoComentarios;
		
	} else if(TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentario Multilinea
		
		// Comentario 
		Comentario = TokenActual.GetLexema().toString();
		
		// Metodo Parea
		PrincipalParea("Comentario_Multilinea");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, Comentario);	
		VariablesGlobales.ContadorNodos++;
		
		NodoComentarios.ArrayNodos.push(Sintaxis1);
		
		return NodoComentarios;
		
	} else {
		
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Un Tipo De Comentario");
		//Recuperacion = true;
		
		return NodoError;
		
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
		
		if(TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
			
			// Vacios / Epsilon	
			
		} else {
			
			// Instruccion
			InstruccionClase(); 
		
			// Instrucciones Iniciales
			ListaInstruccionesClase();	
			
		}	

	}
	
}

// Instrucciones Clase 
function InstruccionClase() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Funcion
		var NodoDefinicionesClase = DefinicionesClase();

		ArregloInstruccionesClase[ContadorArrayClase].ArrayNodos.push(NodoDefinicionesClase);
		
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
		var NodoDeclaracionVariables = DeclaracionVariables();
		
		ArregloInstruccionesClase[ContadorArrayClase].ArrayNodos.push(NodoDeclaracionVariables);
		
		Recuperacion = true;
		
	} else if (TokenActual.GetTipo() == "Identificador") {	
		
		// Declaracion
		var NodoAsignacion = Asignacion();
		
		ArregloInstruccionesClase[ContadorArrayClase].ArrayNodos.push(NodoAsignacion);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		var NodoComentarios = Comentarios();
		
		ArregloInstruccionesClase[ContadorArrayClase].ArrayNodos.push(NodoComentarios);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Fin_De_Cadena") {  
	
		// Vacios / Epsilon	
	
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Una Clase, Funcion, Declaracion De Variables, Comentarios O Asignacion De Variables");
		
		ArregloInstruccionesClase[ContadorArrayClase].ArrayNodos.push(NodoError);
		
		Recuperacion = true;		
	
	}	
	
}

// Asignacion
function Asignacion(): any {
	
	// Estructura Sintactica
	AgregarValor = true;	
	
	var NodoAsignacion = new NodoArbol(VariablesGlobales.ContadorNodos, "Asignacion");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Identificador");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis2 = TipoAsignacion();
	
	Sintaxis2.ArrayNodos.unshift(Sintaxis1);
	
	NodoAsignacion.ArrayNodos.push(Sintaxis2);

	return NodoAsignacion;
	
}

// Tipo Asigancion
function TipoAsignacion(): any {
	
	// Verificar Si Es Asignacion Normal O ++ O --
	if(TokenActual.GetTipo() == "Simbolo_Igual") {
		
		// Asignacion
		var NodoTipoAsignacion = new NodoArbol(VariablesGlobales.ContadorNodos, "Asignacion_Simple");
		VariablesGlobales.ContadorNodos++;	
		
		PrincipalParea("Simbolo_Igual");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "=");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
		VariablesGlobales.ContadorNodos++;	
		
		Expr();
		
		PrincipalParea("Simbolo_PuntoYComa");	
		
		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;	
		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis1);
		NodoTipoAsignacion.ArrayNodos.push(NodoExpresion);		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis2);
		
		return NodoTipoAsignacion;
		
	} else if (TokenActual.GetTipo() == "Simbolo_Mas") {
		
		var NodoTipoAsignacion = new NodoArbol(VariablesGlobales.ContadorNodos, "Incremento");
		VariablesGlobales.ContadorNodos++;	
		
		// Incremento
		PrincipalParea("Simbolo_Mas");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "+");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_Mas");		

		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "+");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;
		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis1);
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis2);		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis3);
		
		return NodoTipoAsignacion;		
		
	} else if (TokenActual.GetTipo() == "Simbolo_Menos") {
		
		var NodoTipoAsignacion = new NodoArbol(VariablesGlobales.ContadorNodos, "Decremento");
		VariablesGlobales.ContadorNodos++;	
		
		// Decremento
		PrincipalParea("Simbolo_Menos");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "-");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_Menos");		

		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "-");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;
		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis1);
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis2);		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis3);
		
		return NodoTipoAsignacion;		
		
	} else if (TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
		
		var NodoTipoAsignacion = new NodoArbol(VariablesGlobales.ContadorNodos, "Llamada_Método");
		VariablesGlobales.ContadorNodos++;	
		
		// Funcion
		PrincipalParea("Simbolo_Parentesis_Apertura");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
		VariablesGlobales.ContadorNodos++;	
		
		ValorFuncion();
		
		PrincipalParea("Simbolo_Parentesis_Cierre");
		
		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;
		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis1);
		NodoTipoAsignacion.ArrayNodos.push(NodoExpresion);		
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis2);
		NodoTipoAsignacion.ArrayNodos.push(Sintaxis3);
		
		return NodoTipoAsignacion;
		
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Una Asignacion, Incremento, Decremento O Llamada A Una Funcion");
		//Recuperacion = true;
		
		return NodoError;
	
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
		
		if(TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
			
			// Vacios / Epsilon	
			
		} else {
			
			// Instruccion
			InstruccionInterfaz(); 
		
			// Instrucciones Iniciales
			ListaInstruccionesInterfaz();	
			
		}	
		
	}
	
}

// Instrucciones Iniciales 
function InstruccionInterfaz() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Clase O Interfaz
		var NodoDefinicionFunciones = DefinicionFunciones(); 
		
		ArregloInstruccionesInterfaz[ContadorArrayInterfaz].ArrayNodos.push(NodoDefinicionFunciones);
		
		Recuperacion = true;		
				
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		var NodoComentarios = Comentarios();
		
		ArregloInstruccionesInterfaz[ContadorArrayInterfaz].ArrayNodos.push(NodoComentarios);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Fin_De_Cadena") {  
	
		// Vacios / Epsilon	
	
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Una Declaracion De Funcion O Comentarios");
		
		ArregloInstruccionesInterfaz[ContadorArrayInterfaz].ArrayNodos.push(NodoError);
		
		Recuperacion = true;
	
	}	
	
}

// Definicio Funciones
function DefinicionFunciones(): any {
	
	// Estructura Lexica
	PrincipalParea("Palabra_Reservada_public");
	
	var NodoDeclaracionFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Declaracion_De_Funcion");
	VariablesGlobales.ContadorNodos++;
	
	var Sintaxis1 = TipoFuncion();
	
	NodoDeclaracionFuncion.ArrayNodos.push(Sintaxis1);
	
	return NodoDeclaracionFuncion;
	
}

// Definicion Funciones
function TipoFuncion(): any { 

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
		var NodoFuncionTipo = DeclaracionFuncionTipo();
		
		Recuperacion = true;
		
		return NodoFuncionTipo;
	
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_void") {
		
		// Funcion Void
		var NodoFuncionVoid = DeclaracionFuncionVoid();
		
		Recuperacion = true;
		
		return NodoFuncionVoid;
		
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("La Palabra void o Un Tipo De Dato");
		//Recuperacion = true;
		
		return NodoError;
		
	}	 

}

// Definicion Funcion Tipo De Dato
function DeclaracionFuncionTipo() {
	
	// Estructura Sintactica
	var NodoTipoFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion_Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;
	
	var NodoTipoDeDato = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;
	
	var Tipo = TipoDeDatos();

	NodoTipoDeDato.ArrayNodos.push(Tipo);
	
	AgregarValor = true;	
	PrincipalParea("Identificador");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;		
	
	PrincipalParea("Simbolo_Parentesis_Apertura");

	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;	
	
	// Expresion
	NodoListaParametros = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Parametros");
	VariablesGlobales.ContadorNodos++;
	
	Parametro();
	
	PrincipalParea("Simbolo_Parentesis_Cierre");	
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;		
	
	PrincipalParea("Simbolo_PuntoYComa");
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++;	
	
	NodoTipoFuncion.ArrayNodos.push(NodoTipoDeDato);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis1);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis2);
	NodoTipoFuncion.ArrayNodos.push(NodoListaParametros);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis4);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis5);
	
	return NodoTipoFuncion;
	
}

// Funcion Void 
function DeclaracionFuncionVoid() {
	
	// Estructura Sintactica
	var NodoTipoFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion_Void");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Palabra_Reservada_void");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "void");
	VariablesGlobales.ContadorNodos++;
	
	AgregarValor = true;
	PrincipalParea("Identificador");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Parentesis_Apertura");
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;
	
	// Expresion
	NodoListaParametros = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Parametros");
	VariablesGlobales.ContadorNodos++;
	
	Parametro();
	
	PrincipalParea("Simbolo_Parentesis_Cierre");
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_PuntoYComa");
	
	var Sintaxis6 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++;
	
	NodoTipoFuncion.ArrayNodos.push(Sintaxis1);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis2);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis3);
	NodoTipoFuncion.ArrayNodos.push(NodoListaParametros);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis5);
	NodoTipoFuncion.ArrayNodos.push(Sintaxis6);
	
	return NodoTipoFuncion;
	
}

// Definicio Clase 
function DefinicionesClase(): any {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_public");
	
	var NodoTipoDefinicionesClase = TipoDefinicionesClase();
	
	return NodoTipoDefinicionesClase;
	
}

// Tipo De Definiciones Dentro De Un Clase
function TipoDefinicionesClase(): any {
	
	// Verificar Palabra
	if(TokenActual.GetTipo() == "Palabra_Reservada_class") {
		
		// Clase 
		var NodoPalabraPublic = new NodoArbol(VariablesGlobales.ContadorNodos, "public");
		VariablesGlobales.ContadorNodos++;
		
		var NodoTipoClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Clase");
		VariablesGlobales.ContadorNodos++;
		
		var NodoClase = Clase();
		
		NodoTipoClase.ArrayNodos.push(NodoPalabraPublic);
		NodoTipoClase.ArrayNodos.push(NodoClase);
		
		Recuperacion = true;
		
		return NodoTipoClase;
		
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
		var NodoPalabraPublic = new NodoArbol(VariablesGlobales.ContadorNodos, "public");
		VariablesGlobales.ContadorNodos++;
		
		var NodoTipoClase = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion");
		VariablesGlobales.ContadorNodos++;
		
		var NodoFuncion = Funcion();
		
		NodoTipoClase.ArrayNodos.push(NodoPalabraPublic);
		NodoTipoClase.ArrayNodos.push(NodoFuncion);
		
		Recuperacion = true;
		
		return NodoTipoClase;
		
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Se Esperar La Palabra class, void, static O Un Tipo De Dato");
		//Recuperacion = true;
		
		return NodoError;
		
	}
	
}

// Funcion
function Funcion(): any {
	
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
		var NodoFuncionTipoDeDato = FuncionTipoDeDato();
			
		Recuperacion = true;
	
		return NodoFuncionTipoDeDato;
	
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_void") {
		
		// Funcion Void 
		var NodoFuncionVoid = FuncionVoid();
		
		Recuperacion = true;
	
		return NodoFuncionVoid;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_static") {
		
		// Funcion Main
		var NodoFuncionMain = FuncionMain();
		
		Recuperacion = true;
	
		return NodoFuncionMain;
		
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("La Palabra void, static O Un Tipo De Dato");
		//Recuperacion = true;
		
		return NodoError;
		
	}	 
	
}

// Funcion Tipo De Dato
function FuncionTipoDeDato(): any {
	
	// Estructura Sintactica
	var NodoFuncionTipoDeDato = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion_Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;			
	
	var NodoTipoDeDato = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;
	
	var Tipo = TipoDeDatos();

	NodoTipoDeDato.ArrayNodos.push(Tipo);
		
	AgregarValor = true;
	PrincipalParea("Identificador");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Simbolo_Parentesis_Apertura");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;
		
	// Expresion
	NodoListaParametros = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Parametros");
	VariablesGlobales.ContadorNodos++;
	
	Parametro();
		
	PrincipalParea("Simbolo_Parentesis_Cierre");
	
	NodoFuncionTipoDeDato.ArrayNodos.push(NodoTipoDeDato);
	NodoFuncionTipoDeDato.ArrayNodos.push(Sintaxis1);
	NodoFuncionTipoDeDato.ArrayNodos.push(Sintaxis2);
	NodoFuncionTipoDeDato.ArrayNodos.push(NodoListaParametros);
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Llave_Apertura");
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;
	
	NodoInstruccionesFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Funcion");
	VariablesGlobales.ContadorNodos++;
	
	// Arreglo De Instrucciones Clase
	ContadorArrayFuncion++;
	
	ArregloInstruccionesFuncion[ContadorArrayFuncion] = NodoInstruccionesFuncion;	
	
	ListaInstruccionesFuncion();
	
	PrincipalParea("Simbolo_Llave_Cierre");			
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	NodoFuncionTipoDeDato.ArrayNodos.push(Sintaxis3);
	NodoFuncionTipoDeDato.ArrayNodos.push(Sintaxis4);
	NodoFuncionTipoDeDato.ArrayNodos.push(ArregloInstruccionesFuncion[ContadorArrayFuncion]);
	NodoFuncionTipoDeDato.ArrayNodos.push(Sintaxis5);	
	
	ContadorArrayFuncion--;
	
	return NodoFuncionTipoDeDato;
	
}

// Funcion Void 
function FuncionVoid() {
	
	// Estructura Sintactica
	var NodoFuncionVoid = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion_Void");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Palabra_Reservada_void");	
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "void");
	VariablesGlobales.ContadorNodos++;
	
	AgregarValor = true;
	PrincipalParea("Identificador");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Parentesis_Apertura");	
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;
	
	// Expresion
	NodoListaParametros = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Parametros");
	VariablesGlobales.ContadorNodos++;
	
	Parametro();
	
	PrincipalParea("Simbolo_Parentesis_Cierre");	
	
	NodoFuncionVoid.ArrayNodos.push(Sintaxis1);	
	NodoFuncionVoid.ArrayNodos.push(Sintaxis2);	
	NodoFuncionVoid.ArrayNodos.push(Sintaxis3);	
	NodoFuncionVoid.ArrayNodos.push(NodoListaParametros);
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Llave_Apertura");
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;
	
	NodoInstruccionesFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Funcion");
	VariablesGlobales.ContadorNodos++;
	
	// Arreglo De Instrucciones Clase 
	ContadorArrayFuncion++;
	
	ArregloInstruccionesFuncion[ContadorArrayFuncion] = NodoInstruccionesFuncion;	
	
	ListaInstruccionesFuncion();	
	
	PrincipalParea("Simbolo_Llave_Cierre");
	
	var Sintaxis6 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	NodoFuncionVoid.ArrayNodos.push(Sintaxis4);	
	NodoFuncionVoid.ArrayNodos.push(Sintaxis5);
	NodoFuncionVoid.ArrayNodos.push(ArregloInstruccionesFuncion[ContadorArrayFuncion]);
	NodoFuncionVoid.ArrayNodos.push(Sintaxis6);	
	
	ContadorArrayFuncion--;
	
	return NodoFuncionVoid;
	
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
	
	} else  {
		
		// Vacios Epsilon
		
	}			
	
}

// Parametros Sintaxis
function ParametroSintaxis() {
	
	// Estructura Sintatica
	var NodoTipoDeDato = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;
	
	var Tipo = TipoDeDatos();

	NodoTipoDeDato.ArrayNodos.push(Tipo);
	
	NodoListaParametros.ArrayNodos.push(NodoTipoDeDato);

	AgregarValor = true;
	PrincipalParea("Identificador");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	NodoListaParametros.ArrayNodos.push(Sintaxis1);
	
	ListaParametros();
	
}

// Lista De Parametros
function ListaParametros() {
	
	// Verificar Si Hay Coma
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		// Lista De Declaraciones
		ListaParametrosSintaxis();
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Lista De Parametros Sintaxis
function ListaParametrosSintaxis() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Coma");

	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ",");
	VariablesGlobales.ContadorNodos++;

	NodoListaParametros.ArrayNodos.push(Sintaxis1);	
	
	var NodoTipoDeDato = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_De_Dato");
	VariablesGlobales.ContadorNodos++;
	
	var Tipo = TipoDeDatos();

	NodoTipoDeDato.ArrayNodos.push(Tipo);
	
	NodoListaParametros.ArrayNodos.push(NodoTipoDeDato);

	AgregarValor  = true;
	PrincipalParea("Identificador");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	NodoListaParametros.ArrayNodos.push(Sintaxis2);
	
	ListaParametros();	
	
}

// Funcion Main
function FuncionMain() {
	
	// Estructura Sintactica
	var NodoFuncionMain = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion_Main");
	VariablesGlobales.ContadorNodos++;	
		
	PrincipalParea("Palabra_Reservada_static");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "static");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Palabra_Reservada_void");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "void");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Palabra_Reservada_main");

	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "main");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Parentesis_Apertura");
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Palabra_Reservada_String");
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "String");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Corchete_Apertura");
	
	var Sintaxis6 = new NodoArbol(VariablesGlobales.ContadorNodos, "[");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Corchete_Cierre");
	
	var Sintaxis7 = new NodoArbol(VariablesGlobales.ContadorNodos, "]");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Palabra_Reservada_args");
	
	var Sintaxis8 = new NodoArbol(VariablesGlobales.ContadorNodos, "args");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Parentesis_Cierre");

	var Sintaxis9 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Llave_Apertura"); 
	
	var Sintaxis10 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;
	
	NodoInstruccionesFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Funcion");
	VariablesGlobales.ContadorNodos++;
	
	// Arreglo De Instrucciones Clase 
	ContadorArrayFuncion++;
	
	ArregloInstruccionesFuncion[ContadorArrayFuncion] = NodoInstruccionesFuncion;	
	
	ListaInstruccionesFuncion();	
	
	PrincipalParea("Simbolo_Llave_Cierre");	
	
	var Sintaxis11 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;	

	NodoFuncionMain.ArrayNodos.push(Sintaxis1);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis2);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis3);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis4);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis5);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis6);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis7);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis8);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis9);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis10);	
	NodoFuncionMain.ArrayNodos.push(ArregloInstruccionesFuncion[ContadorArrayFuncion]);	
	NodoFuncionMain.ArrayNodos.push(Sintaxis11);	
	
	ContadorArrayFuncion--;	
	
	return NodoFuncionMain;
	
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
		
		if(TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
			
			// Vacios / Epsilon	
			
		} else {
			
			// Instruccion
			InstruccionFuncion(); 
			
			// Instrucciones Iniciales
			ListaInstruccionesFuncion();	
			
		}

	}
	
}

// Instrucciones Funcion 
function InstruccionFuncion() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_System") {
		
		// Print
		var NodoPrint = Print();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoPrint);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_if") {
		
		// If
		var NodoIf = If();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoIf);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_for") {
		
		// For
		var NodoFor = For();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoFor);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_do") {
		
		// Do While
		var NodoDoWhile = DoWhile();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoDoWhile);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_while") {
		
		// While
		var NodoWhile = While();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoWhile);
		
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
		var NodoDeclaracionDeVaraibles = DeclaracionVariables();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoDeclaracionDeVaraibles);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		var NodoComentario = Comentarios();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoComentario);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Identificador") {
		
		// Asignacion
		var NodoAsignacion = Asignacion();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoAsignacion);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_return") {
		
		// Sentencia Return
		var NodoReturn = Return();
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoReturn);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_public") {
		
		// Funciones
		var NodoFuncionAnidada = FuncionAnidada(); 
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoFuncionAnidada);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Fin_De_Cadena") {  
	
		// Vacios / Epsilon	
	
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Una Funcion, Tipo De Ciclo, Asignacion, Declaracion De Variables, Comentarios, If, Print O Un Retorno");
		
		ArregloInstruccionesFuncion[ContadorArrayFuncion].ArrayNodos.push(NodoError);
		
		Recuperacion = true;
	
	}
	
}

// Print
function Print(): any {
	
	// Estructura Sintactica
	var NodoPrint = new NodoArbol(VariablesGlobales.ContadorNodos, "Print");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Palabra_Reservada_System");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "System");
	VariablesGlobales.ContadorNodos++; 
	
	PrincipalParea("Simbolo_Punto");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ".");
	VariablesGlobales.ContadorNodos++; 
	
	PrincipalParea("Palabra_Reservada_out");
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "out");
	VariablesGlobales.ContadorNodos++; 
	
	PrincipalParea("Simbolo_Punto");
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, ".");
	VariablesGlobales.ContadorNodos++; 
	
	var NodoTipoPrint = TipoPrint();
	
	PrincipalParea("Simbolo_Parentesis_Apertura");
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++; 
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;		
	
	Expr();
	
	PrincipalParea("Simbolo_Parentesis_Cierre");
	
	var Sintaxis6 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++; 
	
	PrincipalParea("Simbolo_PuntoYComa");
	
	var Sintaxis7 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++; 
	
	NodoPrint.ArrayNodos.push(Sintaxis1);
	NodoPrint.ArrayNodos.push(Sintaxis2);
	NodoPrint.ArrayNodos.push(Sintaxis3);
	NodoPrint.ArrayNodos.push(Sintaxis4);
	NodoPrint.ArrayNodos.push(NodoTipoPrint);
	NodoPrint.ArrayNodos.push(Sintaxis5);
	NodoPrint.ArrayNodos.push(NodoExpresion);
	NodoPrint.ArrayNodos.push(Sintaxis6);
	NodoPrint.ArrayNodos.push(Sintaxis7);
	
	return NodoPrint;
	
}

// Tipo Print
function TipoPrint(): any {
	
	// Verificar Tipo De Print
	if(TokenActual.GetTipo() == "Palabra_Reservada_println") {
		
		PrincipalParea("Palabra_Reservada_println");
		
		var NodoTipoPrint = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Print");
		VariablesGlobales.ContadorNodos++; 
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "println");
		VariablesGlobales.ContadorNodos++; 
		
		NodoTipoPrint.ArrayNodos.push(Sintaxis1);
		
		return NodoTipoPrint;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_print") {
		
		PrincipalParea("Palabra_Reservada_print");	
		
		var NodoTipoPrint = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Print");
		VariablesGlobales.ContadorNodos++; 
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "print");
		VariablesGlobales.ContadorNodos++; 
		
		NodoTipoPrint.ArrayNodos.push(Sintaxis1);
		
		return NodoTipoPrint;
		
	} else {
		
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("La Palabra print O println");
		//Recuperacion = true;
		
		return NodoError;
		
	}
	
}

// If 
function If(): any {
	
	// Estructura Sintactica	
	if(EsDoWhile && !Recuperacion) { Recuperacion = true; }
	
	var NodoIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_If");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Palabra_Reservada_if");	

	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "if");
	VariablesGlobales.ContadorNodos++;		
	
	PrincipalParea("Simbolo_Parentesis_Apertura");
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;	
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoIf.ArrayNodos.push(Sintaxis1);
	NodoIf.ArrayNodos.push(Sintaxis2);
	NodoIf.ArrayNodos.push(NodoExpresion);
	
	PrincipalParea("Simbolo_Parentesis_Cierre");
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Llave_Apertura");	
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;
	
	// Lista De Instruciones CiclosIf
	NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
	VariablesGlobales.ContadorNodos++;
	
	ContadorArrayCiclosIf++;
	
	ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf] = NodoInstruccionesCiclosIf;
	
	ListaInstruccionesCiclosIf();
	
	PrincipalParea("Simbolo_Llave_Cierre");	
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	NodoIf.ArrayNodos.push(Sintaxis3);
	NodoIf.ArrayNodos.push(Sintaxis4);
	NodoIf.ArrayNodos.push(ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf]);
	
	ContadorArrayCiclosIf--;
	
	ElseIf = false;
	var NodoElse = Else();		
	
	NodoIf.ArrayNodos.push(Sintaxis5);
	
	if(NodoElse != null) {
		
		NodoIf.ArrayNodos.push(NodoElse);
		
	}	
		
	return NodoIf;

}

// Else 
function Else(): any {
	
	if(TokenActual.GetTipo() == "Palabra_Reservada_else") {
		
		// Estructura Sintactica
		PrincipalParea("Palabra_Reservada_else");
		
		var NodoTipoElse = TipoElse();
		
		return NodoTipoElse;
		
	} else {
		
		// Vacios / Epsilon
		return null;
		
	}
	
}

// Tipo De Else 
function TipoElse(): any {
	
	// Verificar Si Es Else If O Else
	if(TokenActual.GetTipo() == "Simbolo_Llave_Apertura") {
		
		// Estructura Sintactica
		var NodoTipoElse = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Else");
		VariablesGlobales.ContadorNodos++;
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "else");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_Llave_Apertura");

		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
		VariablesGlobales.ContadorNodos++;	

		// Lista De Instruciones CiclosIf
		NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
		VariablesGlobales.ContadorNodos++;
		
		ContadorArrayCiclosIf++;
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf] = NodoInstruccionesCiclosIf;
		
		ListaInstruccionesCiclosIf();
		
		PrincipalParea("Simbolo_Llave_Cierre");
		
		var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
		VariablesGlobales.ContadorNodos++;
		
		NodoTipoElse.ArrayNodos.push(Sintaxis1);
		NodoTipoElse.ArrayNodos.push(Sintaxis2);
		NodoTipoElse.ArrayNodos.push(ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf]);
		NodoTipoElse.ArrayNodos.push(Sintaxis3);
		
		ContadorArrayCiclosIf--;
		
		return NodoTipoElse;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_if") {
		
		// Estructura Sintactica
		ElseIf = true;
		
		var NodoTipoElse = new NodoArbol(VariablesGlobales.ContadorNodos, "Tipo_Else");
		VariablesGlobales.ContadorNodos++;
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "else");
		VariablesGlobales.ContadorNodos++;
		
		var NodoElseIf = If();	

		NodoTipoElse.ArrayNodos.push(Sintaxis1);
		NodoTipoElse.ArrayNodos.push(NodoElseIf);
		
		return NodoTipoElse;		
		
	} else {
		
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("La Palabra if O Llave De Apertura");
		//Recuperacion = true;
		
		return NodoError;
		
	}
	
}

// For 
function For(): any {
	
	// Estructura Sintactica
	if(EsDoWhile && !Recuperacion) { Recuperacion = true; }
	
	var NodoFor = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_For");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Palabra_Reservada_for");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "for");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Simbolo_Parentesis_Apertura");	
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;	
	
	var NodoDeclaracion = DeclaracionFor();
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoFor.ArrayNodos.push(Sintaxis1);
	NodoFor.ArrayNodos.push(Sintaxis2);
	NodoFor.ArrayNodos.push(NodoDeclaracion);
	NodoFor.ArrayNodos.push(NodoExpresion);
	
	PrincipalParea("Simbolo_PuntoYComa");	
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++;	
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoFor.ArrayNodos.push(Sintaxis3);
	NodoFor.ArrayNodos.push(NodoExpresion);
	
	PrincipalParea("Simbolo_Parentesis_Cierre");	
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Simbolo_Llave_Apertura");	
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;	
	
	NodoFor.ArrayNodos.push(Sintaxis4);
	NodoFor.ArrayNodos.push(Sintaxis5);
	
	// Lista De Instruciones CiclosIf
	NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
	VariablesGlobales.ContadorNodos++;
	
	ContadorArrayCiclosIf++;
	
	ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf] = NodoInstruccionesCiclosIf;
	
	ListaInstruccionesCiclosIf();
	
	PrincipalParea("Simbolo_Llave_Cierre");		
	
	var Sintaxis6 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;	
	
	NodoFor.ArrayNodos.push(ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf]);
	NodoFor.ArrayNodos.push(Sintaxis6);
	
	ContadorArrayCiclosIf--;
	
	return NodoFor;
	
}

// Declaracion For
function DeclaracionFor(): any {
	
	// Estructura Sintactica
	var NodoDeclaracionFor = new NodoArbol(VariablesGlobales.ContadorNodos, "Declaracion_For");
	VariablesGlobales.ContadorNodos++;
	
	var NodoTipoDeDato = TipoDeDatos();	
	
	AgregarValor = true;
	PrincipalParea("Identificador");	
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	NodoListaDeDeclaracionesFor = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones_For");
	VariablesGlobales.ContadorNodos++;
	
	NodoListaDeDeclaracionesFor.ArrayNodos.push(Sintaxis1);
	
	AsignacionDeclaracionFor();
	ListaDeDeclaracionesFor();
	
	PrincipalParea("Simbolo_PuntoYComa");

	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++;	
	
	NodoDeclaracionFor.ArrayNodos.push(NodoTipoDeDato);
	NodoDeclaracionFor.ArrayNodos.push(NodoListaDeDeclaracionesFor);
	NodoDeclaracionFor.ArrayNodos.push(Sintaxis2);
	
	return NodoDeclaracionFor;
	
}

// Lista De Declaraciones
function ListaDeDeclaracionesFor() {
	
	// Verificar Si Hay Coma
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		// Lista De Declaraciones
		ListaDeDeclaracionesSintaxisFor();
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Lista De Declaraciones Sintaxis
function ListaDeDeclaracionesSintaxisFor() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Coma");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ",");
	VariablesGlobales.ContadorNodos++;

	NodoListaDeDeclaracionesFor.ArrayNodos.push(Sintaxis1);
	
	AgregarValor = true;
	PrincipalParea("Identificador");	
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
	VariablesGlobales.ContadorNodos++;
	
	NodoListaDeDeclaracionesFor.ArrayNodos.push(Sintaxis2);
	
	AsignacionDeclaracionFor();
	ListaDeDeclaracionesFor();
	
}

// Asingacion De Declaraciones For
function AsignacionDeclaracionFor() {
	
	// Verificar Si Hay Signo Igual
	if(TokenActual.GetTipo() == "Simbolo_Igual") {
		
		// Asignacion
		AsignacionDeclaracionSintaxisFor();
		
	} else {
		
		// Vacio / Epsilon
		
	}
	
}

// Asignacion Declaracion Sintaxis For
function AsignacionDeclaracionSintaxisFor() {
	
	// Estructura Sintactica
	PrincipalParea("Simbolo_Igual"); 
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "=");
	VariablesGlobales.ContadorNodos++;
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoListaDeDeclaracionesFor.ArrayNodos.push(Sintaxis1);
	NodoListaDeDeclaracionesFor.ArrayNodos.push(NodoExpresion);
	
}

// Do While 
function DoWhile(): any {
	
	// Estructura Sintactica 
	EsDoWhile = true;	
	
	if(EsDoWhile && !Recuperacion) { Recuperacion = true; }
	
	var NodoDoWhile = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_DoWhile");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Palabra_Reservada_do");	
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "do");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Llave_Apertura");	
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;
	
	// Lista De Instruciones CiclosIf
	NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
	VariablesGlobales.ContadorNodos++;
	
	ContadorArrayCiclosIf++;
	
	ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf] = NodoInstruccionesCiclosIf;
	
	ListaInstruccionesCiclosIf(); 
	
	PrincipalParea("Simbolo_Llave_Cierre");
	
	NodoDoWhile.ArrayNodos.push(Sintaxis1);
	NodoDoWhile.ArrayNodos.push(Sintaxis2);
	NodoDoWhile.ArrayNodos.push(ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf]);
	
	ContadorArrayCiclosIf--;	
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Palabra_Reservada_while");	

	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "while");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Parentesis_Apertura");  
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoDoWhile.ArrayNodos.push(Sintaxis3);
	NodoDoWhile.ArrayNodos.push(Sintaxis4);
	NodoDoWhile.ArrayNodos.push(Sintaxis5);
	NodoDoWhile.ArrayNodos.push(NodoExpresion);
	
	PrincipalParea("Simbolo_Parentesis_Cierre");	
	
	var Sintaxis6 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_PuntoYComa");	
	
	var Sintaxis7 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
	VariablesGlobales.ContadorNodos++;
	
	NodoDoWhile.ArrayNodos.push(Sintaxis6);
	NodoDoWhile.ArrayNodos.push(Sintaxis7);
	
	return NodoDoWhile;
	
}

// While 
function While(): any {
	
	// Estructura Sintactica
	if(EsDoWhile && !Recuperacion) { Recuperacion = true; }
	
	var NodoWhile = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_While");
	VariablesGlobales.ContadorNodos++;	
	
	PrincipalParea("Palabra_Reservada_while");
	
	var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "while");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Parentesis_Apertura");	
	
	var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
	VariablesGlobales.ContadorNodos++;
	
	NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
	VariablesGlobales.ContadorNodos++;
	
	Expr();
	
	NodoWhile.ArrayNodos.push(Sintaxis1);
	NodoWhile.ArrayNodos.push(Sintaxis2);
	NodoWhile.ArrayNodos.push(NodoExpresion);
	
	PrincipalParea("Simbolo_Parentesis_Cierre");	
	
	var Sintaxis3 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
	VariablesGlobales.ContadorNodos++;
	
	PrincipalParea("Simbolo_Llave_Apertura");
	
	var Sintaxis4 = new NodoArbol(VariablesGlobales.ContadorNodos, "{");
	VariablesGlobales.ContadorNodos++;	
	
	// Lista De Instruciones CiclosIf
	NodoInstruccionesCiclosIf = new NodoArbol(VariablesGlobales.ContadorNodos, "Lista_Instrucciones_CiclosIf");
	VariablesGlobales.ContadorNodos++;
	
	ContadorArrayCiclosIf++;
	
	ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf] = NodoInstruccionesCiclosIf;
	
	ListaInstruccionesCiclosIf();
	
	PrincipalParea("Simbolo_Llave_Cierre");		
	
	var Sintaxis5 = new NodoArbol(VariablesGlobales.ContadorNodos, "}");
	VariablesGlobales.ContadorNodos++;
	
	NodoWhile.ArrayNodos.push(Sintaxis3);
	NodoWhile.ArrayNodos.push(Sintaxis4);
	NodoWhile.ArrayNodos.push(ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf]);
	NodoWhile.ArrayNodos.push(Sintaxis5);
	
	ContadorArrayCiclosIf--;
	
	return NodoWhile;
	
}

// Return 
function Return(): any {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_return");	
	
	var NodoReturn = TipoReturn();
	
	return NodoReturn;
	
}

// Tipo Return 
function TipoReturn(): any {
	
	// Estructura Sintactica 
	if(TokenActual.GetTipo() == "Simbolo_PuntoYComa") {
		
		var NodoReturn = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_Return");
		VariablesGlobales.ContadorNodos++;	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "return");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;	
		
		NodoReturn.ArrayNodos.push(Sintaxis1);
		NodoReturn.ArrayNodos.push(Sintaxis2);
		
		return NodoReturn;		
		
	} else {
		
		var NodoReturn = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_Return");
		VariablesGlobales.ContadorNodos++;	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "return");
		VariablesGlobales.ContadorNodos++;	
		
		NodoExpresion = new NodoArbol(VariablesGlobales.ContadorNodos, "Expresion");
		VariablesGlobales.ContadorNodos++;
		
		Expr();
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;	
	
		NodoReturn.ArrayNodos.push(Sintaxis1);
		NodoReturn.ArrayNodos.push(NodoExpresion);		
		NodoReturn.ArrayNodos.push(Sintaxis2);

		return NodoReturn;
	
	}
	
}

// Funcion Anidada
function FuncionAnidada(): any {
	
	// Estructura Sintactica
	PrincipalParea("Palabra_Reservada_public");
	
	var NodoTipoFuncionAnidada = TipoFuncionAnidada();
	
	return NodoTipoFuncionAnidada
	
}

// Tipo Funcion Anidada
function TipoFuncionAnidada(): any {
	
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
		var NodoFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion");
		VariablesGlobales.ContadorNodos++;

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "public");
		VariablesGlobales.ContadorNodos++;			
		
		var Sintaxis3 = FuncionTipoDeDato();
		
		Recuperacion = true;
	
		NodoFuncion.ArrayNodos.push(Sintaxis1);
		NodoFuncion.ArrayNodos.push(Sintaxis3);
			
		return NodoFuncion;
	
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_void") {
		
		// Funcion Void 
		var NodoFuncion = new NodoArbol(VariablesGlobales.ContadorNodos, "Funcion");
		VariablesGlobales.ContadorNodos++;

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "public");
		VariablesGlobales.ContadorNodos++;			
		
		var Sintaxis2 = FuncionVoid();
		
		Recuperacion = true;
	
		NodoFuncion.ArrayNodos.push(Sintaxis1);
		NodoFuncion.ArrayNodos.push(Sintaxis2);
			
		return NodoFuncion;
		
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("La Palabra void O Un Tipo De Dato");
		//Recuperacion = true;
		
		return NodoError;
		
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
		
		if(TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
			
			// Vacios / Epsilon	
			
		} else {
			
			// Instruccion
			InstruccionCiclosIf(); 
		
			// Instrucciones Iniciales
			ListaInstruccionesCiclosIf();	
			
		}

	}
	
}

// Instrucciones Funcion 
function InstruccionCiclosIf() {
	
	// Verificar Tipo Instruccion
	if(TokenActual.GetTipo() == "Palabra_Reservada_System") {
		
		// Print
		var NodoPrint = Print();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoPrint);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_if") {
		
		// If
		var NodoIf = If();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoIf);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_for") {
		
		// For
		var NodoFor = For();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoFor);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_do") {
		
		// Do While
		var NodoDoWhile = DoWhile();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoDoWhile);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_while") {
		
		// While
		var NodoWhile = While();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoWhile);
		
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
		var NodoDeclaracionDeVaraibles = DeclaracionVariables();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoDeclaracionDeVaraibles);
		
		Recuperacion = true; 
				
	} else if(TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
		
		// Comentarios Unilinea O Multilinea
		var NodoComentarios = Comentarios();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoComentarios);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Identificador") {
		
		// Asignacion
		var NodoAsignacion = Asignacion();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoAsignacion);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_return") {
		
		// Return
		var NodoReturn = Return();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoReturn);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_break" || TokenActual.GetTipo() == "Palabra_Reservada_continue") {
		
		// Sentencias Ciclos
		var NodoSenteciasCiclos = SenteciasCiclos();
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoSenteciasCiclos);
		
		Recuperacion = true;
		
	} else if(TokenActual.GetTipo() == "Fin_De_Cadena") {  
	
		// Vacios / Epsilon	
	
	} else {
		
		// Errores Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Un Tipo De Ciclo, Asignacion, Declaracion De Variables, Comentarios, If, Print, Retorno O Una Sentencia De Ciclos");
		
		ArregloInstruccionesCiclosIf[ContadorArrayCiclosIf].ArrayNodos.push(NodoError);
		
		Recuperacion = true;
	
	}
	
}

// Sentencias Ciclos
function SenteciasCiclos(): any {
	
	// Estructura Sintactica 
	if(TokenActual.GetTipo() == "Palabra_Reservada_break") {
		
		// Estructura Sintactica
		var NodoBreak = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_Break");
		VariablesGlobales.ContadorNodos++;	
		
		PrincipalParea("Palabra_Reservada_break");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "break");
		VariablesGlobales.ContadorNodos++;	
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;

		NodoBreak.ArrayNodos.push(Sintaxis1);
		NodoBreak.ArrayNodos.push(Sintaxis2);

		return NodoBreak;
				
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_continue") {
		
		// Estructura Sintactica
		var NodoContinue = new NodoArbol(VariablesGlobales.ContadorNodos, "Sentencia_Continue");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Palabra_Reservada_continue");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "continue");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Simbolo_PuntoYComa");
		
		var Sintaxis2 = new NodoArbol(VariablesGlobales.ContadorNodos, ";");
		VariablesGlobales.ContadorNodos++;
		
		NodoContinue.ArrayNodos.push(Sintaxis1);
		NodoContinue.ArrayNodos.push(Sintaxis2);
				
		return NodoContinue;
		
	} else {
		
		// Estructura Sintactica 
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		PrincipalParea("Palabra break O continue");
		// Recuperacion = true;
		
		return NodoError;
		
	}
	
}

// Expresiones
function Expr() {
	
	// Estructura Sintactica 
	ExprR();
	SumaResta();
	
}

function ExprR() {
	
	// Estructura Sintactica
	Valores();
	MultiplicacionDivision();
	
}

function SumaResta() {
	
	// Verificar Si Es Mas O Menos
	if(TokenActual.GetTipo() == "Simbolo_Mas") {
		
		PrincipalParea("Simbolo_Mas");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "+");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	

		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_Menos") {
		
		PrincipalParea("Simbolo_Menos");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "-");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_Or") { 

		PrincipalParea("Simbolo_Or");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "||");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_Xor") { 

		PrincipalParea("Simbolo_Xor");	

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "^");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_MayorIgualQue") { 

		PrincipalParea("Simbolo_MayorIgualQue");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ">=");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_MenorIgualQue") { 

		PrincipalParea("Simbolo_MenorIgualQue");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "<=");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_MenorQue") { 

		PrincipalParea("Simbolo_MenorQue");	

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "<");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_MayorQue") { 

		PrincipalParea("Simbolo_MayorQue");	

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ">");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_DobleIgual") { 

		PrincipalParea("Simbolo_DobleIgual");	

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "==");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else if(TokenActual.GetTipo() == "Simbolo_Diferente") { 

		PrincipalParea("Simbolo_Diferente");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "!=");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
		ExprR();
		SumaResta();
		
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

function MultiplicacionDivision() {
	
	// Verficar Si Es Multiplicacion O Division
	if(TokenActual.GetTipo() == "Simbolo_Por") {
		
		PrincipalParea("Simbolo_Por");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "*");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);		
		
		Valores();
		MultiplicacionDivision();
		
	} else if(TokenActual.GetTipo() == "Simbolo_Dividido") {
		
		PrincipalParea("Simbolo_Dividido");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "/");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		Valores();
		MultiplicacionDivision();
			
	} else if(TokenActual.GetTipo() == "Simbolo_And") {
		
		PrincipalParea("Simbolo_And");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "&&");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		Valores();
		MultiplicacionDivision();
			
	} else {
		
		// Vacios / Epsilon
		
	}
	
}

function Valores() {
	
	// Verificar Tipo De Valor
	if(TokenActual.GetTipo() == "Numero") {
		
		AgregarValor = true;
		PrincipalParea("Numero");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);		
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_true") {
		
		PrincipalParea("Palabra_Reservada_true");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "true");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		
	} else if(TokenActual.GetTipo() == "Palabra_Reservada_false") {
		
		PrincipalParea("Palabra_Reservada_false");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "false");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
	} else if(TokenActual.GetTipo() == "Identificador") {
		
		AgregarValor = true;
		PrincipalParea("Identificador");
			
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		ValoresIdentificador();
		
	} else if(TokenActual.GetTipo() == "Cadena_De_Texto") {
		
		AgregarValor = true;
		PrincipalParea("Cadena_De_Texto");		
			
		var ArrayValores = ValorString.split("\"");
		
		ValorString = "\\\"" + ArrayValores[1] + "\\\"";
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		
	} else if(TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
		
		PrincipalParea("Simbolo_Parentesis_Apertura");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		Expr();
		
		PrincipalParea("Simbolo_Parentesis_Cierre");

		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);	
		
	} else if(TokenActual.GetTipo() == "Simbolo_Menos") { 
	
		PrincipalParea("Simbolo_Menos");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "-");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		Expr();

	} else if(TokenActual.GetTipo() == "Simbolo_Negacion") { 
	
		PrincipalParea("Simbolo_Negacion");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "!");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		Expr();

	} else {
		
		// Erroers Sintacticos
		var NodoError = new NodoArbol(VariablesGlobales.ContadorNodos, "Error_Sintactico");
		VariablesGlobales.ContadorNodos++;
		
		ErroresSintactico("Algun Tipo De Valor");
		//Recuperacion = true;
		
		return NodoError;
		
	}
	
}

function ValoresIdentificador() {
	
	// Verificar Tipo
	if(TokenActual.GetTipo() == "Simbolo_Punto") {
		
		PrincipalParea("Simbolo_Punto");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ".");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);		
		
		AgregarValor = true;
		PrincipalParea("Identificador");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ValorString);
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		PrincipalParea("Simbolo_Parentesis_Apertura");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		ValorFuncion();
		
		PrincipalParea("Simbolo_Parentesis_Cierre");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
	} else if(TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
		
		PrincipalParea("Simbolo_Parentesis_Apertura");	
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "(");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
		ValorFuncion();
		
		PrincipalParea("Simbolo_Parentesis_Cierre");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ")");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
	} else if(TokenActual.GetTipo() == "Simbolo_Mas") {
		
		if(IndexToken < ArrayTokens.length - 1) {
			
			if(ArrayTokens[IndexToken + 1].GetTipo() == "Simbolo_Mas") {
				
				PrincipalParea("Simbolo_Mas");	
				
				var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "+");
				VariablesGlobales.ContadorNodos++;
				
				NodoExpresion.ArrayNodos.push(Sintaxis1);
				
				PrincipalParea("Simbolo_Mas");	

				var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "+");
				VariablesGlobales.ContadorNodos++;
				
				NodoExpresion.ArrayNodos.push(Sintaxis1);				
				
			}
			
		}
		
	} else if(TokenActual.GetTipo() == "Simbolo_Menos") {
		
		if(IndexToken < ArrayTokens.length - 1) {
			
			if(ArrayTokens[IndexToken + 1].GetTipo() == "Simbolo_Menos") {
				
				PrincipalParea("Simbolo_Menos");
	
				var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "-");
				VariablesGlobales.ContadorNodos++;
				
				NodoExpresion.ArrayNodos.push(Sintaxis1);
				
				PrincipalParea("Simbolo_Menos");	
				
				var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, "-");
				VariablesGlobales.ContadorNodos++;
				
				NodoExpresion.ArrayNodos.push(Sintaxis1);				
				
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
		
	} else {
		
		// Vacios / Epsilon
		
	}
	 
}

function ListaDeValores() {
	
	// Verficar Si Hay Coma 
	if(TokenActual.GetTipo() == "Simbolo_Coma") {
		
		PrincipalParea("Simbolo_Coma");
		
		var Sintaxis1 = new NodoArbol(VariablesGlobales.ContadorNodos, ",");
		VariablesGlobales.ContadorNodos++;
		
		NodoExpresion.ArrayNodos.push(Sintaxis1);
		
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
			if(AgregarValor) {
				
				ValorString = TokenActual.GetLexema();
				AgregarValor = false;
				
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
			
			//ArrayErrores.push(new NuevoError(ContadorErrores, TokenActual.GetLinea(), TokenActual.GetColumna(), "Error_Sintactico", TokenActual.GetLexema(), "Se Esperaba " + TipoToken + " Y Se Encontro: " + TokenActual.GetTipo()));
			
			ContadorErrores++;			
			ErrorSintactico = true;
            Recuperacion = false;
					
			
			// Recuperacion De Error
			if(ErrorSintactico) {
				
				// Recuperacion Del Error
				while(ErrorSintactico && IndexToken < ArrayTokens.length - 1) {
					
					
					// Verificar Si Ya Es ;
					if(TokenActual.GetTipo() != "Simbolo_PuntoYComa" && TokenActual.GetTipo() != "Simbolo_Llave_Cierre") {
						
						// Avanzo Indice Token
						IndexToken++;
						
						// Recuperar Token Actual
						TokenActual = ArrayTokens[IndexToken]
						
					}
							
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
		
		// Seguro Anti Bucle
		if(TokenActual.GetTipo() == "Fin_De_Cadena" || SeguroContador >= 50) {
			
			Recuperacion = true;
			SeguroContador = -1;
			
		}		
		
		// Incremento
		SeguroContador++;
		
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