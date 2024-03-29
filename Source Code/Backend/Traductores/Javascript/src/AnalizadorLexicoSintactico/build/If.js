"use strict";
// Imports
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
// Clase Abstracta 
var Instruccion_1 = require("./Instruccion");
// Metodo Identacion
var Variables_Metodos_1 = require("./Variables_Metodos");
// Clase Principal
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    // Constructor 
    function If(Linea, Columna, Condicion, BloqueIf, BloqueElse) {
        var _this = 
        // Super
        _super.call(this, Linea, Columna) || this;
        _this.Condicion = Condicion;
        _this.BloqueIf = BloqueIf;
        _this.BloqueElse = BloqueElse;
        return _this;
    }
    // Método Traducir	
    If.prototype.Traducir = function () {
        // Declaraciones
        var Condicion = this.Condicion.Traducir();
        var BloqueIf = this.BloqueIf.Traducir();
        var BloqueElse = "";
        // Verificar Si Hay Bloque Else
        if (this.BloqueElse != null) {
            // Recuperar Bloque
            BloqueElse = this.BloqueElse.Traducir();
            // Verificar Si Es Clase Heredada De If
            if (this.BloqueElse instanceof If) {
                // Traduccion Else If
                var Traduccion_ElseIf = Variables_Metodos_1.AgregarIdentacion() + "if(" + Condicion + ") " +
                    "{ \n\n" +
                    BloqueIf + "\n" +
                    Variables_Metodos_1.AgregarIdentacion() + "} else " +
                    BloqueElse.trim() + "\n\n";
                return Traduccion_ElseIf;
            }
            // Traduccion Else
            var Traduccion_Else = Variables_Metodos_1.AgregarIdentacion() + "if(" + Condicion + ") " +
                "{ \n\n" +
                BloqueIf + "\n" +
                Variables_Metodos_1.AgregarIdentacion() + "} else { \n\n" +
                BloqueElse + "\n" +
                Variables_Metodos_1.AgregarIdentacion() + "} \n\n";
            return Traduccion_Else;
        }
        // Traduccion If 
        var Traduccion_If = Variables_Metodos_1.AgregarIdentacion() + "if(" + Condicion + ") " +
            "{ \n\n" +
            BloqueIf + "\n" +
            Variables_Metodos_1.AgregarIdentacion() + "} \n\n";
        return Traduccion_If;
    };
    return If;
}(Instruccion_1.Instruccion));
exports.If = If;
