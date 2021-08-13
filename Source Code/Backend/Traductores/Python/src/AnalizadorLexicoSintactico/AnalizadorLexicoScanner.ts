// Imports

// Arreglo De Tokens, De Errores, Metodo Vaciar Tokens Y Metodo Vaciar Errores
import { ArrayTokens, ArrayErrores, VaciarArrayTokens, VaciarArrayErrores, DiccionarioJava } from "./Variables";

// Nuevo Token Y Nuevo Error
import { NuevoToken } from "./ObjetoToken";
import { NuevoError } from "./ObjetoError";

// Metodo Analizador Lexico
export function AnalizadorLexicoScanner(CadenaTexto: String) {
	
	// Declaraciones
	
	// Contador De Tokens
	var ContadorTokens = 1;
	
	// Contador De Errores
	var ContadorErrores = 1;
	
	// Fila Donde Se Encuentra El Token O Error
	var FilaTokenError = 1;
	
	// Columna Donde Se Encuentra El Token O Error
	var ColumnaTokenError = 0;
	
	// Estado Del Analizador Lexico
	var EstadoActualLexer = 0;
	
	// Caracter Texto Y Codigo Ascii
	var CaracterActual = "";
	var CaracterActualAscii = 0;
	
	// Agregar Final De Cadena
	CadenaTexto += "#";
	
	// Auxiliar Lexico
	var AuxiliarLexico = "";	
	
	// Limpiar Lista De Tokens
	VaciarArrayTokens();
	
	// Limpiar Lista De Errores
	VaciarArrayErrores();
	
	// Comienzo A Recorrer Cadena 
	for(var Contador = 0; Contador < CadenaTexto.length; Contador++) {
		
		// Obtener Caracter Actual Texto Y CodigoAscii
		CaracterActual = CadenaTexto.charAt(Contador);	
		CaracterActualAscii = CadenaTexto.charCodeAt(Contador);
	
		// Switch De Caracters 
		switch(EstadoActualLexer) {
			
			// Verificar Caracter Inicial
			case 0:
			
				// Comienza Verificacion
				if(CaracterActual == " ") {
					
					// Verificar Si Hay Espacios Vacios
					ColumnaTokenError++;
								
				} else if(CaracterActual == "\n") {
					
					// Verificar Si Hay Salto De Linea
					ColumnaTokenError = 0;
					FilaTokenError++;
					
				} else if(CaracterActual == "\t") {
					
					// Verificar Si Hay Tabulador
					ColumnaTokenError++;
					
				} else if(CaracterActual == "\r") {
					
					// Verificar Si Hay Retorno De Carro
					ColumnaTokenError = 0;
					FilaTokenError++;					
					
				} else if((CaracterActualAscii >= 65 && CaracterActualAscii <= 90) || (CaracterActualAscii >= 97 && CaracterActualAscii <= 122) || (CaracterActualAscii == 209 || CaracterActualAscii == 241)) {
					
					// Verificar Si Comienza Un Identificador
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 1;
					
				} else if(CaracterActualAscii >= 48 && CaracterActualAscii <= 57) { 
				
					// Verificar Si Comienza Numero 
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 2;					
				
				} else if(CaracterActual == "\"") { 
				
					// Verificar Si Es Cadena String
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 4;
								
				} else if(CaracterActual == "'") { 
				
					// Verificar Si Es Cadena Char
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 5;				
				
				} else if(CaracterActual == "/") { 
				
					// Verificar Simbolo /
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 6;				
				
				} else if(CaracterActual == "{") { 
				
					// Verificar Simbolo {
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 9;
				
				} else if(CaracterActual == "}") { 
				
					// Verificar Simbolo {
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 10;
				
				} else if(CaracterActual == "(") { 
				
					// Verificar Simbolo (
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 11;
				
				} else if(CaracterActual == ")") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 12;
				
				} else if(CaracterActual == "[") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 13;
				
				} else if(CaracterActual == "]") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 14;
				
				} else if(CaracterActual == ",") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 15;
				
				} else if(CaracterActual == ".") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 16;
				
				} else if(CaracterActual == ";") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 17;
				
				} else if(CaracterActual == ":") { 
				
					// Verificar Simbolo )
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 18;
				
				}  else if(CaracterActual == "<") { 
				
					// Verificar Simbolo <
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 19;
				
				}  else if(CaracterActual == ">") { 
				
					// Verificar Simbolo >
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 20;
				
				} else if(CaracterActual == "=") { 
				
					// Verificar Simbolo >
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 21;
				
				} else if(CaracterActual == "!") { 
				
					// Verificar Simbolo >
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 22;
				
				} else if(CaracterActual == "&") { 
				
					// Verificar Simbolo &
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 23;
				
				} else if(CaracterActual == "|") { 
				
					// Verificar Simbolo &
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 24;
				
				} else if(CaracterActual == "^") { 
				
					// Verificar Simbolo &
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 25;
				
				} else if(CaracterActual == "+") { 
				
					// Verificar Simbolo &
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 26;
				
				} else if(CaracterActual == "-") { 
				
					// Verificar Simbolo &
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 27;
				
				} else if(CaracterActual == "*") { 
				
					// Verificar Simbolo &
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 28;
				
				} else if(CaracterActual == "#" && Contador == CadenaTexto.length - 1) { 
				
					// Final De Cadena
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Fin_De_Cadena", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
				
				} else {
					
					// Aceptar Error   
					AuxiliarLexico += CaracterActual;
					ArrayErrores.push(new NuevoError(ContadorErrores, FilaTokenError, ColumnaTokenError, "Error_Lexico", AuxiliarLexico, "El Caracter '" + AuxiliarLexico + "' No Pertenece Al Lenguaje"));
					AuxiliarLexico = "";
					ContadorErrores++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;	
								
				}				
			
				break;
			
			// Verificar Identificador
			case 1:
			
				if((CaracterActualAscii >= 65 && CaracterActualAscii <= 90) || (CaracterActualAscii >= 97 && CaracterActualAscii <= 122) || (CaracterActualAscii == 209 || CaracterActualAscii == 241)) {
					
					// Verificar Letras Mayusculas Y Minusculas
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 1;
					
				} else if(CaracterActualAscii >= 48 && CaracterActualAscii <= 57) {
					
					// Verifica Digito
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 1;
					
				} else if(CaracterActual == "_") {
					
					// Verificar Guion Bajo
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 1;
					
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Identificador", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
										
				}

				break;	
			
			// Verificar Numero Entero
			case 2:
			
				if(CaracterActualAscii >= 48 && CaracterActualAscii <= 57) { 
				
					// Verificar Si Digito
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 2;
					
				
				} else {
					
					if(CaracterActual == ".") {
						
						// Verificar Si Viene Un Punto Decimales
						AuxiliarLexico += CaracterActual;
						ColumnaTokenError++;
						EstadoActualLexer = 3;
						
					} else {
						
						// Aceptar Token
						ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Numero", AuxiliarLexico));
						AuxiliarLexico = "";
						ContadorTokens++;
						ColumnaTokenError++;
						EstadoActualLexer = 0;
						Contador--;
						
					}
					
				}				

				break;
				
			// Verificar Numero Decimales
			case 3:
			
				// Verificar Si Viene Un Numero
				if(CaracterActualAscii >= 48 && CaracterActualAscii <= 57) { 
				
					// Verificar Si Digito
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 3;
									
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Numero", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}				
			
				break;
				
			// Verificar Cadena De Texto String
			case 4:
			
				if(CaracterActual == "\"" || (CaracterActual == "#" && Contador == CadenaTexto.length - 1)) {
					
					// Verificar Letras
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Cadena_De_Texto", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					//Contador--;
								
				} else {
					
					// Obtener Cualquier Cosa
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 4;
					
				}

				break;
			
			// Verificar Cadena De Texto Char
			case 5:
			
				if(CaracterActual == "'" || (CaracterActual == "#" && Contador == CadenaTexto.length - 1)) {
					
					// Aceptar Token
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Cadena_De_Texto", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					//Contador--;
								
				} else {
					
					// Obtener Cualquier Cosa
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 5;
					
				}

				break;
				
			// Verificar Comentario Unilinea / Multilinea
			case 6:

				if(CaracterActual == "/") {
					
					// Verificar Comentario Unilinea
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 7;
					
				} else if(CaracterActual == "*") {
					
					// Verificar Comentario Unilinea
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError++;
					EstadoActualLexer = 8;
					
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Dividido", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;
			
			// Verificar Comentario Unilinea
			case 7:
			
				if(CaracterActual == "\n" || CaracterActual == "\r") {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Comentario_Unilinea", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;	
					Contador--;
					
				} else if (CaracterActual == "#" && Contador == CadenaTexto.length - 1) {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Comentario_Unilinea", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				} else {
					
					// Obtener Cualquier Cosa
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError;
					EstadoActualLexer = 7
					
				}

				break;	
				
			// Verificar Comentario Multilinea				
			case 8:
			
				if(CaracterActual == "*") {
					
					if(CadenaTexto.charAt(Contador + 1) == "/") {
						
						// Aceptar Token
						AuxiliarLexico += CaracterActual + CadenaTexto.charAt(Contador + 1);
						ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Comentario_Multilinea", AuxiliarLexico));
						AuxiliarLexico = "";
						ContadorTokens++;
						ColumnaTokenError++;
						EstadoActualLexer = 0;	
						Contador += 1;
						
					} else {
						
						// Agregar *
						AuxiliarLexico += CaracterActual;
						ColumnaTokenError++;
						EstadoActualLexer = 8;
						
					}	
					
				} else if (CaracterActual == "#" && Contador == CadenaTexto.length - 1) {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Comentario_Multilinea", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;					
					
				} else {
					
					// Obtener Cualquier Cosa
					AuxiliarLexico += CaracterActual;
					ColumnaTokenError;
					EstadoActualLexer = 8
					
				}

				break;

			// Aceptar Simbolo {
			case 9:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Llave_Apertura", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;				
				EstadoActualLexer = 0;
				Contador--;

				break;
			
			// Aceptar Simbolo }		
			case 10:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Llave_Cierre", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;	
			
			// Aceptar Simbolo (		
			case 11:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Parentesis_Apertura", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;
				
			// Aceptar Simbolo )				
			case 12:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Parentesis_Cierre", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;

			// Aceptar Simbolo [
			case 13:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Corchete_Apertura", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;
				
			// Aceptar Simbolo ]	
			case 14:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Corchete_Cierre", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;	
				
			// Aceptar Simbolo ,	
			case 15:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Coma", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;	

			// Aceptar Simbolo .	
			case 16:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Punto", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;

			// Aceptar Simbolo ;	
			case 17:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_PuntoYComa", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;

			// Aceptar Simbolo :	
			case 18:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_DosPuntos", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;	

			// Verificar Si Es <= O Aceptar Simbolo <	
			case 19:
			
				if(CaracterActual == "=") {
					
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_MenorIgualQue", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_MenorQue", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;	

			// Verificar Si Es >= O Aceptar Simbolo >	
			case 20:
			
				if(CaracterActual == "=") {
					
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_MayorIgualQue", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_MayorQue", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;	

			// Verificar Si Es == O Aceptar Simbolo =	
			case 21:
			
				if(CaracterActual == "=") {
					
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_DobleIgual", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Igual", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;	

			// Verificar Si Es != O Aceptar Simbolo !	
			case 22:
			
				if(CaracterActual == "=") {
					
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Diferente", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					
				} else {
					
					// Aceptar Token
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Negacion", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;	

			// Verificar Si Es && O Marcar Como Error	
			case 23:
			
				if(CaracterActual == "&") {
					
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_And", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					
				} else {
					
					// Aceptar Token
					ArrayErrores.push(new NuevoError(ContadorErrores, FilaTokenError, ColumnaTokenError, "Error_Lexico", AuxiliarLexico, "El Caracter '" + AuxiliarLexico + "' No Pertenece Al Lenguaje"));
					AuxiliarLexico = "";
					ContadorErrores++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;	

			// Verificar Si Es || O Marcar Como Error	
			case 24:
			
				if(CaracterActual == "|") {
					
					AuxiliarLexico += CaracterActual;
					ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Or", AuxiliarLexico));
					AuxiliarLexico = "";
					ContadorTokens++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					
				} else {
					
					// Aceptar Token
					ArrayErrores.push(new NuevoError(ContadorErrores, FilaTokenError, ColumnaTokenError, "Error_Lexico", AuxiliarLexico, "El Caracter '" + AuxiliarLexico + "' No Pertenece Al Lenguaje"));
					AuxiliarLexico = "";
					ContadorErrores++;
					ColumnaTokenError++;
					EstadoActualLexer = 0;
					Contador--;
					
				}

				break;

			// Aceptar Simbolo ^	
			case 25:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Xor", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;		

			// Aceptar Simbolo +	
			case 26:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Mas", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;	

			// Aceptar Simbolo -	
			case 27:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Menos", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;	

			// Aceptar Simbolo *	
			case 28:
			
				// Aceptar Token
				ArrayTokens.push(new NuevoToken(ContadorTokens, FilaTokenError, ColumnaTokenError, "Simbolo_Por", AuxiliarLexico));
				AuxiliarLexico = "";
				ContadorTokens++;
				ColumnaTokenError++;
				EstadoActualLexer = 0;
				Contador--;

				break;			
		}
		
	}	
	
	// Verificar Palabras Reservadas
	for(var Contador = 0; Contador < ArrayTokens.length; Contador++) {
		
		let Palabra = ArrayTokens[Contador].GetLexema();
		
		// Recorrer Lista De Tokens
		for(var SubContador = 1; SubContador <= Object.keys(DiccionarioJava).length; SubContador++) {
			
			let PalabraReservada = DiccionarioJava[SubContador].toString();
			
	        // Verificar Si Es Palabra Reservada
			if(Palabra == PalabraReservada) {
				
				ArrayTokens[Contador].SetTipo("Palabra_Reservada_" + PalabraReservada);			
				
			}
			
		} 
		
	}	
	
}