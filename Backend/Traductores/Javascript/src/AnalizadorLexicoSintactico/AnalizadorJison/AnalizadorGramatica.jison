/*
 *
 *  	      Gramatica Proyecto No.2 
 *    Organización De Lenguajes Y Compiladores No.1
 *                  JavaScript
 *        Sergio Alexander Echigoyen Gómez
 *					201801628 
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
%}


/*                          Analizador Lexico                                     */

%lex

%options case-sensitive

// Expresiones Regulares 
Numero_Entero [0-9]+\b
Numero_Decimal {Numero_Entero}("."{Numero_Entero})?\b
Cadena_String (\"([^"])*\") | (\'([^'])*\')
Boolean_Valores "true" | "false"
Boolean_Name "boolean" | "bool"
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
"!"							{ $$ = new Tokens(yylloc.first_line, yylloc.first_column, "Simbolo_Negacion", yytext); return '|'; }
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

InicioAnalisis  : Instrucciones		  EOF	{ return $1; }
				|                			{ return []; }						
				;

// Instrucciones Principales

Instrucciones   : Instrucciones Instruccion { $1.push($2); $$ = $1; }
                | Instruccion 				{ $$ = [$1]; } 
		        ;
				
Instruccion     : Clase					{ $$ = $1; } 
				| Interfaz				{ $$ = $1; }
				| Declaracion			{ $$ = $1; }
				| Comentarios			{ $$ = $1; }
				| ErroresSintacticos	{ $$ = $1; }        
				;	

// Lista De Instrucciones

// Clases

InstruccionesClases		: InstruccionesClases InstruccionClases	{ $1.push($2); $$ = $1; }
						| InstruccionClases						{ $$ = [$1]; }
						; 	
						
InstruccionClases	: Declaracion			{ $$ = $1; }
					| Clase					{ $$ = $1; }
					| Comentarios			{ $$ = $1; }
					| Funciones				{ $$ = $1; }
					| Asignacion			{ $$ = $1; }		
					| ErroresSintacticos	{ $$ = $1; }
					;					

// Interfaces

InstruccionesInterfaz	: InstruccionesInterfaz InstruccionInterfaz	{ $1.push($2); $$ = $1; } 
						| InstruccionInterfaz						{ $$ = [$1]; }
						; 						
				
InstruccionInterfaz		: DeclaracionFunciones	{ $$ = $1; }
						| Comentarios			{ $$ = $1; }
						| ErroresSintacticos	{ $$ = $1; }
						;
						
// Funciones

InstruccionesFunciones	: InstruccionesFunciones InstruccionFunciones	{ $1.push($2); $$ = $1; }
						| InstruccionFunciones							{ $$ = [$1]; }
						;		

InstruccionFunciones	: Print					{ $$ = $1; }
						| If					{ $$ = $1; } 
						| For        			{ $$ = $1; } 
						| DoWhile 				{ $$ = $1; }  
						| While					{ $$ = $1; }
						| Declaracion			{ $$ = $1; } 
						| Comentarios			{ $$ = $1; } 
						| Asignacion			{ $$ = $1; } 
						| SentenciasCiclos		{ $$ = $1; }
						| ErroresSintacticos	{ $$ = $1; }          
						;
						
// Ciclos

InstruccionesCiclos	: InstruccionesCiclos InstruccionCiclos	{ $1.push($2); $$ = $1; }
					| InstruccionCiclos						{ $$ = [$1]; }
					;		

InstruccionCiclos	: Print					{ $$ = $1; }
					| If					{ $$ = $1; } 
					| For        			{ $$ = $1; } 
					| DoWhile 				{ $$ = $1; }  
					| While					{ $$ = $1; }
					| Declaracion			{ $$ = $1; } 
					| Comentarios			{ $$ = $1; } 
					| Asignacion			{ $$ = $1; } 
					| SentenciasCiclos		{ $$ = $1; }
					| ErroresSintacticos	{ $$ = $1; }          
					;		

// If

InstruccionesIf		: InstruccionesIf InstruccionIf		{ $1.push($2); $$ = $1; }
					| InstruccionIf						{ $$ = [$1]; }
					;

InstruccionIf		: Print					{ $$ = $1; }
					| If					{ $$ = $1; } 
					| For        			{ $$ = $1; } 
					| DoWhile 				{ $$ = $1; }  
					| While					{ $$ = $1; }
					| Declaracion			{ $$ = $1; } 
					| Comentarios			{ $$ = $1; } 
					| Asignacion			{ $$ = $1; }
					| SentenciasCiclos		{ $$ = $1; }		
					| ErroresSintacticos	{ $$ = $1; }          
					; 					
											
// Bloques

BloqueClases : '{' InstruccionesClases	'}'   		{ $$ = new Bloque(@1.first_line, @1.first_column, $2); }
			 | '{' '}'  	  			  	  		{ $$ = new Bloque(@1.first_line, @1.first_column, []); }
			 | ErroresSintacticos					{ $$ = $1; } 
			 ;	

BloqueInterfaz	:'{' InstruccionesInterfaz '}'		{ $$ = new Bloque(@1.first_line, @1.first_column, $2); }
				|'{' '}'							{ $$ = new Bloque(@1.first_line, @1.first_column, []); }
				| ErroresSintacticos				{ $$ = $1; } 
				; 

BloqueFuncion	:'{' InstruccionesFunciones '}'		{ $$ = new Bloque(@1.first_line, @1.first_column, $2); }
				|'{' '}'							{ $$ = new Bloque(@1.first_line, @1.first_column, []); }
				| ErroresSintacticos				{ $$ = $1; } 
				; 

BloqueCiclos	:'{' InstruccionesCiclos '}'		{ $$ = new Bloque(@1.first_line, @1.first_column, $2); }
				|'{' '}'							{ $$ = new Bloque(@1.first_line, @1.first_column, []); }
				| ErroresSintacticos				{ $$ = $1; } 
				; 
				
BloqueIf		:'{' InstruccionesIf '}'			{ $$ = new Bloque(@1.first_line, @1.first_column, $2); }
				|'{' '}'							{ $$ = new Bloque(@1.first_line, @1.first_column, []); }
				| ErroresSintacticos				{ $$ = $1; } 
				; 				

// Clases E Interfaces

Clase 	: 'public' 'class' 'Identificador' BloqueClases		{ $$ = new Clase(@1.first_line, @1.first_column, $3, $4); }
		;	

Interfaz	: 'public' 'interface' 'Identificador' BloqueInterfaz	{ $$ = new Interfaz(@1.first_line, @1.first_column, $3, $4); }
			;		

// Metodos Y Funciones

Funciones	: 'public' Tipos 'Identificador' '('  ')' BloqueFuncion				  			{ $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, [], $6); }
			| 'public' 'void' 'Identificador' '('  ')' BloqueFuncion   			  			{ $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, [], $6); } 
			| 'public' Tipos 'Identificador' '(' ListaParametros ')' BloqueFuncion			{ $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, $5, $7); }
			| 'public' 'void' 'Identificador' '(' ListaParametros ')' BloqueFuncion			{ $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, $5, $7); } 
			| 'public' 'static' 'void' 'main' '(' 'String' '[' ']' 'args' ')' BloqueFuncion { $$ = new Funciones(@1.first_line, @1.first_column, $2, $4, [], $11); } 
			;
			
DeclaracionFunciones	: 'public' Tipos 'Identificador' '('  ')' ';'				  	{ $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, []); }
						| 'public' 'void' 'Identificador' '('  ')' ';'   			  	{ $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, []); } 
						| 'public' Tipos 'Identificador' '(' ListaParametros ')' ';'  	{ $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, $5); }
						| 'public' 'void' 'Identificador' '(' ListaParametros ')' ';'   { $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, $5); } 
						;			
					
// Parametros	

ListaParametros	: ListaParametros ',' Parametro  { $1.push($3); $$ = $1; }
				| Parametro						 { $$ = [$1]; }
				;
				
Parametro	: Tipos 'Identificador'	 { $$ = new Parametros(@1.first_line, @1.first_column, $1, $2); } 
			;
		
// Sentencias De Repetición

For		: 'for' '(' DeclaracionFor Expr ';' Expr ')' BloqueCiclos { $$ = new For(@1.first_line, @1.first_column, $3, $4, $6, $8); }		
		;
		
While	: 'while' '(' Expr ')' BloqueCiclos { $$ = new While(@1.first_line, @1.first_column, $3, $5); }	
		;		
		
DoWhile : 'do' BloqueCiclos 'while' '(' Expr ')' ';' { $$ = new DoWhile(@1.first_line, @1.first_column, $2, $5); }
		;		
		
// Sentencias De Control 

If      : 'if' '(' Expr ')' BloqueIf Else	{ $$ = new If(@1.first_line, @1.first_column, $3, $5, $6); } 
		;
		
Else	: 'else' BloqueIf  { $$ = $2 }
		| 'else' If      { $$ = $2 }
		| 				 { $$ = null}
		; 

// Sentencias Break, Continue Y Return

SentenciasCiclos	: 'break' ';'		{ $$ = new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.BREAK, null); }
					| 'continue' ';' 	{ $$ = new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.CONTINUE, null); }
					| 'return' ';'		{ $$ = new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.RETURN, null); }
					| 'return' Expr ';'	{ $$ = new SentenciasCiclos(@1.first_line, @1.first_column, $1, Sentencias.RETURN, $2); }
					;
 
 // Expresiones
 
 Expr	: Expr '+' Expr     { $$ = new Matematicos(@1.first_line, @1.first_column, $1, $3, Operaciones.SUMA); }   
		| Expr '-' Expr     { $$ = new Matematicos(@1.first_line, @1.first_column, $1, $3, Operaciones.RESTA); }  
		| Expr '*' Expr     { $$ = new Matematicos(@1.first_line, @1.first_column, $1, $3, Operaciones.MULTIPLICACION); }
		| Expr '/' Expr     { $$ = new Matematicos(@1.first_line, @1.first_column, $1, $3, Operaciones.DIVISION); }
		| Expr '+''+'       { $$ = new Matematicos(@1.first_line, @1.first_column, $1, new Primitivo(@1.first_line, @1.first_column, 1), Operaciones.INCREMENTO); }
		| Expr '-' '-'      { $$ = new Matematicos(@1.first_line, @1.first_column, $1, new Primitivo(@1.first_line, @1.first_column, 1), Operaciones.DECREMENTO); } 
		| '-' Expr          { $$ = new Matematicos(@1.first_line, @1.first_column, new Primitivo(@1.first_line, @1.first_column, 0), $2, Operaciones.NEGATIVO); }  
		| '!' Expr          { $$ = new Logicos(@1.first_line, @1.first_column, $2, $2, Operadores.NOT); }
		| Expr '<=' Expr    { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.MENORIGUAL); }  
		| Expr '>=' Expr    { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.MAYORIGUAL); }
		| Expr '<' Expr     { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.MENOR); } 
		| Expr '>' Expr     { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.MAYOR); }
		| Expr '==' Expr    { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.IGUAL); }
		| Expr '!=' Expr    { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.DIFERENTE); }
		| Expr '&&' Expr    { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.AND); }
		| Expr '||' Expr    { $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.OR); }
		| Expr '^' Expr    	{ $$ = new Logicos(@1.first_line, @1.first_column, $1, $3, Operadores.XOR); }
		| Valores           { $$ = $1; }
		;		
 
 // Valores De Tipos De Datos
 
 Valores 	: '(' Expr ')'  											{ $$ = new Parentesis(@1.first_line, @1.first_column, $2); }
			| 'ValoresDouble' 											{ $$ = new Primitivo(@1.first_line, @1.first_column, $1); }
			| 'ValoresString'											{ $$ = new Primitivo(@1.first_line, @1.first_column, $1); }
			| 'ValoresBoolean'											{ $$ = new Primitivo(@1.first_line, @1.first_column, $1); }
			| 'Identificador' 											{ $$ = new Primitivo(@1.first_line, @1.first_column, $1); }	
			| 'Identificador' '.' 'Identificador' '('  ')'  		  	{ $$ = new MetodoDeclaracion(@1.first_line, @1.first_column, $1, $3, [], false); }
			| 'Identificador' '.' 'Identificador' '(' LstValores ')'  	{ $$ = new MetodoDeclaracion(@1.first_line, @1.first_column, $1, $3, $5, false); }
			| 'Identificador' '(' ')'  									{ $$ = new MetodoDeclaracion(@1.first_line, @1.first_column, "", $1, [], false); }
			| 'Identificador' '(' LstValores ')' 						{ $$ = new MetodoDeclaracion(@1.first_line, @1.first_column, "", $1, $3, false); }
			;			

LstValores	: LstValores ',' Valores	{ $1.push($3); $$ = $1; }
			| Valores					{ $$ = [$1]; }
			;

// Tipos De Datos

Tipos	: 'int'
		| 'Boolean'
		| 'double'
		| 'String'
		| 'char' 
		;
					
//Comentarios

Comentarios	: 'Comentario_MultiLinea' { $$ = new Comentarios(@1.first_line, @1.first_column, $1); }
			| 'Comentario_UniLinea'   { $$ = new Comentarios(@1.first_line, @1.first_column, $1); }
			;			
			
// Declaracion Y Asignacion De Variables

Declaracion	: Tipos ListadoDeclaraciones ';' { $$ = new Declaracion(@1.first_line, @1.first_column, $1, $2); }
			;
			
DeclaracionFor	: Tipos ListadoDeclaraciones ';' { $$ = new DeclaracionFor(@1.first_line, @1.first_column, $1, $2); }	
				;
			
ListadoDeclaraciones	: ListadoDeclaraciones ',' Var_Value  { $1.push($3); $$ = $1; } 
						| Var_Value							  { $$ = [$1]; } 
						;

Var_Value	: 'Identificador' '=' Expr	{ $$ = new Subdeclaracion(@1.first_line, @1.first_column, $1, $3); }
			| 'Identificador'			{ $$ = new Subdeclaracion(@1.first_line, @1.first_column, $1, null); }
			;
			
// Asignacion 

Asignacion	: 'Identificador' '=' Expr ';' 									{ $$ = new Asignacion(@1.first_line, @1.first_column, $1, $3); }
			| 'Identificador' '.' 'Identificador' '('  ')' ';' 				{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, $1, $3, [], true); }
			| 'Identificador' '.' 'Identificador' '(' LstValores ')' ';' 	{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, $1, $3, $5, true); } 
			| 'Identificador' '(' ')' ';' 									{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, "", $1, [], true); }
			| 'Identificador' '(' LstValores ')' ';' 						{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, "", $1, $3, true); }
			| 'Identificador' '+' '+' ';'									{ $$ = new IncrementoDecremento(@1.first_line, @1.first_column, $1, "+"); }	
			| 'Identificador' '-' '-' ';'									{ $$ = new IncrementoDecremento(@1.first_line, @1.first_column, $1, "-"); }	
			; 
			
// Print			
			
Print	: 'Sout' '(' Expr ')' ';'   { $$ = new Print(@1.first_line, @1.first_column, $3); }
		;


// Produccion De Errores

ErroresSintacticos	: error Delimitador { $$ = new Errores(@1.first_line, @1.first_column, "Error Sintactico", $1); } 
					| ';'				{ } 
					| ')'				{ }
					;
					
Delimitador	: ';'
			| ')'
			| '}'
			| 'Identificador'
			| '(' Exp ')'
			;