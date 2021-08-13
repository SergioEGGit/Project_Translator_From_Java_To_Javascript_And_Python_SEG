// Clase Arbol
export class Arbol {
	
	public Identificador: number;
	public Valor: String;
	public ArrayNodos: any;
	
    constructor(Valor: String) {
		
        this.Identificador = 0;
        this.Valor = Valor;
        this.ArrayNodos = [];

    }
	
	// Agregar Nodo A Lista De Nodos
	AgregarArrayNodo(Nodo: any) {
		
        this.ArrayNodos.push(Nodo);
    
	}    
	
}