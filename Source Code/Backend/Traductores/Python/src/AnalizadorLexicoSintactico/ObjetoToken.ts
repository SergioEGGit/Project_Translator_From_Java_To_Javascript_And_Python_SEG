// Clase Tokens 

export class NuevoToken {
	
	// Declaraciones
	public Identificador: number;
	public Linea: number;
	public Columna: number;
	public Tipo: String;
	public Lexema: String;
		
	// Constructor 
	constructor(Identificador: number, Linea: number, Columna: number, Tipo: String, Lexema: String) {
		
		// Asignacion
		this.Identificador = Identificador;
		this.Linea = Linea;
		this.Columna = Columna;
		this.Tipo = Tipo;
		this.Lexema = Lexema;
		
	}
	
	// Metodos Get Y Set
	
	// Get Identificador
	public GetIdentificador() {
		
		return this.Identificador;
		
	}
	
	// Get Linea
	public GetLinea() {
		
		return this.Linea;
		
	} 
	
	// Get Columna
	public GetColumna() {
		
		return this.Columna;
		
	}
	
	// Get Tipo 
	public GetTipo() {
		
		return this.Tipo;
		
	}
	
	// Get Lexema
	public GetLexema() {
		
		return this.Lexema;
		
	}
		
	// Set Identificador
	public SetIdentificador(Identificador: number) {
		
		this.Identificador = Identificador;
		
	}
	
	// Set Linea
	public SetLinea(Linea: number) {
		
		this.Linea = Linea;
		
	}
	
	// Set Columna
	public SetColumna(Columna: number) {
		
		this.Columna = Columna;
		
	}
	
	// Set Tipo
	public SetTipo(Tipo: String) {
		
		this.Tipo = Tipo;
		
	}
	
	// Set Lexema
	public SetLexema(Lexema: String) {
		
		this.Lexema = Lexema;
		
	}
	
}