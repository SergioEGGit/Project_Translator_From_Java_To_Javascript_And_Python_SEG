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

	// Metodo Abstracto
    public abstract Traducir(): any;
	
}