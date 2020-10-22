// Clase Principal
export abstract class Instruccion {
	
	// Declaraciones
    public Linea: number;
    public Columna: number;

	// Constructor
    constructor(Linea: number, Columna:number) {
		
        this.Linea = Linea;
        this.Columna = Columna
    
	}

	// Metodos Abstractos
    public abstract Traducir(): any;
	public abstract AST: any;	
	
}