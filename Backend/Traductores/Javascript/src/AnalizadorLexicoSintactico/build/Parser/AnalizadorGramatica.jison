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
	const { Clase } = require('../Clase')
	const { Interfaz } = require('../Interfaz') 
	const { Comentarios } = require('../Comentarios') 
	const { Funciones } = require('../Funciones') 
	const { Metodo } = require('../Metodo') 
	const { Parametros } = require('../Parametros') 
	const { SentenciasCiclos, Sentencias } = require('../SentenciasCiclos')
	const { DeclaracionFunciones } = require('../DeclaracionFunciones')
%}


/*                          Analizador Lexico                                     */

%lex

%options case-sensitive

// Expresiones Regulares 
Numero_Entero [0-9]+
Numero_Decimal {Numero_Entero}("."{Numero_Entero})? 
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
[/][/].*            					return 'Comentario_UniLinea'
[/][*][^*]*[*]+([^/\*][^*]*[*]+)*[/]   	return 'Comentario_MultiLinea'

// Instrucciones
{System_Print}				return 'Sout'

// Simbolos 			  
"{"							return '{'
"}"							return '}'
"("							return '('
")"							return ')' 
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
.							{console.log("Fila: " + yylloc.first_line + " Columna: " + yylloc.first_column + " Lexema: " + yytext);}		

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

// Falta Arreglar BloqueInterfaz
// Declarar Metodos Unicamente Dentro De Interfaz
// Contador++  o i-- F Esto No jala Aun 
// Esto Se Podra O Estar Muy Fumado System.out.println ("Contador" + (contador + 1) ); si lo hace pero al traducir se vuela los parentesis XD 
// Se Puede Verificar Que En El If Solo Exista Un Else O Eso Seria Semantico Creo Que Es Sintactico xD Ya lo hace creo? 
// Uso De Null Y Undifiend Pero No Se Que Pensas Vos?
// Se Puede Verificar Que El Break Y El Continue Este Dentro Unicamente De Ciclos Y El Return Dentro De Funciones?
// Vos Esto Como Se Puede Hacer var = "hola" && var = "que hace" Esto Truena XD es doble igual verdad ? la estoy cagando XD 
// Vos Si Yo Hago Esto !(x == y) Lo Traduce Asi ! x == y  Como Le Hago Para Que Lo Traduzca Asi ! (x == y) ? 
// int a = (5 + 6) + (6 + 7) - 6; esto lo traduce asi XD var a = 5 + 6 + 6 + 7 - 6 ; jaja como le pongo los parentesis?
// Esto Truena Asi Se Puede Hacer ?     int a = (5 + 5) - (-6); ? Probe Y Truena XD bien jala Creo que yo soy imbecil xD  
// Manejo De Errores Modo Panico PD. En Panico Ando Yo
// AST

%start Begin

%%

// Inicio Analisis

Begin   : Instrucciones EOF { return $1; }
        |                   { return []; }
		;

Instrucciones   : Instrucciones Instruccion { $1.push($2); $$ = $1; }
                | Instruccion 				{ $$ = [$1]; }
                ;

// Lista De Instrucciones

Instruccion		: Bloque			{ $$ = $1; } 
				| Print				{ $$ = $1; }
				| If				{ $$ = $1; }
				| For        		{ $$ = $1; }
				| DoWhile 			{ $$ = $1; }
				| While				{ $$ = $1; }
				| Declaracion		{ $$ = $1; }
				| ClaseInterfaz		{ $$ = $1; }
				| Comentarios		{ $$ = $1; }
				| Funciones			{ $$ = $1; }	
				| Asignacion		{ $$ = $1; }
				| SentenciasCiclos	{ $$ = $1; }
				;
				
// Clases E Interfaces

ClaseInterfaz 	: 'public' 'class' 'Identificador' Bloque				{ $$ = new Clase(@1.first_line, @1.first_column, $3, $4); }
				| 'public' 'interface' 'Identificador' BloqueInterfaz	{ $$ = new Interfaz(@1.first_line, @1.first_column, $3, $4); }
				;	

// Bloques

Bloque	: '{' Instrucciones '}'   { $$ = new Bloque(@1.first_line, @1.first_column, $2); }
		| '{' '}'  	  			  { $$ = new Bloque(@1.first_line, @1.first_column, []); }
		;
		
BloqueInterfaz	:'{' DeclaracionFunciones '}'		{ $$ = new Bloque(@1.first_line, @1.first_column, $2); }
				|'{' '}'							{ $$ = new Bloque(@1.first_line, @1.first_column, []); }
				; 

// Metodos Y Funciones

Funciones	: 'public' Tipos 'Identificador' '('  ')' Bloque				  { $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, [], $6); }
			| 'public' 'void' 'Identificador' '('  ')' Bloque   			  { $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, [], $6); } 
			| 'public' Tipos 'Identificador' '(' ListaParametros ')' Bloque	  { $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, $5, $7); }
			| 'public' 'void' 'Identificador' '(' ListaParametros ')' Bloque  { $$ = new Funciones(@1.first_line, @1.first_column, $2, $3, $5, $7); } 
			; 
					
// Parametros	

ListaParametros	: ListaParametros ',' Parametro  { $1.push($3); $$ = $1; }
				| Parametro						 { $$ = [$1]; } 
				;
				
Parametro	: Tipos 'Identificador'	 { $$ = new Parametros(@1.first_line, @1.first_column, $1, $2); } 
			;
		
			
// Sentencias De Repetición

For		: 'for' '(' Declaracion Expr ';' Expr ')' Bloque { $$ = new For(@1.first_line, @1.first_column, $3, $4, $6, $8); }		
		;
		
While	: 'while' '(' Expr ')' Bloque { $$ = new While(@1.first_line, @1.first_column, $3, $5); }	
		;		
		
DoWhile : 'do' Bloque 'while' '(' Expr ')' ';' { $$ = new DoWhile(@1.first_line, @1.first_column, $2, $5); }
		;		
		
// Sentencias De Control 

If      : 'if' '(' Expr ')' Bloque Else	{ $$ = new If(@1.first_line, @1.first_column, $3, $5, $6); } 
		;
		
Else	: 'else' Bloque  { $$ = $2 }
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
			| 'Identificador' '.' 'Identificador' '('  ')'  		  	{ $$ = new Metodo(@1.first_line, @1.first_column, $1, $3, [], false); }
			| 'Identificador' '.' 'Identificador' '(' LstValores ')'  	{ $$ = new Metodo(@1.first_line, @1.first_column, $1, $3, $5, false); }
			| 'Identificador' '(' ')'  									{ $$ = new Metodo(@1.first_line, @1.first_column, "", $1, [], false); }
			| 'Identificador' '(' LstValores ')' 						{ $$ = new Metodo(@1.first_line, @1.first_column, "", $1, $3, false); }
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

Comentarios	: 'Comentario_MultiLinea' { $$ = new Comentarios(@1.first_line, @1.first_column,$1) }
			| 'Comentario_UniLinea'   { $$ = new Comentarios(@1.first_line, @1.first_column,$1) }
			;



				


DeclaracionFunciones	: 'public' Tipos 'Identificador' '('  ')' ';'				  	{ $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, []); }
						| 'public' 'void' 'Identificador' '('  ')' ';'   			  	{ $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, []); } 
						| 'public' Tipos 'Identificador' '(' ListaParametros ')' ';'  	{ $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, $5); }
						| 'public' 'void' 'Identificador' '(' ListaParametros ')' ';'   { $$ = new DeclaracionFunciones(@1.first_line, @1.first_column, $2, $3, $5); } 
						;
														

				

Print	: 'Sout' '(' Expr ')' ';'   {$$=new Print(@1.first_line, @1.first_column,$3);}
		;

Declaracion	: Tipos ListadoDeclaraciones ';' {$$=new Declaracion(@1.first_line, @1.first_column,$1,$2);}
			;
			
ListadoDeclaraciones	:ListadoDeclaraciones ',' Var_Value  {$1.push($3);$$=$1} 
						|Var_Value							 {$$=[$1]} 
						;

Var_Value	: 'Identificador' '=' Expr	{$$=new Subdeclaracion(@1.first_line, @1.first_column,$1,$3);}
			| 'Identificador'			{$$=new Subdeclaracion(@1.first_line, @1.first_column,$1,null);}
			;
Asignacion	: 'Identificador' '=' Expr ';' {$$=new Subdeclaracion(@1.first_line, @1.first_column,$1,$3);}
			| 'Identificador' ';'  		{$$=new Subdeclaracion(@1.first_line, @1.first_column,$1,null);}
			| 'Identificador' '.' 'Identificador' '('  ')' ';' 		  {$$=new Metodo(@1.first_line, @1.first_column,$1,$3,[],true)}
			| 'Identificador' '.' 'Identificador' '(' LstValores ')' ';' {$$=new Metodo(@1.first_line, @1.first_column,$1,$3,$5,true)}
			| 'Identificador' '(' ')' ';' {$$=new Metodo(@1.first_line, @1.first_column,"",$1,[],true)}
			| 'Identificador' '(' LstValores ')' ';' {$$=new Metodo(@1.first_line, @1.first_column,"",$1,$3,true)}
			; // agregaste el punto? nel no lo tenias nel no dijiste que daba problemas pero qp no hacemos esto 







