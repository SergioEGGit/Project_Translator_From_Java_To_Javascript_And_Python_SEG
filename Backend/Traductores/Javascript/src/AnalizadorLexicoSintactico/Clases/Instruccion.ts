export abstract class Instruccion{
    public linea:number;// la linea donde esta la instruccion
    public columna:number;//columna de la instruccion

    constructor(linea:number,columna:number){
        this.linea=linea;
        this.columna=columna
    }//solo almacena la linea y columna

    public abstract Traducir():any;//Metodo que traduce XD
	public abstract AST:any;//Informacion que contendra el AST
}
