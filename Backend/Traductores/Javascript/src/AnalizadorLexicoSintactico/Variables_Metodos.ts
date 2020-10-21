// Imports
import { Tokens } from "./Tokens"; 
import { Errores } from "./Errores";
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// Array Identacion
export let Identacion: Array<any> = new Array();
export let ArrayErrores: Array<Errores> = new Array();
export let ArrayTokens: Array<Tokens> = new Array();

// Funcion Que Cuenta Los Espacios
export function AgregarIdentacion(): String {

	// Declaraciones
	let Espacios: string = "";
	
	// Agregar Espacios
	for(let Contador: number = 0; Contador < Identacion.length; Contador++) {
		
		Espacios += "    ";
		
	}
	
	return Espacios;
}

// Vaciar Lista De Tokens
export function VaciarTokens() {
	
	// Recorrer Lista De Tokens
	ArrayTokens = new Array();
	
}

// Vaciar Lista De Errores
export function VaciarErrores() {
	
	// Recorrer Lista De Errores
	ArrayErrores = new Array();
	
}

// Funcion Generar PDF Tokens
export function ListaDeTokens() {
	
	// Filas Tabla
	var Filas = [];
	
	// Obtener Todos Los Tokens
	for (var Contador = 0; Contador < ArrayTokens.length; Contador++) {
		
		// Agregar Token A Array
		Filas.push( 
		
			[ 
				(Contador + 1).toString(), 
				ArrayTokens[Contador].Linea.toString(), 
				ArrayTokens[Contador].Columna.toString(),
				ArrayTokens[Contador].Tipo,
				ArrayTokens[Contador].Lexema	
			]
			
		);
		
	}
	
	// Documento PDF 
	const DocumentoPDF = new jsPDF();
	
	// Generar Tabla
	autoTable(DocumentoPDF, {
		
		theme: 'striped',
		headStyles: { 
			
			font: 'times',
			fontStyle: 'bold',
			fillColor: [127, 74, 241],
			fontSize: 13			
			
			},
		head: [['No.', 'Fila', 'Columna', 'Tipo', 'Descripcion']], 
		body: Filas
		
	})
	
	// Guardar PDF
	DocumentoPDF.save('src/Reportes/TablaDeTokensJS.pdf');	
}

// Funcion Generar PDF Errores
export function ListaDeErrores() {
	
	// Declaraciones
	
	// Filas Tabla
	var Filas = [];	
	var DescripcionError = "";
    var ErroresLista: String = "";
	var Error = false;
	
	// Obtener Todos Los Tokens
	for (var Contador = 0; Contador < ArrayErrores.length; Contador++) {
		
		// Agregar Token A Array
		if(ArrayErrores[Contador].Tipo == "Error Lexico") {
			
			DescripcionError = "El Carácter '" + ArrayErrores[Contador].Lexema + "' No Pertenece Al Lenguaje";
			
			Filas.push( 
		
				[	 
					(Contador + 1).toString(),
					ArrayErrores[Contador].Tipo,				
					ArrayErrores[Contador].Linea.toString(), 
					ArrayErrores[Contador].Columna.toString(),
					DescripcionError
				]
				
			);
			
			ErroresLista += "No: " + (Contador + 1).toString() +
							" Tipo: " + ArrayErrores[Contador].Tipo +				
							" Fila: " + ArrayErrores[Contador].Linea.toString() + 
							" Columna: " + ArrayErrores[Contador].Columna.toString() +
							" Descripcion: " + DescripcionError + "\n";
			
		} else {
			
			DescripcionError = "Se Esperaba Otro Tipo De Token, Delimitador: " + ArrayErrores[Contador].Lexema;
			
			Filas.push( 
			
				[ 
					(Contador + 1).toString(),
					ArrayErrores[Contador].Tipo,				
					ArrayErrores[Contador].Linea.toString(), 
					ArrayErrores[Contador].Columna.toString(),
					DescripcionError
				]
				
			);
			
			ErroresLista += "No: " + (Contador + 1).toString() +
							" Tipo: " + ArrayErrores[Contador].Tipo +				
							" Fila: " + ArrayErrores[Contador].Linea.toString() + 
							" Columna: " + ArrayErrores[Contador].Columna.toString() +
							" Descripcion: " + DescripcionError + "\n";
			
		}
		
	}

	// Hay Errores
	if(ArrayErrores.length > 0) {
		
		Error = true;
		
	} else {
		
		Error = false;
		
	}
	
	// Documento PDF 
	const DocumentoPDF = new jsPDF();
	
	// Generar Tabla
	autoTable(DocumentoPDF, {
		
		theme: 'striped',
		headStyles: { 
			
			font: 'times',
			fontStyle: 'bold',
			fillColor: [220, 20, 60],
			fontSize: 13			
			
			},
		head: [['No.', 'Tipo Error', 'Fila', 'Columna', 'Descripcion']], 
		body: Filas
		
	})
	
	// Guardar PDF
	DocumentoPDF.save('src/Reportes/TablaDeErroresJS.pdf');

	return [ErroresLista, Error];
	
}

