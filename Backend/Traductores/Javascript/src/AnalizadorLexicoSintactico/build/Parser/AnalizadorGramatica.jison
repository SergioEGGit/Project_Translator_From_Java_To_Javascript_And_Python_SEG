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
	const { Print } = require('../Print')
	const { Primitivo } = require('../Primitivo')
	const { Matematicos, Operaciones } = require('../Matematicos')
	const { Logicos, Operadores } = require('../Logicos')
	const { Bloque } = require('../Bloque')
	const { If } = require('../If')
	const { For } = require('../For')
	const { DoWhile } = require('../DoWhile')
	const { While } = require('../While')
	const { Subdeclaracion } = require('../Subdeclaracion')
	const { Declaracion } = require('../Declaracion')
	const { DeclaracionFor } = require('../DeclaracionFor')
	const { Clase } = require('../Clase')
	const { Interfaz } = require('../Interfaz') 
	const { Comentarios } = require('../Comentarios') 
	const { Funciones } = require('../Funciones') 
	const { MetodoAsignacion } = require('../MetodoAsignacion') 
	const { MetodoDeclaracion } = require('../MetodoDeclaracion')
	const { Parametros } = require('../Parametros') 
	const { SentenciasCiclos, Sentencias } = require('../SentenciasCiclos')
	const { DeclaracionFunciones } = require('../DeclaracionFunciones')
	const { Asignacion } = require('../Asignacion')
	const { Tokens } = require('../Tokens')
	const { Errores } = require('../Errores')
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
[/][/].*            					return 'Comentario_UniLinea';
[/][*][^*]*[*]+([^/\*][^*]*[*]+)*[/]   	return 'Comentario_MultiLinea'

// Instrucciones
{System_Print}			    return 'Sout'

// Simbolos 			  
"{"							return '{'
"}"							return '}'
"("							return '('
")"							return ')' 
"["							return '['
"]"							return ']'	
","							return ','
"."							return '.'
";"							return ';'
":"							return ':'

// Expresiones Relacionales
">="						return '>='
"<="						return '<='
"=="						return '=='
"!="						return '!='
"<"							return '<'
">"							return '>'
"="							return '='

// Expresiones Logicas
"&&"						return '&&'
"||"						return '||'
"!"							return '!'
"^"							return '^'

// Expresiones Aritmeticas
"+"							return '+'
"-"							return '-'
"*"							return '*'
"/"							return '/'

// Palabras Reservadas 
"public"					return 'public'
"static"					return 'static'
"class"						return 'class'
"interface"					return 'interface'
"void"						return 'void'
"for"						return 'for'
"do"						return 'do'
"while"						return 'while'
"if"						return 'if'
"else"						return 'else'
"break"						return 'break'
"continue"					return 'continue'
"return"					return 'return'
"null"						return 'null'
"main"						return 'main'
"args"						return 'args'

// Tipos De Datos
"int"						return 'int'
{Boolean_Name}				return 'Boolean'
"double"					return 'double'
{String_Name}				return 'String'
"char"						return 'char'

// Valores Tipos De Datos
{Boolean_Valores}			return 'ValoresBoolean'
{Cadena_String}				return 'ValoresString'
//{Numero_Entero}			return 'ValoresInt'
{Numero_Decimal}			return 'ValoresDouble'
{Identificador}				return 'Identificador'

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
 
 Valores 	: '(' Expr ')'  											{ $$ = $2; }
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

Var_Value	: 'Identificador' '=' Expr									{ $$ = new Subdeclaracion(@1.first_line, @1.first_column, $1, $3); }
			| 'Identificador'											{ $$ = new Subdeclaracion(@1.first_line, @1.first_column, $1, null); }
			;
			
// Asignacion 

Asignacion	: 'Identificador' '=' Expr ';' 									{ $$ = new Asignacion(@1.first_line, @1.first_column, $1, $3); }
			| 'Identificador' ';'  											{ $$ = new Asignacion(@1.first_line, @1.first_column, $1, null); }
			| 'Identificador' '.' 'Identificador' '('  ')' ';' 				{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, $1, $3, [], true); }
			| 'Identificador' '.' 'Identificador' '(' LstValores ')' ';' 	{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, $1, $3, $5, true); } 
			| 'Identificador' '(' ')' ';' 									{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, "", $1, [], true); }
			| 'Identificador' '(' LstValores ')' ';' 						{ $$ = new MetodoAsignacion(@1.first_line, @1.first_column, "", $1, $3, true); }
			| 'Identificador' '+''+' 										{ $$ = new Matematicos(@1.first_line, @1.first_column, new Primitivo(@1.first_line, @1.first_column, $1), new Primitivo(@1.first_line, @1.first_column, 1), Operaciones.INCREMENTO); }
			| 'Identificador' '-' '-'										{ $$ = new Matematicos(@1.first_line, @1.first_column, new Primitivo(@1.first_line, @1.first_column, $1), new Primitivo(@1.first_line, @1.first_column, 1), Operaciones.DECREMENTO); } 
			; 
			
// Print			
			
Print	: 'Sout' '(' Expr ')' ';'   { $$ = new Print(@1.first_line, @1.first_column, $3); }
		;


// Produccion De Errores

ErroresSintacticos	: error { $$ = new Errores(@1.first_line, @1.first_column, $1); } 
					| ';'
					| ')'
					;