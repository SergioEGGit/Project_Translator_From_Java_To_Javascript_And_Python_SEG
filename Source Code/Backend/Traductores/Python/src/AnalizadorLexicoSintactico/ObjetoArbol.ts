// Clase NodoArbol
export class NodoArbol {
	
	// Declaraciones
	public Identificador: number;
	public NombreNodo: String;
	public ArrayNodos: Array<NodoArbol>;
		
	// Constructor 	
	constructor(Identificador: number, NombreNodo: String) {
		
		// Asignacion
		this.Identificador = Identificador;
		this.NombreNodo = NombreNodo;
		this.ArrayNodos = new Array();
		
	}
	
	// Metodo Generar Grafica
	public GenerarTxtGrafica(): String {
		
		// Declaraciones
		var Contador = 0;
		var Cadena = "";
		
		// Agregar Raiz
		Cadena = "    A_" + this.Identificador + "[label=\"" + this.NombreNodo + "\"];\n\n";
		
		// Verificar Si Hay Nodos Hijos
		if(this.ArrayNodos.length  > 0) {
			
			// Recorrer Lista De Nodos Hijos
			while(Contador < this.ArrayNodos.length) {
				
				Cadena += "    A_" + this.Identificador + " -> " + "A_" + this.ArrayNodos[Contador].Identificador + "\n";
				Cadena += this.ArrayNodos[Contador].GenerarTxtGrafica();
				Contador++;
	
			}	
			
			
		}		
		
		return Cadena;
	}
	
}