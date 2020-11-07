/*
 *
 *  	      Gramatica Proyecto No.2 
 *    Organización De Lenguajes Y Compiladores No.1
 *                  JavaScript
 *        Sergio Alexander Echigoyen Gómez
 *					201801628 
 *   Gramatica Ascendente Recursiva Por La Izquierda
 *
 */

%{

	const { Print } = require('../build/Print')
	const { Primitivo } = require('../build/Primitivo')
	const { Matematicos, Operaciones } = require('../build/Matematicos')
	const { Logicos, Operadores } = require('../build/Logicos')
	const { Bloque } = require('../build/Bloque')
	const { If } = require('../build/If')
	const { For } = require('../build/For')
	const { DoWhile } = require('../build/DoWhile')
	const { While } = require('../build/While')
	const { Subdeclaracion } = require('../build/Subdeclaracion')
	const { Declaracion } = require('../build/Declaracion')
	const { DeclaracionFor } = require('../build/DeclaracionFor')
	const { Clase } = require('../build/Clase')
	const { Interfaz } = require('../build/Interfaz') 
	const { Comentarios } = require('../build/Comentarios') 
	const { Funciones } = require('../build/Funciones') 
	const { MetodoAsignacion } = require('../build/MetodoAsignacion') 
	const { MetodoDeclaracion } = require('../build/MetodoDeclaracion')
	const { Parametros } = require('../build/Parametros') 
	const { SentenciasCiclos, Sentencias } = require('../build/SentenciasCiclos')
	const { DeclaracionFunciones } = require('../build/DeclaracionFunciones')
	const { Asignacion } = require('../build/Asignacion')
	const { IncrementoDecremento } = require('../build/IncrementoDecremento') 
	const { Parentesis } = require('../build/Parentesis')
	const { Tokens } = require('../build/Tokens')
	const { Errores } = require('../build/Errores')
	const { Arbol } = require('../build/Arbol')
	
%}


/*                          Analizador Lexico                                     */

%lex

%options case-sensitive

// Expresiones Regulares 
Numero_Entero [0-9]+\b
Numero_Decimal {Numero_Entero}("."{Numero_Entero})?\b
Cadena_String (\"([^"])*\") | (\'([^'])*\')
Boolean_Valores "true" | "false"
Boolean_Name "Boolean" | "boolean"
String_Name "String" | "string" 
System_Print "System.out.println" | "System.out.print"
Identificador ([a-zA-Z_])[a-zA-Z0-9_ñÑ]*

%%


// Analisis Lexico

// Espacios En Blanco
\s+							//Espacio en Blanco
							
// Comentarios 
[/][/].*            					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Comentario_UniLinea", yytext); return 'Comentario_UniLinea'; }
[/][*][^*]*[*]+([^/\*][^*]*[*]+)*[/]   	{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Comentario_MultiLinea", yytext); return 'Comentario_MultiLinea'; }

// Instrucciones
{System_Print}			    { $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'Sout'; }

// Simbolos 			  
"{"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Llave_Apertura", yytext); return '{'; }
"}"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Llave_Cierre", yytext); return '}'; }
"("							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Parentesis_Apertura", yytext); return '('; }
")"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Parentesis_Cierre", yytext); return ')'; }
"["							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Corchete_Apertura", yytext); return '['; }
"]"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Corchete_Apertura", yytext); return ']'; }	
","							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Coma", yytext); return ','; }
"."							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Punto", yytext); return '.'; }
";"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_PuntoYComa", yytext); return ';'; }
":"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_DosPuntos", yytext); return ':'; }

// Expresiones Relacionales
">="						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_MayorIgual", yytext); return '>='; }
"<="						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_MenorIgual", yytext); return '<='; }
"=="						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_IgualA", yytext); return '=='; }
"!="						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_DiferenteDe", yytext); return '!='; }
"<"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Menor", yytext); return '<'; }
">"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Mayor", yytext); return '>'; }
"="							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Igual", yytext); return '='; }

// Expresiones Logicas
"&&"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_And", yytext); return '&&'; }
"||"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Or", yytext); return '||'; }
"!"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Negacion", yytext); return '!'; }
"^"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Xor", yytext); return '^'; }

// Expresiones Aritmeticas
"+"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Mas", yytext); return '+'; }
"-"						    { $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Menos", yytext); return '-'; }
"*"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Por", yytext); return '*'; }
"/"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Dividido", yytext); return '/'; }

// Palabras Reservadas 
"public"					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'public'; }
"static"					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'static'; }
"class"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'class'; }
"interface"					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'interface'; }
"void"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'void'; }
"for"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'for'; }
"do"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'do'; }
"while"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'while'; }
"if"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'if'; }
"else"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'else'; }
"break"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'break'; }
"continue"					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'continue'; }
"return"					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'return'; }
"main"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'main'; }
"args"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'args'; }

// Tipos De Datos
"int"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'int'; }
{Boolean_Name}				{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'Boolean'; }
"double"					{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'double'; }
{String_Name}				{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'String'; }
"char"						{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'char'; }

// Valores Tipos De Datos
{Boolean_Valores}			{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Palabra_Reservada", yytext); return 'ValoresBoolean'; }
{Cadena_String}				{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Cadena_De_Texto", yytext); return 'ValoresString'; }
{Numero_Decimal}			{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Numero", yytext); return 'ValoresDouble'; }
{Identificador}				{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Identificador", yytext); return 'Identificador'; }

//Fin de Cadena
"#"							return 'Fin_De_Cadena'
<<EOF>>		        		return 'EOF'

// Errores Lexicos							
.							{ $$ = new Errores(yylloc.first_line, yylloc.first_column, "Error Lexico", yytext); } 		

/lex

// Precendencia De Operadores
%left '!'
%left '||'
%left '&&'
%left '!=','=='
%left '>=', '<=', '>','<' 
%left '+', '-'
%left '*', '/'
%left '^'

/*                          Analizador Sintactico                                    */

%start InicioAnalisis

%%

// Inicio Analisis

InicioAnalisis  : Instrucciones		  EOF	{ $$ = new Arbol("Raiz"); $$.AgregarArrayNodo($1.B); return [$$, $1.A]; }
				|                			{ return []; }						
				;

// Instrucciones Principales

Instrucciones   : Instrucciones Instruccion { $1.A.push($2.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Instrucciones_Iniciales") };  $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); }
                | Instruccion 				{ $$ = { A: [$1.A], B: new Arbol("Lista_De_Instrucciones_Iniciales") }; $$.B.AgregarArrayNodo($1.B); } 
		        ;
				
Instruccion     : Clase					{ $$ = { A: $1.A, B: $1.B }; } 
				| Interfaz				{ $$ = { A: $1.A, B: $1.B }; }
				| Declaracion			{ $$ = { A: $1.A, B: $1.B }; }
				| Comentarios			{ $$ = { A: $1.A, B: $1.B }; }
				| ErroresSintacticos	{ $$ = { A: $1.A, B: $1.B }; } 	
				;	

// Lista De Instrucciones

// Clases

InstruccionesClases		: InstruccionesClases InstruccionClases	{ $1.A.push($2.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Instrucciones_Clase") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); }
						| InstruccionClases						{ $$ = { A: [$1.A], B: new Arbol("Lista_De_Instrucciones_Clase") }; $$.B.AgregarArrayNodo($1.B); }
						; 	
						
InstruccionClases	: Declaracion			{ $$ = { A: $1.A, B: $1.B }; }
					| Clase					{ $$ = { A: $1.A, B: $1.B }; }
					| Comentarios			{ $$ = { A: $1.A, B: $1.B }; }
					| Funciones				{ $$ = { A: $1.A, B: $1.B }; }
					| Asignacion			{ $$ = { A: $1.A, B: $1.B }; }		
					| ErroresSintacticos	{ $$ = { A: $1.A, B: $1.B }; }
					;					

// Interfaces

InstruccionesInterfaz	: InstruccionesInterfaz InstruccionInterfaz	{ $1.A.push($2.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Instrucciones_Interfaz") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); } 
						| InstruccionInterfaz						{ $$ = { A: [$1.A], B: new Arbol("Lista_De_Instrucciones_Interfaz") }; $$.B.AgregarArrayNodo($1.B); }
						; 						
				
InstruccionInterfaz		: DeclaracionFunciones	{ $$ = { A: $1.A, B: $1.B }; }
						| Comentarios			{ $$ = { A: $1.A, B: $1.B }; }
						| ErroresSintacticos	{ $$ = { A: $1.A, B: $1.B }; }
						;
						
// Funciones

InstruccionesFunciones	: InstruccionesFunciones InstruccionFunciones	{ $1.A.push($2.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Instrucciones_Funcion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); }
						| InstruccionFunciones							{ $$ = { A: [$1.A], B: new Arbol("Lista_De_Instrucciones_Funcion") }; $$.B.AgregarArrayNodo($1.B); }
						;		

InstruccionFunciones	: Print					{ $$ = { A: $1.A, B: $1.B }; }
						| If					{ $$ = { A: $1.A, B: $1.B }; } 
						| For        			{ $$ = { A: $1.A, B: $1.B }; } 
						| DoWhile 				{ $$ = { A: $1.A, B: $1.B }; }  
						| While					{ $$ = { A: $1.A, B: $1.B }; } 
						| Funciones				{ $$ = { A: $1.A, B: $1.B }; } 
						| Declaracion			{ $$ = { A: $1.A, B: $1.B }; } 
						| Comentarios			{ $$ = { A: $1.A, B: $1.B }; } 
						| Asignacion			{ $$ = { A: $1.A, B: $1.B }; } 
						| SentenciasCiclos		{ $$ = { A: $1.A, B: $1.B }; }
						| ErroresSintacticos	{ $$ = { A: $1.A, B: $1.B }; }          
						;
						
// Ciclos

InstruccionesCiclos	: InstruccionesCiclos InstruccionCiclos	{ $1.A.push($2.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Instrucciones_Ciclos") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); }
					| InstruccionCiclos						{ $$ = { A: [$1.A], B: new Arbol("Lista_De_Instrucciones_Ciclos") }; $$.B.AgregarArrayNodo($1.B); }
					;		

InstruccionCiclos	: Print					{ $$ = { A: $1.A, B: $1.B }; }
					| If					{ $$ = { A: $1.A, B: $1.B }; }
					| For        			{ $$ = { A: $1.A, B: $1.B }; } 
					| DoWhile 				{ $$ = { A: $1.A, B: $1.B }; }  
					| While					{ $$ = { A: $1.A, B: $1.B }; }
					| Declaracion			{ $$ = { A: $1.A, B: $1.B }; } 
					| Comentarios			{ $$ = { A: $1.A, B: $1.B }; } 
					| Asignacion			{ $$ = { A: $1.A, B: $1.B }; }
					| SentenciasCiclos		{ $$ = { A: $1.A, B: $1.B }; }
					| ErroresSintacticos	{ $$ = { A: $1.A, B: $1.B }; }          
					;		

// If

InstruccionesIf		: InstruccionesIf InstruccionIf		{ $1.A.push($2.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Instrucciones_If_Else") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); }
					| InstruccionIf						{ $$ = { A: [$1.A], B: new Arbol("Lista_De_Instrucciones_If_Else") }; $$.B.AgregarArrayNodo($1.B); }
					;

InstruccionIf		: Print					{ $$ = { A: $1.A, B: $1.B }; } 
					| If					{ $$ = { A: $1.A, B: $1.B }; }  
					| For        			{ $$ = { A: $1.A, B: $1.B }; } 
					| DoWhile 				{ $$ = { A: $1.A, B: $1.B }; } 
					| While					{ $$ = { A: $1.A, B: $1.B }; } 
					| Declaracion			{ $$ = { A: $1.A, B: $1.B }; }  
					| Comentarios			{ $$ = { A: $1.A, B: $1.B }; }  
					| Asignacion			{ $$ = { A: $1.A, B: $1.B }; } 
					| SentenciasCiclos		{ $$ = { A: $1.A, B: $1.B }; } 		
					| ErroresSintacticos	{ $$ = { A: $1.A, B: $1.B }; }          
					; 					
											
// Bloques

BloqueClases : '{' InstruccionesClases	'}'   		{ $$ = { A: new Bloque(@1.first_line, @1.first_column, $2.A), B: new Arbol("Bloque_Clase") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol("}")); }
			 | '{' '}'  	  			  	  		{ $$ = { A: new Bloque(@1.first_line, @1.first_column, []), B: new Arbol("Bloque_Clase") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo(new Arbol("}")); }
			 | ErroresSintacticos					{ $$ = { A: $1.A, B: $1.B }; } 
			 ;	

BloqueInterfaz	:'{' InstruccionesInterfaz '}'		{ $$ = { A: new Bloque(@1.first_line, @1.first_column, $2.A), B: new Arbol("Bloque_Interfaz") }; $$.B.AgregarArrayNodo(new Arbol("{"));  $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol("}")); }
				|'{' '}'							{ $$ = { A: new Bloque(@1.first_line, @1.first_column, []), B: new Arbol("Bloque_Interfaz") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo(new Arbol("}")); }
				| ErroresSintacticos				{ $$ = { A: $1.A, B: $1.B };  } 
				; 

BloqueFuncion	:'{' InstruccionesFunciones '}'		{ $$ = { A: new Bloque(@1.first_line, @1.first_column, $2.A), B: new Arbol("Bloque_Funcion") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol("}")); }
				|'{' '}'							{ $$ = { A: new Bloque(@1.first_line, @1.first_column, []), B: new Arbol("Bloque_Funcion") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo(new Arbol("}")); }
				| ErroresSintacticos				{ $$ = { A: $1.A, B: $1.B }; } 
				; 

BloqueCiclos	:'{' InstruccionesCiclos '}'		{ $$ = { A: new Bloque(@1.first_line, @1.first_column, $2.A), B: new Arbol("Bloque_Ciclos") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol("}")); }
				|'{' '}'							{ $$ = { A: new Bloque(@1.first_line, @1.first_column, []), B: new Arbol("Bloque_Ciclos") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo(new Arbol("}"));}
				| ErroresSintacticos				{ $$ = { A: $1.A, B: $1.B }; } 
				; 
				
BloqueIf		:'{' InstruccionesIf '}'			{ $$ = { A: new Bloque(@1.first_line, @1.first_column, $2.A), B: new Arbol("Bloque_If_Else") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol("}")); }
				|'{' '}'							{ $$ = { A: new Bloque(@1.first_line, @1.first_column, []), B: new Arbol("Bloque_If_Else") }; $$.B.AgregarArrayNodo(new Arbol("{")); $$.B.AgregarArrayNodo(new Arbol("}")); }
				| ErroresSintacticos				{ $$ = { A: $1.A, B: $1.B }; } 
				; 				

// Clases E Interfaces

Clase 	: 'public' 'class' 'Identificador' BloqueClases		{ $$ = { A: new Clase(@1.first_line, @1.first_column, $3, $4.A), B: new Arbol("Clase") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("class")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo($4.B); }
		;	

Interfaz	: 'public' 'interface' 'Identificador' BloqueInterfaz	{ $$ = { A: new Interfaz(@1.first_line, @1.first_column, $3, $4.A), B: new Arbol("Interfaz") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("interface")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo($4.B); }
			;		

// Metodos Y Funciones

Funciones	: 'public' Tipos 'Identificador' '('  ')' BloqueFuncion				  			{ $$ = { A: new Funciones(@1.first_line, @1.first_column, $2.A, $3, [], $6.A), B: new Arbol("Funcion_Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($6.B); }
			| 'public' 'void' 'Identificador' '('  ')' BloqueFuncion   			  			{ $$ = { A: new Funciones(@1.first_line, @1.first_column, $2, $3, [], $6.A), B: new Arbol("Funcion_Tipo_Void") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("void")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($6.B); } 
			| 'public' Tipos 'Identificador' '(' ListaParametros ')' BloqueFuncion			{ $$ = { A: new Funciones(@1.first_line, @1.first_column, $2.A, $3, $5.A, $7.A), B: new Arbol("Funcion_Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($7.B); }
			| 'public' 'void' 'Identificador' '(' ListaParametros ')' BloqueFuncion			{ $$ = { A: new Funciones(@1.first_line, @1.first_column, $2, $3, $5.A, $7.A), B: new Arbol("Funcion_Tipo_Void") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("void")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($7.B); } 
			| 'public' 'static' 'void' 'main' '(' 'String' '[' ']' 'args' ')' BloqueFuncion { $$ = { A: new Funciones(@1.first_line, @1.first_column, $2, $4, [], $11.A), B: new Arbol("Funcion_Main") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("static")); $$.B.AgregarArrayNodo(new Arbol("void")); $$.B.AgregarArrayNodo(new Arbol("main")); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol($6)); $$.B.AgregarArrayNodo(new Arbol("[")); $$.B.AgregarArrayNodo(new Arbol("]")); $$.B.AgregarArrayNodo(new Arbol("args")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($11.B); } 
			;
			
DeclaracionFunciones	: 'public' Tipos 'Identificador' '('  ')' ';'				  	{ $$ = { A: new DeclaracionFunciones(@1.first_line, @1.first_column, $2.A, $3, []), B: new Arbol("Declaracion_Funcion_Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); }
						| 'public' 'void' 'Identificador' '('  ')' ';'   			  	{ $$ = { A: new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, []), B: new Arbol("Declaracion_Funcion_Tipo_Void") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("void")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); } 
						| 'public' Tipos 'Identificador' '(' ListaParametros ')' ';'  	{ $$ = { A: new DeclaracionFunciones(@1.first_line, @1.first_column, $2.A, $3, $5.A), B: new Arbol("Declaracion_Funcion_Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); }
						| 'public' 'void' 'Identificador' '(' ListaParametros ')' ';'   { $$ = { A: new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, $5.A), B: new Arbol("Declaracion_Funcion_Tipo_Void") }; $$.B.AgregarArrayNodo(new Arbol("public")); $$.B.AgregarArrayNodo(new Arbol("void")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); } 
						;			
					
// Parametros	

ListaParametros	: ListaParametros ',' Parametro  { $1.A.push($3.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Parametros") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol(",")); $$.B.AgregarArrayNodo($3.B); }
				| Parametro						 { $$ = { A: [$1.A], B: $1.B }; }
				;
				
Parametro	: Tipos 'Identificador'	 { $$ = { A: new Parametros(@1.first_line, @1.first_column, $1.A, $2), B: new Arbol("Parametro") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol($2)); } 
			;
		
// Sentencias De Repetición

For		: 'for' '(' DeclaracionFor Expr ';' Expr ')' BloqueCiclos { $$ = { A: new For(@1.first_line, @1.first_column, $3.A, $4.A, $6.A, $8.A), B: new Arbol("Sentencia_For") }; $$.B.AgregarArrayNodo(new Arbol("for")); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo($4.B); $$.B.AgregarArrayNodo(new Arbol(";")); $$.B.AgregarArrayNodo($6.B); $$.B.AgregarArrayNodo(new Arbol(";")); $$.B.AgregarArrayNodo($8.B); }		
		;
		
While	: 'while' '(' Expr ')' BloqueCiclos { $$ = { A: new While(@1.first_line, @1.first_column, $3.A, $5.A), B: new Arbol("Sentencias_While") }; $$.B.AgregarArrayNodo(new Arbol("while")); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($5.B); }	
		;		
		
DoWhile : 'do' BloqueCiclos 'while' '(' Expr ')' ';' { $$ = { A: new DoWhile(@1.first_line, @1.first_column, $2.A, $5.A), B: new Arbol("Sentencias_DoWhile") }; $$.B.AgregarArrayNodo(new Arbol("do")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol("while")); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); }
		;		
		
// Sentencias De Control 

If      : 'if' '(' Expr ')' BloqueIf Else	{ $$ = { A: new If(@1.first_line, @1.first_column, $3.A, $5.A, $6.A), B: new Arbol("Sentencia_If") }; $$.B.AgregarArrayNodo(new Arbol("if")); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo($5.B); if($6.B != null) { $$.B.AgregarArrayNodo($6.B); } } 
		;
		
Else	: 'else' BloqueIf  	{ $$ = { A: $2.A, B: new Arbol("Else") }; $$.B.AgregarArrayNodo(new Arbol("else")); $$.B.AgregarArrayNodo($2.B); }
		| 'else' If        	{ $$ = { A: $2.A, B: new Arbol("Else_If") }; $$.B.AgregarArrayNodo(new Arbol("else")); $$.B.AgregarArrayNodo($2.B); }
		| 				   	{ $$ = { A: null, B: null }; }
		; 

// Sentencias Break, Continue Y Return

SentenciasCiclos	: 'break' ';'		{ $$ = { A: new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.BREAK, null), B: new Arbol("Sentencia_Break") }; $$.B.AgregarArrayNodo(new Arbol("break")); $$.B.AgregarArrayNodo(new Arbol(";")); }
					| 'continue' ';' 	{ $$ = { A: new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.CONTINUE, null), B: new Arbol("Sentencia_Continue") }; $$.B.AgregarArrayNodo(new Arbol("continue")); $$.B.AgregarArrayNodo(new Arbol(";")); }
					| 'return' ';'		{ $$ = { A: new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.RETURN, null), B: new Arbol("Sentencia_Return") }; $$.B.AgregarArrayNodo(new Arbol("return")); $$.B.AgregarArrayNodo(new Arbol(";")); }
					| 'return' Expr ';'	{ $$ = { A: new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.RETURN, $2.A), B: new Arbol("Sentencia_Return") }; $$.B.AgregarArrayNodo(new Arbol("return")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol(";")); }
					;
 
 // Expresiones
 
 Expr	: Expr '+' Expr     { $$ = { A: new Matematicos(@1.first_line, @1.first_column, $1.A, $3.A, Operaciones.SUMA), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("+")); $$.B.AgregarArrayNodo($3.B); }   
		| Expr '-' Expr     { $$ = { A: new Matematicos(@1.first_line, @1.first_column, $1.A, $3.A, Operaciones.RESTA), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("-")); $$.B.AgregarArrayNodo($3.B); }  
		| Expr '*' Expr     { $$ = { A: new Matematicos(@1.first_line, @1.first_column, $1.A, $3.A, Operaciones.MULTIPLICACION), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("*")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '/' Expr     { $$ = { A: new Matematicos(@1.first_line, @1.first_column, $1.A, $3.A, Operaciones.DIVISION), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("/")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '+''+'       { $$ = { A: new Matematicos(@1.first_line, @1.first_column, $1.A, new Primitivo(@1.first_line, @1.first_column, 1), Operaciones.INCREMENTO), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("+")); $$.B.AgregarArrayNodo(new Arbol("+")); }
		| Expr '-' '-'      { $$ = { A: new Matematicos(@1.first_line, @1.first_column, $1.A, new Primitivo(@1.first_line, @1.first_column, 1), Operaciones.DECREMENTO), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("-")); $$.B.AgregarArrayNodo(new Arbol("-")); } 
		| '-' Expr          { $$ = { A: new Matematicos(@1.first_line, @1.first_column, new Primitivo(@1.first_line, @1.first_column, 0), $2.A, Operaciones.NEGATIVO), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo(new Arbol("-")); $$.B.AgregarArrayNodo($2.B); }  
		| '!' Expr          { $$ = { A: new Logicos(@1.first_line, @1.first_column, $2.A, $2.A, Operadores.NOT), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo(new Arbol("!")); $$.B.AgregarArrayNodo($2.B); }
		| Expr '<=' Expr    { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.MENORIGUAL), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("<=")); $$.B.AgregarArrayNodo($3.B); }  
		| Expr '>=' Expr    { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.MAYORIGUAL), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol(">=")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '<' Expr     { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.MENOR), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("<")); $$.B.AgregarArrayNodo($3.B); } 
		| Expr '>' Expr     { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.MAYOR), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol(">")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '==' Expr    { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.IGUAL), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("==")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '!=' Expr    { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.DIFERENTE), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("!=")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '&&' Expr    { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.AND), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("&&")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '||' Expr    { $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.OR), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("||")); $$.B.AgregarArrayNodo($3.B); }
		| Expr '^' Expr    	{ $$ = { A: new Logicos(@1.first_line, @1.first_column, $1.A, $3.A, Operadores.XOR), B: new Arbol("Expresion") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol("^")); $$.B.AgregarArrayNodo($3.B); }
		| Valores           { $$ = { A: $1.A, B: new Arbol("Valor") }; $$.B.AgregarArrayNodo($1.B) }
		;		
 
 // Valores De Tipos De Datos
 
 Valores 	: '(' Expr ')'  												{ $$ = { A: new Parentesis(@1.first_line, @1.first_column, $2.A), B: new Arbol("Parentesis") }; $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol(")")); }
			| 'ValoresDouble' 												{ $$ = { A: new Primitivo(@1.first_line, @1.first_column, $1), B: new Arbol($1) }; }
			| 'ValoresString'												{ $$ = { A: new Primitivo(@1.first_line, @1.first_column, $1), B: new Arbol($1) }; }
			| 'ValoresBoolean'												{ $$ = { A: new Primitivo(@1.first_line, @1.first_column, $1), B: new Arbol($1) }; }
			| 'Identificador' 												{ $$ = { A: new Primitivo(@1.first_line, @1.first_column, $1), B: new Arbol($1) }; }	
			| 'Identificador' '.' 'Identificador' '('  ')'  		  		{ $$ = { A: new MetodoDeclaracion(@1.first_line, @1.first_column, $1, $3, [], false), B: new Arbol("Llamada_Metodo") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol(".")); $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); }
			| 'Identificador' '.' 'Identificador' '(' ListaParametros ')'  	{ $$ = { A: new MetodoDeclaracion(@1.first_line, @1.first_column, $1, $3, $5.A, false), B: new Arbol("Llamada_Metood") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol(".")); $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); }
			| 'Identificador' '(' ')'  										{ $$ = { A: new MetodoDeclaracion(@1.first_line, @1.first_column, "", $1, [], false), B: new Arbol("Llamada_Funcion") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); }
			| 'Identificador' '(' ListaParametros ')' 						{ $$ = { A: new MetodoDeclaracion(@1.first_line, @1.first_column, "", $1, $3.A, false), B: new Arbol("Llamada_Funcion") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo(new Arbol(")")); }
			;			

LstValores	: LstValores ',' Valores	{ $1.A.push($3.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Valores") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol(",")); $$.B.AgregarArrayNodo($3.B); }
			| Valores					{ $$ = { A: [$1.A], B: $1.B }; }
			;
			
			
// Lista De Parametros Metodos

ListaParametros		: ListaParametros ',' Expr	{ $1.A.push($3.A); $$ = { A: $1.A, B: new Arbol("Lista_De_Valores") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol(",")); $$.B.AgregarArrayNodo($3.B); }
					| Expr						{ $$ = { A: [$1.A], B: $1.B }; }
					;				

// Tipos De Datos

Tipos	: 'int'			{ $$ = { A: $1, B: new Arbol("Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("int")); }
		| 'Boolean'		{ $$ = { A: $1, B: new Arbol("Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("boolean")); }
		| 'double'		{ $$ = { A: $1, B: new Arbol("Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("double")); }
		| 'String'		{ $$ = { A: $1, B: new Arbol("Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("String")); }
		| 'char'		{ $$ = { A: $1, B: new Arbol("Tipo_De_Dato") }; $$.B.AgregarArrayNodo(new Arbol("char")); } 
		;
					
//Comentarios

Comentarios	: 'Comentario_MultiLinea' { $$ = { A: new Comentarios(@1.first_line, @1.first_column, $1), B: new Arbol("Comentario_MultiLinea") }; $$.B.AgregarArrayNodo(new Arbol($1)); }
			| 'Comentario_UniLinea'   { $$ = { A: new Comentarios(@1.first_line, @1.first_column, $1), B: new Arbol("Comentario_UniLinea") }; $$.B.AgregarArrayNodo(new Arbol($1)); }
			;			
			
// Declaracion Y Asignacion De Variables

Declaracion	: Tipos ListadoDeclaraciones ';' { $$ = { A: new Declaracion(@1.first_line, @1.first_column, $1.A, $2.A), B: new Arbol("Declaracion_De_Variables") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol(";")); }
			;
			
DeclaracionFor	: Tipos ListadoDeclaraciones ';' { $$ = { A: new DeclaracionFor(@1.first_line, @1.first_column, $1.A, $2.A), B: new Arbol("Declaracion_For") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo($2.B); $$.B.AgregarArrayNodo(new Arbol(";"));  }	
				;
			
ListadoDeclaraciones	: ListadoDeclaraciones ',' Var_Value  { $1.A.push($3.A); $$ = { A: $1.A, B:  new Arbol("Lista_De_Declaraciones") }; $$.B.AgregarArrayNodo($1.B); $$.B.AgregarArrayNodo(new Arbol(",")); $$.B.AgregarArrayNodo($3.B); } 
						| Var_Value							  { $$ = { A: [$1.A], B: $1.B }; } 
						;

Var_Value	: 'Identificador' '=' Expr	{ $$ = { A: new Subdeclaracion(@1.first_line, @1.first_column, $1, $3.A), B: new Arbol("Asignacion") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("=")); $$.B.AgregarArrayNodo($3.B);}
			| 'Identificador'			{ $$ = { A: new Subdeclaracion(@1.first_line, @1.first_column, $1, null), B: new Arbol("Identificador") }; $$.B.AgregarArrayNodo(new Arbol($1)); }
			;
			
// Asignacion 

Asignacion	: 'Identificador' '=' Expr ';' 										{ $$ = { A: new Asignacion(@1.first_line, @1.first_column, $1, $3.A), B: new Arbol("Asignacion_Simple") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("=")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo(new Arbol(";")); }
			| 'Identificador' '.' 'Identificador' '('  ')' ';' 					{ $$ = { A: new MetodoAsignacion(@1.first_line, @1.first_column, $1, $3, [], true), B: new Arbol("Llamada_Metodo") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol(".")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); }
			| 'Identificador' '.' 'Identificador' '(' ListaParametros ')' ';' 	{ $$ = { A: new MetodoAsignacion(@1.first_line, @1.first_column, $1, $3, $5.A, true), B: new Arbol("Llamada_Metodo") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol(".")); $$.B.AgregarArrayNodo(new Arbol($3)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($5.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); } 
			| 'Identificador' '(' ')' ';' 										{ $$ = { A: new MetodoAsignacion(@1.first_line, @1.first_column, "", $1, [], true), B: new Arbol("Llamada_Funcion") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); }
			| 'Identificador' '(' ListaParametros ')' ';' 						{ $$ = { A: new MetodoAsignacion(@1.first_line, @1.first_column, "", $1, $3.A, true), B: new Arbol("Llamada_Funcion") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";"));  }
			| 'Identificador' '+' '+' ';'										{ $$ = { A: new IncrementoDecremento(@1.first_line, @1.first_column, $1, "+"), B: new Arbol("Incremento") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("+")); $$.B.AgregarArrayNodo(new Arbol("+")); $$.B.AgregarArrayNodo(new Arbol(";")); }	
			| 'Identificador' '-' '-' ';'										{ $$ = { A: new IncrementoDecremento(@1.first_line, @1.first_column, $1, "-"), B: new Arbol("Decremento") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("-")); $$.B.AgregarArrayNodo(new Arbol("-")); $$.B.AgregarArrayNodo(new Arbol(";")); }	
			; 
			
// Print			
			
Print	: 'Sout' '(' Expr ')' ';'   { $$ = { A: new Print(@1.first_line, @1.first_column, $3.A), B: new Arbol("Print") }; $$.B.AgregarArrayNodo(new Arbol($1)); $$.B.AgregarArrayNodo(new Arbol("(")); $$.B.AgregarArrayNodo($3.B); $$.B.AgregarArrayNodo(new Arbol(")")); $$.B.AgregarArrayNodo(new Arbol(";")); }
		;


// Produccion De Errores

ErroresSintacticos	: error Delimitador	{ $$ = { A: new Errores(@1.first_line, @1.first_column, "Error Sintactico", $1), B: new Arbol("Error_Sintactico") }; } 
					| ';'				{ $$ = { A: new Errores(@1.first_line, @1.first_column, "Error Sintactico", $1), B: new Arbol("Error_Sintactico") }; } 
					| ')'				{ $$ = { A: new Errores(@1.first_line, @1.first_column, "Error Sintactico", $1), B: new Arbol("Error_Sintactico") }; }
					;
					
Delimitador	: ';'				{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			| ')'				{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			| '}'				{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			;

// Podria Ser Asi			
Posible		: ';'				{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			| ')'				{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			| '}'				{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			| 'Identificador'	{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }	
			| '(' Exp ')'		{ $$ = { A: $1, B: new Arbol("Error_Sintactico") }; }
			;			