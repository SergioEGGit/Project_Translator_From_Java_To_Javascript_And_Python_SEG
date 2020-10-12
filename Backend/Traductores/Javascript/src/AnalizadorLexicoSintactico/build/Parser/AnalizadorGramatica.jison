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
[/][/].*            		return 'Comentario_UniLinea'
[/][*][^*]*[*]+([^/\*][^*]*[*]+)*[/]   return 'Comentario_MultiLinea'

// Simbolos 			  
"{"							return '{'
"}"							return '}'
"("							return '('
")"							return ')' 
","							return ','
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
"interface"					return 'inteface'
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
"break"						return 'break'
	
// Instrucciones
{System_Print}				return 'Sout'

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

%start Begin

%%

// Inicio Analisis
Begin   : Instrucciones EOF {return $1;}
        |                   {return [];}
		;

Instrucciones   : Instrucciones Instruccion {$1.push($2);$$=$1;}
                | Instruccion 				{$$=[$1];}
                ;

// Lista De Instrucciones
Instruccion		: BLOQUE		{$$=$1;}
				| Print			{$$=$1;}
				| If			{$$=$1;}
				| For        	{$$=$1;}
				| DoWhile 		{$$=$1;}
				| While			{$$=$1;}
				| Declaracion	{$$=$1;}
				| Clase			{$$=$1;}
				;

// Clases
Clase 	: 'public' 'class' 'Identificador' Bloque	{$$=new Clase(@1.first_line, @1.first_column,$3,$4);}
		;	

Print	: 'Sout' '(' Expr ')' ';'   {$$=new Print(@1.first_line, @1.first_column,$3);}
		;
		
Bloque	: '{' Instrucciones '}'   {$$=new Bloque(@1.first_line, @1.first_column,$2)}
		| '{' '}'  	  			  {$$=new Bloque(@1.first_line, @1.first_column,[])}
		;

Declaracion	: Tipos ListadoDeclaraciones ';' {$$=new Declaracion(@1.first_line, @1.first_column,$1,$2);}
			;
			
ListadoDeclaraciones	:ListadoDeclaraciones ',' Var_Value  {$1.push($3);$$=$1}
						|Var_Value							 {$$=[$1]}
						;

Var_Value	: 'Identificador' '=' Expr	{$$=new Subdeclaracion(@1.first_line, @1.first_column,$1,$3);}
			| 'Identificador'			{$$=new Subdeclaracion(@1.first_line, @1.first_column,$1,null);}
			;

Tipos	: 'int'
		| 'Boolean'
		| 'double'
		| 'String'
		| 'char'
		;
		
If      : 'if' '(' Expr ')' Bloque Else	{$$=new If(@1.first_line, @1.first_column,$3,$5,$6);} 
		;
		
Else	: 'else' Bloque  {$$=$2}
		| 'else' If      {$$=$2}
		| 				 {$$=null}
		; 

For		: 'for' '(' Declaracion Expr ';' Expr ')' Bloque {$$=new For(@1.first_line, @1.first_column,$3,$4,$6,$8);}		
		;
		
DoWhile : 'do' Bloque 'while' '(' Expr ')' ';' {$$=new DoWhile(@1.first_line, @1.first_column,$2,$5);}
		;		
		
While	: 'while' '(' Expr ')' Bloque {$$=new While(@1.first_line, @1.first_column,$3,$5);}	
		;

Expr	: Expr '+' Expr     {$$=new Matematicos(@1.first_line, @1.first_column,$1,$3,Operaciones.SUMA)}   
		| Expr '-' Expr     {$$=new Matematicos(@1.first_line, @1.first_column,$1,$3,Operaciones.RESTA)}  
		| Expr '*' Expr     {$$=new Matematicos(@1.first_line, @1.first_column,$1,$3,Operaciones.MULTIPLICACION)}
		| Expr '/' Expr     {$$=new Matematicos(@1.first_line, @1.first_column,$1,$3,Operaciones.DIVISION)}
		| Expr '+''+'       {$$=new Matematicos(@1.first_line, @1.first_column,$1,new Primitivo(@1.first_line,@1.first_column,1),Operaciones.SUMA)}
		| Expr '-' '-'      {$$=new Matematicos(@1.first_line, @1.first_column,$1,new Primitivo(@1.first_line,@1.first_column,1),Operaciones.RESTA)} 
		| '-' Expr          {$$=new Matematicos(@1.first_line, @1.first_column,new Primitivo(@1.first_line,@1.first_column,0),$2,Operaciones.RESTA)}  
		| '!' Expr          {$$=new Logicos(@1.first_line, @1.first_column,$2,$2,Operadores.NOT)}
		| Expr '<=' Expr    {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.MENORIGUAL)}  
		| Expr '>=' Expr    {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.MAYORIGUAL)}
		| Expr '<' Expr     {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.MENOR)} 
		| Expr '>' Expr     {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.MAYOR)}
		| Expr '==' Expr    {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.IGUAL)}
		| Expr '!=' Expr    {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.DIFERENTE)}
		| Expr '&&' Expr    {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.AND)}
		| Expr '||' Expr    {$$=new Logicos(@1.first_line, @1.first_column,$1,$3,Operadores.OR)}
		| Valores                {$$=$1}
		;


Valores : '(' Expr ')'  {$$=$2;}
		| 'ValoresDouble' {$$=new Primitivo(@1.first_line, @1.first_column,$1);}
		| 'ValoresString' {$$=new Primitivo(@1.first_line, @1.first_column,$1);}
		| 'ValoresBoolean'{$$=new Primitivo(@1.first_line, @1.first_column,$1);}
		;
