/**
 *
 *  	      Gramatica Proyecto No.2 
 *    Organización De Lenguajes Y Compiladores No.1
 *                  JavaScript
 *
 * 
 */

%{
	const {PRINT} = require('../Print')
%}


/*                          Analizador Lexico                                     */



%lex

%options case-sensitive

%%

// Ignorar Espacios
\s+   

// Reconocer Comentarios Unilinea
[/][/].*            return 'ComentarioLineal';

// Reconocer Comentarios Multilinea
[/][*][^*]*[*]+([^/\*][^*]*[*]+)*[/]   return 'ComentarioMultiLineal';

// Simbolos Y Expresiones
";"							return ';'
"("							return '('
")"							return ')'
"System.out.println"		return 'SOUT'
<<EOF>>		        		return 'EOF'
/lex

%start Begin

%%

Begin   :Instrucciones EOF {return $1;}
        |                  {return [];}
    ;

Instrucciones   :Instrucciones Instruccion {$1.push($2);$$=$1} //aqui se esta haciendo un arreglo de instrucciones
                |Instruccion {$$=[$1]}
                ;

Instruccion	:PRINT		{$$=$1}
			;
PRINT	: 'SOUT' '('')' ';'	{$$=new PRINT(@1.first_line, @1.first_column);}
		;
//Levanta tu servidor y hay que importar el js del parser es este mira
