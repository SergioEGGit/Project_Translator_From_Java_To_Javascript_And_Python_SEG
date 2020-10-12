"use strict";
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
exports.Clase = void 0;
// Imports
var Instruccion_1 = require("./Instruccion");
// Clase Principal
var Clase = /** @class */ (function (_super) {
    __extends(Clase, _super);
    function Clase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Clase;
}(Instruccion_1.Instruccion
// Declaraciones
));
exports.Clase = Clase;
Traducir();
{
    // Declaraciones
    var Value = this.Value.Traducir();
    var Traduccion = G.Identacion() + "console.log(" + Value + ");";
    return Traduccion;
}
