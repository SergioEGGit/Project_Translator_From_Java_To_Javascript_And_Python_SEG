// Clase Error

export class NuevoError {
	
	// Declaraciones
	public Identificador: number;
	public Linea: number;
	public Columna: number;
	public Tipo: String;
	public Lexema: String;
	public Descripcion: String;
		
	// Constructor 
	constructor(Identificador: number, Linea: number, Columna: number, Tipo: String, Lexema: String, Descripcion: String) {
		
		// Asignacion
		this.Identificador = Identificador;
		this.Linea = Linea;
		this.Columna = Columna;
		this.Tipo = Tipo;
		this.Lexema = Lexema;
		this.Descripcion = Descripcion;
		
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
	
	// Get Descripcion
	public GetDescripcion() {
		
		return this.Descripcion;
		
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
	
	// Set Descripcion
	public SetDescripcion(Descripcion: String) {
		
		this.Descripcion = Descripcion;
		
	}
	
}