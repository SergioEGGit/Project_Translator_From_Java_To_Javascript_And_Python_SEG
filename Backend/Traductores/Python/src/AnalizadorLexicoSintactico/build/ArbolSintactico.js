"use strict";
// imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbolSintactico = void 0;
// Objeto Token
var ObjetoToken_1 = require("./ObjetoToken");
// Objeto Error
var ObjetoArbol_1 = require("./ObjetoArbol");
// Lista De Tokens Y Contador Nodos
var Variables_1 = require("./Variables");
// Declaraciones
// Index Lista De Tokens
var IndexToken = 0;
// Token Pre Analisis
var TokenActual;
// Existe Error Sintactico
var ErrorSintactico = false;
// Bandera Errores Parea
var Recuperacion = true;
// String Que Contiene String
var Traduccion_Total = "";
// Bandera Voy A Traducir
var Traducir = false;
// Tipo Print
var PrintEnd = false;
// Tipo Else 
var ElseIf = false;
// Tengo Main
var Main = false;
// Estoy En For 
var EsFor = false;
// Contador Identificadores 
var ContadorFor = 0;
// Contador Seguro
var SeguroContador = 0;
// Estoy En Do While
var EsDoWhile = false;
// Contador Errores
var ContadorErrores = 1;
// Array De Identacion 
var ArrayIdentacion = new Array();
// Agregar Valor 
var AgregarValor = false;
// Valor String 
var ValorString;
// Nodo Raiz Arbol
var Raiz = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Raiz");
Variables_1.VariablesGlobales.ContadorNodos++;
// Nodo LIsta De Instruccioens
var NodoListaDeInstruccionesIniciales = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Iniciales");
Variables_1.VariablesGlobales.ContadorNodos++;
// Lista De Declaraciones
var NodoListaDeDeclaracionesSintaxis = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones");
Variables_1.VariablesGlobales.ContadorNodos++;
// Expresion
var NodoExpresion = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Expresion");
Variables_1.VariablesGlobales.ContadorNodos++;
// Instrucciones Clase 
var NodoInstruccionesClase = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Clase");
Variables_1.VariablesGlobales.ContadorNodos++;
// Comienzo Analisis Sintactico 
function ArbolSintactico() {
    // Indicar Inicio Analizador
    IndexToken = 0;
    // Token Pre Analisis
    TokenActual: ObjetoToken_1.NuevoToken;
    // Existe Error Sintactico
    ErrorSintactico = false;
    // Bandera Errores Parea
    Recuperacion = true;
    // String Que Contiene String
    Traduccion_Total = "";
    // Bandera Voy A Traducir
    Traducir = false;
    // Tipo Print
    PrintEnd = false;
    // Tipo Else 
    ElseIf = false;
    // Tengo Main
    Main = false;
    // Estoy En For 
    EsFor = false;
    // Contador Identificadores 
    ContadorFor = 0;
    // Contador Seguro
    SeguroContador = 0;
    // Estoy En Do While
    EsDoWhile = false;
    // Contador Errores
    ContadorErrores = 1;
    // Pre Analisis Analizador
    TokenActual = Variables_1.ArrayTokens[IndexToken];
    // Identacion 	 
    ArrayIdentacion = new Array();
    // Contador Nodos 
    Variables_1.VariablesGlobales.ContadorNodos = 0;
    // Agregar Valor 
    AgregarValor = false;
    // Valor String 
    ValorString = "";
    // Nodo Raiz Arbol
    Raiz = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Raiz");
    Variables_1.VariablesGlobales.ContadorNodos++;
    // Nodo LIsta De Instruccioens
    NodoListaDeInstruccionesIniciales = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Iniciales");
    Variables_1.VariablesGlobales.ContadorNodos++;
    // Inicio Analisis
    if (Variables_1.ArrayTokens.length > 0) {
        InicioAnalisis();
    }
    // Formar Grafica 
    var TxtGrafica = "digraph ArbolSintaticoPY { \n\n    node[color = crimson] \n\n" + Raiz.GenerarTxtGrafica() + "\n\n}";
    console.log(TxtGrafica);
}
exports.ArbolSintactico = ArbolSintactico;
// Inicio Analisis
function InicioAnalisis() {
    // Agregar Nodo Inicial
    Raiz.ArrayNodos.push(NodoListaDeInstruccionesIniciales);
    // Instrucciones Principales
    InstruccionInicial();
    // Lista De Instrucciones Principales
    ListaInstruccionesIniciales();
}
// Lista De Instrucciones Iniciales
function ListaInstruccionesIniciales() {
    // Verificar Si Hay Instruccioens 
    if (TokenActual.GetTipo() == "Palabra_Reservada_public" ||
        TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char" ||
        TokenActual.GetTipo() == "Comentario_Unilinea" ||
        TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Instruccion
        InstruccionInicial();
        // Instrucciones Iniciales
        ListaInstruccionesIniciales();
    }
    else {
        if (TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
            // Vacios / Epsilon	
        }
        else {
            // Instruccion
            InstruccionInicial();
            // Instrucciones Iniciales
            ListaInstruccionesIniciales();
        }
    }
}
// Instrucciones Iniciales 
function InstruccionInicial() {
    // Verificar Tipo Instruccion
    if (TokenActual.GetTipo() == "Palabra_Reservada_public") {
        // Clase O Interfaz	
        var NodoDefinicionTipoClase = DefinicionTipoClase();
        NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoDefinicionTipoClase);
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Declaracion
        var NodoDeclaracionVariables = DeclaracionVariables();
        NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoDeclaracionVariables);
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Comentarios Unilinea O Multilinea
        var NodoComentarios = Comentarios();
        NodoListaDeInstruccionesIniciales.ArrayNodos.push(NodoComentarios);
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Fin_De_Cadena") {
        // Vacios / Epsilon	
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Una Clase, Interfaz, Declaracion De Variables O Comentarios");
        Recuperacion = true;
    }
}
// Definicion Tipo Clase (Class / Interface)
function DefinicionTipoClase() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_public");
    var NodoTipoClase = TipoClase();
    return NodoTipoClase;
}
// Tipo Clase (Class / Interface)
function TipoClase() {
    // Verificar Si Es Clase O Interfaz
    if (TokenActual.GetTipo() == "Palabra_Reservada_class") {
        // Clases
        var NodoPalabraPublic = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "public");
        Variables_1.VariablesGlobales.ContadorNodos++;
        var NodoTipoClase = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Tipo_Clase");
        Variables_1.VariablesGlobales.ContadorNodos++;
        var NodoClase = Clase();
        NodoTipoClase.ArrayNodos.push(NodoPalabraPublic);
        NodoTipoClase.ArrayNodos.push(NodoClase);
        Recuperacion = true;
        return NodoTipoClase;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_interface") {
        // Interfaces
        var NodoPalabraPublic = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "public");
        Variables_1.VariablesGlobales.ContadorNodos++;
        var NodoTipoClase = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Tipo_Clase");
        Variables_1.VariablesGlobales.ContadorNodos++;
        var NodoInterfaz = Interfaz();
        NodoTipoClase.ArrayNodos.push(NodoPalabraPublic);
        NodoTipoClase.ArrayNodos.push(NodoInterfaz);
        Recuperacion = true;
        return NodoTipoClase;
    }
    else {
        // Error Sintactico
        ErroresSintactico("La Palabra class o interface");
        //Recuperacion = true;
    }
}
// Clase
function Clase() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_class");
    AgregarValor = true;
    PrincipalParea("Identificador");
    PrincipalParea("Simbolo_Llave_Apertura");
    var NodoClase = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Clase");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "class");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis2 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis3 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "{");
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoClase.ArrayNodos.push(Sintaxis1);
    NodoClase.ArrayNodos.push(Sintaxis2);
    NodoClase.ArrayNodos.push(Sintaxis3);
    NodoInstruccionesClase = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Lista_Instrucciones_Clase");
    Variables_1.VariablesGlobales.ContadorNodos++;
    ListaInstruccionesClase();
    var Sintaxis4 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "}");
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoClase.ArrayNodos.push(NodoInstruccionesClase);
    NodoClase.ArrayNodos.push(Sintaxis4);
    PrincipalParea("Simbolo_Llave_Cierre");
    return NodoClase;
}
// Interfaz
function Interfaz() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_interface");
    AgregarValor = true;
    PrincipalParea("Identificador");
    PrincipalParea("Simbolo_Llave_Apertura");
    var NodoInterfaz = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Interfaz");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "interface");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis2 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis3 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "{");
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoInterfaz.ArrayNodos.push(Sintaxis1);
    NodoInterfaz.ArrayNodos.push(Sintaxis2);
    NodoInterfaz.ArrayNodos.push(Sintaxis3);
    ListaInstruccionesInterfaz();
    var Sintaxis4 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "}");
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoInterfaz.ArrayNodos.push(Sintaxis4);
    PrincipalParea("Simbolo_Llave_Cierre");
    return NodoInterfaz;
}
// Tipos De Datos
function TipoDeDatos() {
    // Verificar Tipo De Dato
    if (TokenActual.GetTipo() == "Palabra_Reservada_int") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_int");
        var NodoInt = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "int");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoInt;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_boolean") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_boolean");
        var NodoBoolean = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "boolean");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoBoolean;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_Boolean") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_Boolean");
        var NodoBoolean = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Boolean");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoBoolean;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_double") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_double");
        var NodoDouble = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "double");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoDouble;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_string") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_string");
        var NodoString = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "string");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoString;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_String") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_String");
        var NodoString = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "String");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoString;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Metodo Parea 
        PrincipalParea("Palabra_Reservada_char");
        var NodoChar = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "char");
        Variables_1.VariablesGlobales.ContadorNodos++;
        return NodoChar;
    }
    else {
        // Error Sintactico
        ErroresSintactico("Un Tipo De Dato");
        // Recuperacion = true;
    }
}
// Declaracion De Variables
function DeclaracionVariables() {
    // Estructura Sintactica
    var NodoDeclaracionVariables = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Declaracion_De_Variables");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Tipo_De_Dato");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var TipoDato = TipoDeDatos();
    Sintaxis1.ArrayNodos.push(TipoDato);
    AgregarValor = true;
    PrincipalParea("Identificador");
    NodoListaDeDeclaracionesSintaxis = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Lista_De_Declaraciones");
    Variables_1.VariablesGlobales.ContadorNodos++;
    var Sintaxis2 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoDeclaracionVariables.ArrayNodos.push(Sintaxis1);
    NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(Sintaxis2);
    AsignacionDeclaracion();
    ListaDeDeclaraciones();
    NodoDeclaracionVariables.ArrayNodos.push(NodoListaDeDeclaracionesSintaxis);
    var Sintaxis5 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ";");
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoDeclaracionVariables.ArrayNodos.push(Sintaxis5);
    PrincipalParea("Simbolo_PuntoYComa");
    return NodoDeclaracionVariables;
}
// Lista De Declaraciones
function ListaDeDeclaraciones() {
    // Verificar Si Hay Coma
    if (TokenActual.GetTipo() == "Simbolo_Coma") {
        // Lista De Declaraciones
        ListaDeDeclaracionesSintaxis();
    }
    else {
        // Vacio / Epsilon
    }
}
// Lista De Declaraciones Sintaxis
function ListaDeDeclaracionesSintaxis() {
    // Estructura Sintactica
    PrincipalParea("Simbolo_Coma");
    var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ",");
    Variables_1.VariablesGlobales.ContadorNodos++;
    AgregarValor = true;
    PrincipalParea("Identificador");
    var Sintaxis2 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(Sintaxis1);
    NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(Sintaxis2);
    AsignacionDeclaracion();
    ListaDeDeclaraciones();
}
// Asingacion De Declaraciones
function AsignacionDeclaracion() {
    // Verificar Si Hay Signo Igual
    if (TokenActual.GetTipo() == "Simbolo_Igual") {
        // Asignacion
        AsignacionDeclaracionSintaxis();
    }
    else {
        // Vacio / Epsilon
    }
}
// Asignacion Declaracion Sintaxis
function AsignacionDeclaracionSintaxis() {
    // Estructura Sintactica
    PrincipalParea("Simbolo_Igual");
    var NodoAsignacionDeclaracionSintaxis = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "=");
    Variables_1.VariablesGlobales.ContadorNodos++;
    NodoExpresion = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Expresion");
    Variables_1.VariablesGlobales.ContadorNodos++;
    Expr();
    NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(NodoAsignacionDeclaracionSintaxis);
    NodoListaDeDeclaracionesSintaxis.ArrayNodos.push(NodoExpresion);
}
// Comentarios
function Comentarios() {
    // Declaraciones
    var Comentario = "";
    var NodoComentarios = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "Comentario");
    Variables_1.VariablesGlobales.ContadorNodos++;
    // Estructura Sintactica
    if (TokenActual.GetTipo() == "Comentario_Unilinea") {
        // Comentario Unilinea
        // Comentario		
        Comentario = TokenActual.GetLexema().toString();
        // Metodo Parea
        PrincipalParea("Comentario_Unilinea");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, Comentario);
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoComentarios.ArrayNodos.push(Sintaxis1);
        return NodoComentarios;
    }
    else if (TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Comentario Multilinea
        // Comentario 
        Comentario = TokenActual.GetLexema().toString();
        // Metodo Parea
        PrincipalParea("Comentario_Multilinea");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, Comentario);
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoComentarios.ArrayNodos.push(Sintaxis1);
        return NodoComentarios;
    }
    else {
        ErroresSintactico("Un Tipo De Comentario");
        //Recuperacion = true;
    }
}
// Lista De Instrucciones Clase
function ListaInstruccionesClase() {
    // Verificar Si Hay Mas Instrucciones
    if (TokenActual.GetTipo() == "Palabra_Reservada_public" ||
        TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char" ||
        TokenActual.GetTipo() == "Comentario_Unilinea" ||
        TokenActual.GetTipo() == "Comentario_Multilinea" ||
        TokenActual.GetTipo() == "Identificador") {
        // Instruccion
        InstruccionClase();
        // Instrucciones Iniciales
        ListaInstruccionesClase();
    }
    else {
        if (TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
            // Vacios / Epsilon	
        }
        else {
            // Instruccion
            InstruccionClase();
            // Instrucciones Iniciales
            ListaInstruccionesClase();
        }
    }
}
// Instrucciones Clase 
function InstruccionClase() {
    // Verificar Tipo Instruccion
    if (TokenActual.GetTipo() == "Palabra_Reservada_public") {
        // Clase O Funcion
        var NodoDefinicionesClase = DefinicionesClase();
        NodoInstruccionesClase.ArrayNodos.push(NodoDefinicionesClase);
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Declaracion
        var NodoDeclaracionVariables = DeclaracionVariables();
        NodoInstruccionesClase.ArrayNodos.push(NodoDeclaracionVariables);
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Identificador") {
        // Declaracion
        Asignacion();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Comentarios Unilinea O Multilinea
        var NodoComentarios = Comentarios();
        NodoInstruccionesClase.ArrayNodos.push(NodoComentarios);
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Fin_De_Cadena") {
        // Vacios / Epsilon	
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Una Clase, Funcion, Declaracion De Variables, Comentarios O Asignacion De Variables");
        Recuperacion = true;
    }
}
// Asignacion
function Asignacion() {
    // Estructura Sintactica
    Traducir = true;
    Traduccion_Total += AgregarIdentacion();
    PrincipalParea("Identificador");
    TipoAsignacion();
}
// Tipo Asigancion
function TipoAsignacion() {
    // Verificar Si Es Asignacion Normal O ++ O --
    if (TokenActual.GetTipo() == "Simbolo_Igual") {
        // Asignacion
        PrincipalParea("Simbolo_Igual");
        Traduccion_Total += " = ";
        Expr();
        PrincipalParea("Simbolo_PuntoYComa");
        Traduccion_Total += "\n\n";
    }
    else if (TokenActual.GetTipo() == "Simbolo_Mas") {
        // Incremento
        PrincipalParea("Simbolo_Mas");
        PrincipalParea("Simbolo_Mas");
        Traduccion_Total += " += 1";
        PrincipalParea("Simbolo_PuntoYComa");
        Traduccion_Total += "\n\n";
    }
    else if (TokenActual.GetTipo() == "Simbolo_Menos") {
        // Decremento
        PrincipalParea("Simbolo_Menos");
        PrincipalParea("Simbolo_Menos");
        Traduccion_Total += " -= 1";
        PrincipalParea("Simbolo_PuntoYComa");
        Traduccion_Total += "\n\n";
    }
    else if (TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
        // Funcion
        PrincipalParea("Simbolo_Parentesis_Apertura");
        Traduccion_Total += "(";
        ValorFuncion();
        PrincipalParea("Simbolo_Parentesis_Cierre");
        Traduccion_Total += ") \n\n";
        PrincipalParea("Simbolo_PuntoYComa");
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Una Asignacion, Incremento, Decremento O Llamada A Una Funcion");
        //Recuperacion = true;
    }
}
// Lista De Instrucciones Interfaz
function ListaInstruccionesInterfaz() {
    // Verificar Si Hay Mas Instrucciones
    if (TokenActual.GetTipo() == "Palabra_Reservada_public" ||
        TokenActual.GetTipo() == "Comentario_Unilinea" ||
        TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Instruccion
        InstruccionInterfaz();
        // Instrucciones Iniciales
        ListaInstruccionesInterfaz();
    }
    else {
        if (TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
            // Vacios / Epsilon	
        }
        else {
            // Instruccion
            InstruccionInterfaz();
            // Instrucciones Iniciales
            ListaInstruccionesInterfaz();
        }
    }
}
// Instrucciones Iniciales 
function InstruccionInterfaz() {
    // Verificar Tipo Instruccion
    if (TokenActual.GetTipo() == "Palabra_Reservada_public") {
        // Clase O Interfaz
        DefinicionFunciones();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Comentarios Unilinea O Multilinea
        Comentarios();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Fin_De_Cadena") {
        // Vacios / Epsilon	
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Una Declaracion De Funcion O Comentarios");
        Recuperacion = true;
    }
}
// Definicio Funciones
function DefinicionFunciones() {
    // Estructura Lexica
    PrincipalParea("Palabra_Reservada_public");
    TipoFuncion();
}
// Definicion Funciones
function TipoFuncion() {
    // Verificar Si Es Void O Tipo De Dato
    if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Funcion Tipo De Dato
        DeclaracionFuncionTipo();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_void") {
        DeclaracionFuncionVoid();
        Recuperacion = true;
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("La Palabra void o Un Tipo De Dato");
        //Recuperacion = true;
    }
}
// Definicion Funcion Tipo De Dato
function DeclaracionFuncionTipo() {
    // Estructura Sintactica
    TipoDeDatos();
    Traduccion_Total += AgregarIdentacion() + "def ";
    Traducir = true;
    PrincipalParea("Identificador");
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Traduccion_Total += "(";
    Parametro();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ") \n\n";
    PrincipalParea("Simbolo_PuntoYComa");
}
// Funcion Void 
function DeclaracionFuncionVoid() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_void");
    Traduccion_Total += AgregarIdentacion() + "def ";
    Traducir = true;
    PrincipalParea("Identificador");
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Traduccion_Total += "(";
    Parametro();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ") \n\n";
    PrincipalParea("Simbolo_PuntoYComa");
}
// Definicio Clase 
function DefinicionesClase() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_public");
    var NodoTipoDefinicionesClase = TipoDefinicionesClase();
    return NodoTipoDefinicionesClase;
}
// Tipo De Definiciones Dentro De Un Clase
function TipoDefinicionesClase() {
    // Verificar Palabra
    if (TokenActual.GetTipo() == "Palabra_Reservada_class") {
        // Clase 		
        var NodoClase = Clase();
        Recuperacion = true;
        return NodoClase;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char" ||
        TokenActual.GetTipo() == "Palabra_Reservada_void" ||
        TokenActual.GetTipo() == "Palabra_Reservada_static") {
        // Funcion
        Funcion();
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Se Esperar La Palabra class, void, static O Un Tipo De Dato");
        //Recuperacion = true;
    }
}
// Funcion
function Funcion() {
    // Verificar Si Es Void O Tipo De Dato
    if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Funcion Tipo De Dato
        FuncionTipoDeDato();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_void") {
        // Funcion Void 
        FuncionVoid();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_static") {
        // Funcion Main
        FuncionMain();
        Recuperacion = true;
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("La Palabra void, static O Un Tipo De Dato");
        //Recuperacion = true;
    }
}
// Funcion Tipo De Dato
function FuncionTipoDeDato() {
    // Estructura Sintactica
    TipoDeDatos();
    Traduccion_Total += AgregarIdentacion() + "def ";
    Traducir = true;
    PrincipalParea("Identificador");
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Traduccion_Total += "(";
    Parametro();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ")";
    PrincipalParea("Simbolo_Llave_Apertura");
    Traduccion_Total += ":\n\n";
    ArrayIdentacion.push(" ");
    ListaInstruccionesFuncion();
    PrincipalParea("Simbolo_Llave_Cierre");
    Traduccion_Total += "\n\n";
    ArrayIdentacion.pop();
}
// Funcion Void 
function FuncionVoid() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_void");
    Traduccion_Total += AgregarIdentacion() + "def ";
    Traducir = true;
    PrincipalParea("Identificador");
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Traduccion_Total += "(";
    Parametro();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ")";
    PrincipalParea("Simbolo_Llave_Apertura");
    Traduccion_Total += ":\n\n ";
    ArrayIdentacion.push(" ");
    ListaInstruccionesFuncion();
    PrincipalParea("Simbolo_Llave_Cierre");
    Traduccion_Total += "\n\n";
    ArrayIdentacion.pop();
}
// Parametros
function Parametro() {
    // Verificar Si Hay Parametro
    if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Parametro
        ParametroSintaxis();
    }
    else {
        // Vacios Epsilon
    }
}
// Parametros Sintaxis
function ParametroSintaxis() {
    // Estructura Sintatica
    TipoDeDatos();
    Traducir = true;
    PrincipalParea("Identificador");
    ListaParametros();
}
// Lista De Parametros
function ListaParametros() {
    // Verificar Si Hay Coma
    if (TokenActual.GetTipo() == "Simbolo_Coma") {
        // Lista De Declaraciones
        ListaParametrosSintaxis();
    }
    else {
        // Vacio / Epsilon
    }
}
// Lista De Parametros Sintaxis
function ListaParametrosSintaxis() {
    // Estructura Sintactica
    PrincipalParea("Simbolo_Coma");
    Traduccion_Total += ", ";
    TipoDeDatos();
    Traducir = true;
    PrincipalParea("Identificador");
    ListaParametros();
}
// Funcion Main
function FuncionMain() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_static");
    PrincipalParea("Palabra_Reservada_void");
    PrincipalParea("Palabra_Reservada_main");
    PrincipalParea("Simbolo_Parentesis_Apertura");
    PrincipalParea("Palabra_Reservada_String");
    PrincipalParea("Simbolo_Corchete_Apertura");
    PrincipalParea("Simbolo_Corchete_Cierre");
    PrincipalParea("Palabra_Reservada_args");
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += AgregarIdentacion() + "def main():\n\n";
    Main = true;
    PrincipalParea("Simbolo_Llave_Apertura");
    ArrayIdentacion.push(" ");
    ListaInstruccionesFuncion();
    PrincipalParea("Simbolo_Llave_Cierre");
    ArrayIdentacion.pop();
}
// Lista De Instrucciones Funcion
function ListaInstruccionesFuncion() {
    // Verificar Si Hay Mas Instrucciones
    if (TokenActual.GetTipo() == "Palabra_Reservada_System" ||
        TokenActual.GetTipo() == "Palabra_Reservada_if" ||
        TokenActual.GetTipo() == "Palabra_Reservada_for" ||
        TokenActual.GetTipo() == "Palabra_Reservada_do" ||
        TokenActual.GetTipo() == "Palabra_Reservada_while" ||
        TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char" ||
        TokenActual.GetTipo() == "Identificador" ||
        TokenActual.GetTipo() == "Comentario_Unilinea" ||
        TokenActual.GetTipo() == "Comentario_Multilinea" ||
        TokenActual.GetTipo() == "Palabra_Reservada_return") {
        // Instruccion
        InstruccionFuncion();
        // Instrucciones Iniciales
        ListaInstruccionesFuncion();
    }
    else {
        if (TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
            // Vacios / Epsilon	
        }
        else {
            // Instruccion
            InstruccionFuncion();
            // Instrucciones Iniciales
            ListaInstruccionesFuncion();
        }
    }
}
// Instrucciones Funcion 
function InstruccionFuncion() {
    // Verificar Tipo Instruccion
    if (TokenActual.GetTipo() == "Palabra_Reservada_System") {
        // Print
        Print();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_if") {
        // If
        If();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_for") {
        // For
        For();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_do") {
        // Do While
        DoWhile();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_while") {
        // While
        While();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // While
        DeclaracionVariables();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Comentarios Unilinea O Multilinea
        Comentarios();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Identificador") {
        // Asignacion
        Asignacion();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_return") {
        // Sentencia Return
        Return();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_public") {
        // Funciones
        FuncionAnidada();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Fin_De_Cadena") {
        // Vacios / Epsilon	
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Una Funcion, Tipo De Ciclo, Asignacion, Declaracion De Variables, Comentarios, If, Print O Un Retorno");
        Recuperacion = true;
    }
}
// Print
function Print() {
    PrincipalParea("Palabra_Reservada_System");
    PrincipalParea("Simbolo_Punto");
    PrincipalParea("Palabra_Reservada_out");
    PrincipalParea("Simbolo_Punto");
    TipoPrint();
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Traduccion_Total += AgregarIdentacion() + "print(";
    Expr();
    // Tipo De Print
    if (PrintEnd) {
        Traduccion_Total += " , end=\"\"";
    }
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ") \n\n";
    PrincipalParea("Simbolo_PuntoYComa");
}
// Tipo Print
function TipoPrint() {
    // Verificar Tipo De Print
    if (TokenActual.GetTipo() == "Palabra_Reservada_println") {
        PrincipalParea("Palabra_Reservada_println");
        PrintEnd = false;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_print") {
        PrincipalParea("Palabra_Reservada_print");
        PrintEnd = true;
    }
    else {
        PrincipalParea("La Palabra print O println");
        //Recuperacion = true;
    }
}
// If 
function If() {
    // Estructura Sintactica	
    if (EsDoWhile && !Recuperacion) {
        Recuperacion = true;
    }
    PrincipalParea("Palabra_Reservada_if");
    // Verficar Si Es If O Else If
    if (ElseIf) {
        Traduccion_Total += AgregarIdentacion() + "elif ";
    }
    else {
        Traduccion_Total += AgregarIdentacion() + "if ";
    }
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Expr();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    PrincipalParea("Simbolo_Llave_Apertura");
    Traduccion_Total += " :\n\n";
    ArrayIdentacion.push(" ");
    ListaInstruccionesCiclosIf();
    PrincipalParea("Simbolo_Llave_Cierre");
    Traduccion_Total += "\n\n";
    ArrayIdentacion.pop();
    ElseIf = false;
    Else();
}
// Else 
function Else() {
    if (TokenActual.GetTipo() == "Palabra_Reservada_else") {
        // Estructura Sintactica
        PrincipalParea("Palabra_Reservada_else");
        TipoElse();
    }
    else {
        // Vacios / Epsilon
    }
}
// Tipo De Else 
function TipoElse() {
    // Verificar Si Es Else If O Else
    if (TokenActual.GetTipo() == "Simbolo_Llave_Apertura") {
        // Estructura Sintactica
        PrincipalParea("Simbolo_Llave_Apertura");
        Traduccion_Total += AgregarIdentacion() + "else:\n\n";
        ArrayIdentacion.push(" ");
        ListaInstruccionesCiclosIf();
        PrincipalParea("Simbolo_Llave_Cierre");
        Traduccion_Total += "\n\n";
        ArrayIdentacion.pop();
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_if") {
        // Estructura Sintactica
        ElseIf = true;
        If();
    }
    else {
        PrincipalParea("La Palabra if O Llave De Apertura");
        //Recuperacion = true;
    }
}
// For 
function For() {
    // Estructura Sintactica
    if (EsDoWhile && !Recuperacion) {
        Recuperacion = true;
    }
    PrincipalParea("Palabra_Reservada_for");
    Traduccion_Total += AgregarIdentacion() + "for ";
    PrincipalParea("Simbolo_Parentesis_Apertura");
    DeclaracionFor();
    Traduccion_Total += ", ";
    Expr();
    PrincipalParea("Simbolo_PuntoYComa");
    EsFor = true;
    Expr();
    Traduccion_Total += "):\n\n";
    EsFor = false;
    ContadorFor = 0;
    PrincipalParea("Simbolo_Parentesis_Cierre");
    PrincipalParea("Simbolo_Llave_Apertura");
    ArrayIdentacion.push(" ");
    ListaInstruccionesCiclosIf();
    PrincipalParea("Simbolo_Llave_Cierre");
    ArrayIdentacion.pop();
}
// Declaracion For
function DeclaracionFor() {
    // Estructura Sintactica
    TipoDeDatos();
    Traducir = true;
    PrincipalParea("Identificador");
    Traduccion_Total += " in range(";
    AsignacionDeclaracionFor();
    ListaDeDeclaracionesFor();
    PrincipalParea("Simbolo_PuntoYComa");
}
// Lista De Declaraciones
function ListaDeDeclaracionesFor() {
    // Verificar Si Hay Coma
    if (TokenActual.GetTipo() == "Simbolo_Coma") {
        // Lista De Declaraciones
        ListaDeDeclaracionesSintaxisFor();
    }
    else {
        // Vacio / Epsilon
    }
}
// Lista De Declaraciones Sintaxis
function ListaDeDeclaracionesSintaxisFor() {
    // Estructura Sintactica
    PrincipalParea("Simbolo_Coma");
    PrincipalParea("Identificador");
    AsignacionDeclaracionFor();
    ListaDeDeclaracionesFor();
}
// Asingacion De Declaraciones For
function AsignacionDeclaracionFor() {
    // Verificar Si Hay Signo Igual
    if (TokenActual.GetTipo() == "Simbolo_Igual") {
        // Asignacion
        AsignacionDeclaracionSintaxisFor();
    }
    else {
        // Vacio / Epsilon
    }
}
// Asignacion Declaracion Sintaxis For
function AsignacionDeclaracionSintaxisFor() {
    // Estructura Sintactica
    PrincipalParea("Simbolo_Igual");
    if (ContadorFor >= 1) {
        EsFor = true;
    }
    Expr();
    ContadorFor++;
    EsFor = false;
}
// Do While 
function DoWhile() {
    // Estructura Sintactica 
    EsDoWhile = true;
    if (EsDoWhile && !Recuperacion) {
        Recuperacion = true;
    }
    PrincipalParea("Palabra_Reservada_do");
    Traduccion_Total += AgregarIdentacion() + "while True :\n\n";
    PrincipalParea("Simbolo_Llave_Apertura");
    ArrayIdentacion.push(" ");
    ListaInstruccionesCiclosIf();
    PrincipalParea("Simbolo_Llave_Cierre");
    Traduccion_Total += AgregarIdentacion() + "if ";
    ArrayIdentacion.pop();
    PrincipalParea("Palabra_Reservada_while");
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Expr();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ":\n\n";
    ArrayIdentacion.push(" ");
    ArrayIdentacion.push(" ");
    PrincipalParea("Simbolo_PuntoYComa");
    Traduccion_Total += AgregarIdentacion() + "continue\n\n";
    ArrayIdentacion.pop();
    Traduccion_Total += AgregarIdentacion() + "else: \n\n";
    ArrayIdentacion.push(" ");
    Traduccion_Total += AgregarIdentacion() + "break \n\n";
    ArrayIdentacion.pop();
    ArrayIdentacion.pop();
    EsDoWhile = false;
}
// While 
function While() {
    // Estructura Sintactica
    if (EsDoWhile && !Recuperacion) {
        Recuperacion = true;
    }
    PrincipalParea("Palabra_Reservada_while");
    Traduccion_Total += AgregarIdentacion() + "while ";
    PrincipalParea("Simbolo_Parentesis_Apertura");
    Expr();
    PrincipalParea("Simbolo_Parentesis_Cierre");
    Traduccion_Total += ":\n\n";
    PrincipalParea("Simbolo_Llave_Apertura");
    ArrayIdentacion.push(" ");
    ListaInstruccionesCiclosIf();
    PrincipalParea("Simbolo_Llave_Cierre");
    ArrayIdentacion.pop();
}
// Return 
function Return() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_return");
    Traduccion_Total += AgregarIdentacion() + "return ";
    TipoReturn();
}
// Tipo Return 
function TipoReturn() {
    // Estructura Sintactica 
    if (TokenActual.GetTipo() == "Simbolo_PuntoYComa") {
        PrincipalParea("Simbolo_PuntoYComa");
        Traduccion_Total += "\n\n";
    }
    else {
        Expr();
        PrincipalParea("Simbolo_PuntoYComa");
        Traduccion_Total += "\n\n";
    }
}
// Funcion Anidada
function FuncionAnidada() {
    // Estructura Sintactica
    PrincipalParea("Palabra_Reservada_public");
    TipoFuncionAnidada();
}
// Tipo Funcion Anidada
function TipoFuncionAnidada() {
    // Verificar Si Es Void O Tipo De Dato
    if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // Funcion Tipo De Dato
        FuncionTipoDeDato();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_void") {
        // Funcion Void 
        FuncionVoid();
        Recuperacion = true;
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("La Palabra void O Un Tipo De Dato");
        //Recuperacion = true;
    }
}
// Lista De Instrucciones Ciclos If 
function ListaInstruccionesCiclosIf() {
    // Verificar Si Hay Mas Instrucciones
    if (TokenActual.GetTipo() == "Palabra_Reservada_System" ||
        TokenActual.GetTipo() == "Palabra_Reservada_if" ||
        TokenActual.GetTipo() == "Palabra_Reservada_for" ||
        TokenActual.GetTipo() == "Palabra_Reservada_do" ||
        TokenActual.GetTipo() == "Palabra_Reservada_while" ||
        TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char" ||
        TokenActual.GetTipo() == "Identificador" ||
        TokenActual.GetTipo() == "Comentario_Unilinea" ||
        TokenActual.GetTipo() == "Comentario_Multilinea" ||
        TokenActual.GetTipo() == "Palabra_Reservada_return" ||
        TokenActual.GetTipo() == "Palabra_Reservada_break" ||
        TokenActual.GetTipo() == "Palabra_Reservada_continue") {
        // Instruccion
        InstruccionCiclosIf();
        // Instrucciones Iniciales
        ListaInstruccionesCiclosIf();
    }
    else {
        if (TokenActual.GetTipo() == "Fin_De_Cadena" || TokenActual.GetTipo() == "Simbolo_Llave_Cierre") {
            // Vacios / Epsilon	
        }
        else {
            // Instruccion
            InstruccionCiclosIf();
            // Instrucciones Iniciales
            ListaInstruccionesCiclosIf();
        }
    }
}
// Instrucciones Funcion 
function InstruccionCiclosIf() {
    // Verificar Tipo Instruccion
    if (TokenActual.GetTipo() == "Palabra_Reservada_System") {
        // Print
        Print();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_if") {
        // If
        If();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_for") {
        // For
        For();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_do") {
        // Do While
        DoWhile();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_while") {
        // While
        While();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_int" ||
        TokenActual.GetTipo() == "Palabra_Reservada_boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_Boolean" ||
        TokenActual.GetTipo() == "Palabra_Reservada_string" ||
        TokenActual.GetTipo() == "Palabra_Reservada_String" ||
        TokenActual.GetTipo() == "Palabra_Reservada_double" ||
        TokenActual.GetTipo() == "Palabra_Reservada_char") {
        // While
        DeclaracionVariables();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Comentario_Unilinea" || TokenActual.GetTipo() == "Comentario_Multilinea") {
        // Comentarios Unilinea O Multilinea
        Comentarios();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Identificador") {
        // Asignacion
        Asignacion();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_return") {
        // Return
        Return();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_break" || TokenActual.GetTipo() == "Palabra_Reservada_continue") {
        // Sentencias Ciclos
        SenteciasCiclos();
        Recuperacion = true;
    }
    else if (TokenActual.GetTipo() == "Fin_De_Cadena") {
        // Vacios / Epsilon	
    }
    else {
        // Errores Sintacticos
        ErroresSintactico("Un Tipo De Ciclo, Asignacion, Declaracion De Variables, Comentarios, If, Print, Retorno O Una Sentencia De Ciclos");
        Recuperacion = true;
    }
}
// Sentencias Ciclos
function SenteciasCiclos() {
    // Estructura Sintactica 
    if (TokenActual.GetTipo() == "Palabra_Reservada_break") {
        // Estructura Sintactica
        PrincipalParea("Palabra_Reservada_break");
        Traduccion_Total += AgregarIdentacion() + "break \n\n";
        PrincipalParea("Simbolo_PuntoYComa");
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_continue") {
        // Estructura Sintactica
        PrincipalParea("Palabra_Reservada_continue");
        Traduccion_Total += AgregarIdentacion() + "continue \n\n";
        PrincipalParea("Simbolo_PuntoYComa");
    }
}
// Expresiones
function Expr() {
    // Estructura Sintactica 
    ExprR();
    SumaResta();
}
function ExprR() {
    // Estructura Sintactica
    Valores();
    MultiplicacionDivision();
}
function SumaResta() {
    // Verificar Si Es Mas O Menos
    if (TokenActual.GetTipo() == "Simbolo_Mas") {
        PrincipalParea("Simbolo_Mas");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "+");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_Menos") {
        PrincipalParea("Simbolo_Menos");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "-");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_Or") {
        PrincipalParea("Simbolo_Or");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "||");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_Xor") {
        PrincipalParea("Simbolo_Xor");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "^");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_MayorIgualQue") {
        PrincipalParea("Simbolo_MayorIgualQue");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ">=");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_MenorIgualQue") {
        PrincipalParea("Simbolo_MenorIgualQue");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "<=");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_MenorQue") {
        PrincipalParea("Simbolo_MenorQue");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "<");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_MayorQue") {
        PrincipalParea("Simbolo_MayorQue");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ">");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_DobleIgual") {
        PrincipalParea("Simbolo_DobleIgual");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "==");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else if (TokenActual.GetTipo() == "Simbolo_Diferente") {
        PrincipalParea("Simbolo_Diferente");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "!=");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ExprR();
        SumaResta();
    }
    else {
        // Vacios / Epsilon
    }
}
function MultiplicacionDivision() {
    // Verficar Si Es Multiplicacion O Division
    if (TokenActual.GetTipo() == "Simbolo_Por") {
        PrincipalParea("Simbolo_Por");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "*");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Valores();
        MultiplicacionDivision();
    }
    else if (TokenActual.GetTipo() == "Simbolo_Dividido") {
        PrincipalParea("Simbolo_Dividido");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "/");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Valores();
        MultiplicacionDivision();
    }
    else if (TokenActual.GetTipo() == "Simbolo_And") {
        PrincipalParea("Simbolo_And");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "&&");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Valores();
        MultiplicacionDivision();
    }
    else {
        // Vacios / Epsilon
    }
}
function Valores() {
    // Verificar Tipo De Valor
    if (TokenActual.GetTipo() == "Numero") {
        AgregarValor = true;
        PrincipalParea("Numero");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_true") {
        PrincipalParea("Palabra_Reservada_true");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "true");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Palabra_Reservada_false") {
        PrincipalParea("Palabra_Reservada_false");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "false");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Identificador") {
        AgregarValor = true;
        PrincipalParea("Identificador");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ValoresIdentificador();
    }
    else if (TokenActual.GetTipo() == "Cadena_De_Texto") {
        AgregarValor = true;
        PrincipalParea("Cadena_De_Texto");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
        PrincipalParea("Simbolo_Parentesis_Apertura");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "(");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Expr();
        PrincipalParea("Simbolo_Parentesis_Cierre");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ")");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Simbolo_Menos") {
        PrincipalParea("Simbolo_Menos");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "-");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Expr();
    }
    else if (TokenActual.GetTipo() == "Simbolo_Negacion") {
        PrincipalParea("Simbolo_Negacion");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "!");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Expr();
    }
    else {
        // Erroers Sintacticos
        ErroresSintactico("Algun Tipo De Valor");
        //Recuperacion = true;
    }
}
function ValoresIdentificador() {
    // Verificar Tipo
    if (TokenActual.GetTipo() == "Simbolo_Punto") {
        PrincipalParea("Simbolo_Punto");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ".");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        AgregarValor = true;
        PrincipalParea("Identificador");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ValorString);
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        PrincipalParea("Simbolo_Parentesis_Apertura");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "(");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ValorFuncion();
        PrincipalParea("Simbolo_Parentesis_Cierre");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ")");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
        PrincipalParea("Simbolo_Parentesis_Apertura");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "(");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        ValorFuncion();
        PrincipalParea("Simbolo_Parentesis_Cierre");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ")");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
    }
    else if (TokenActual.GetTipo() == "Simbolo_Mas") {
        if (IndexToken < Variables_1.ArrayTokens.length - 1) {
            if (Variables_1.ArrayTokens[IndexToken + 1].GetTipo() == "Simbolo_Mas") {
                PrincipalParea("Simbolo_Mas");
                var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "+");
                Variables_1.VariablesGlobales.ContadorNodos++;
                NodoExpresion.ArrayNodos.push(Sintaxis1);
                PrincipalParea("Simbolo_Mas");
                var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "+");
                Variables_1.VariablesGlobales.ContadorNodos++;
                NodoExpresion.ArrayNodos.push(Sintaxis1);
            }
        }
    }
    else if (TokenActual.GetTipo() == "Simbolo_Menos") {
        if (IndexToken < Variables_1.ArrayTokens.length - 1) {
            if (Variables_1.ArrayTokens[IndexToken + 1].GetTipo() == "Simbolo_Menos") {
                PrincipalParea("Simbolo_Menos");
                var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "-");
                Variables_1.VariablesGlobales.ContadorNodos++;
                NodoExpresion.ArrayNodos.push(Sintaxis1);
                PrincipalParea("Simbolo_Menos");
                var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, "-");
                Variables_1.VariablesGlobales.ContadorNodos++;
                NodoExpresion.ArrayNodos.push(Sintaxis1);
            }
        }
    }
    else {
        // Vacios / Epsilon
    }
}
function ValorFuncion() {
    // Verficar Si Hay Valor 
    if (TokenActual.GetTipo() == "Numero" ||
        TokenActual.GetTipo() == "Palabra_Reservada_true" ||
        TokenActual.GetTipo() == "Palabra_Reservada_false" ||
        TokenActual.GetTipo() == "Identificador" ||
        TokenActual.GetTipo() == "Cadena_De_Texto" ||
        TokenActual.GetTipo() == "Simbolo_Parentesis_Apertura") {
        // Lista De Valores 
        Expr();
        ListaDeValores();
    }
    else {
        // Vacios / Epsilon
    }
}
function ListaDeValores() {
    // Verficar Si Hay Coma 
    if (TokenActual.GetTipo() == "Simbolo_Coma") {
        PrincipalParea("Simbolo_Coma");
        var Sintaxis1 = new ObjetoArbol_1.NodoArbol(Variables_1.VariablesGlobales.ContadorNodos, ",");
        Variables_1.VariablesGlobales.ContadorNodos++;
        NodoExpresion.ArrayNodos.push(Sintaxis1);
        Expr();
        ListaDeValores();
    }
    else {
        // Vacios / Epsilon
    }
}
// Errores Sintacticos
function ErroresSintactico(TipoError) {
    // Metodo Parea	
    PrincipalParea(TipoError);
}
// Metodo Parea 
function PrincipalParea(TipoToken) {
    // Verificar Si Hay Errores Sintacticos
    if (Recuperacion) {
        // Verificar Si Es El Token Esperado
        if (TokenActual.GetTipo() == TipoToken) {
            // Voy A Traducir
            if (AgregarValor) {
                ValorString = TokenActual.GetLexema();
                AgregarValor = false;
            }
            // Verificar Si Tengo Que Avanzar Token
            if (IndexToken < Variables_1.ArrayTokens.length - 1) {
                // Avanzo En La Lista De Tokens
                IndexToken++;
                TokenActual = Variables_1.ArrayTokens[IndexToken];
            }
            /*if(IndexToken == ArrayTokens.length - 1) {
                
                // Colocar Token Final Como ;
                TokenActual.SetTipo("Simbolo_PuntoYComa");
                
            }*/
        }
        else {
            // Verficar Si Estoy Al Final Del Archivo
            /*if (IndexToken == ArrayTokens.length - 1) {
                
               // Colocar Token Final Como ;
               TokenActual.SetTipo("Simbolo_PuntoYComa");
                
            }*/
            // Hay Un Error Sintactico
            // Agregar Error Sintactico	
            //ArrayErrores.push(new NuevoError(ContadorErrores, TokenActual.GetLinea(), TokenActual.GetColumna(), "Error_Sintactico", TokenActual.GetLexema(), "Se Esperaba " + TipoToken + " Y Se Encontro: " + TokenActual.GetTipo()));
            ContadorErrores++;
            ErrorSintactico = true;
            Recuperacion = false;
            // Recuperacion De Error
            if (ErrorSintactico) {
                // Recuperacion Del Error
                while (ErrorSintactico && IndexToken < Variables_1.ArrayTokens.length - 1) {
                    // Verificar Si Ya Es ;
                    if (TokenActual.GetTipo() != "Simbolo_PuntoYComa" && TokenActual.GetTipo() != "Simbolo_Llave_Cierre") {
                        // Avanzo Indice Token
                        IndexToken++;
                        // Recuperar Token Actual
                        TokenActual = Variables_1.ArrayTokens[IndexToken];
                    }
                    // Verificar Si Es Punto Y Coma
                    if ((IndexToken < Variables_1.ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_PuntoYComa") ||
                        (IndexToken < Variables_1.ArrayTokens.length - 1 && TokenActual.GetTipo() == "Simbolo_Llave_Cierre")) {
                        // Recuperado Con Exito
                        // Aumentar Indice
                        IndexToken++;
                        // Recuperar Token Actual
                        TokenActual = Variables_1.ArrayTokens[IndexToken];
                        // Ya no Es Error Sintactico
                        ErrorSintactico = false;
                    }
                }
            }
        }
    }
    else {
        // Recuperacion Modo Panico Espero Token ;
        // Seguro Anti Bucle
        if (TokenActual.GetTipo() == "Fin_De_Cadena" || SeguroContador >= 50) {
            Recuperacion = true;
            SeguroContador = -1;
        }
        // Incremento
        SeguroContador++;
    }
}
// Generar Identación 
function AgregarIdentacion() {
    // Declaraciones
    var Espacios = "";
    // Agregar Identacion 
    for (var Contador = 0; Contador < ArrayIdentacion.length; Contador++) {
        // Agregar Espacios En Blanco
        Espacios += "    ";
    }
    // Return 
    return Espacios;
}
