var Persona = /** @class */ (function () {
    function Persona(_credito) {
        this.credito = _credito;
        this.numeroChiamate = 0;
    }
    Persona.prototype.ricarica = function (add) {
        if (add != 5 && add != 10 && add != 20 && add != 50) {
            return 'Devi scegliere di ricaricare tra 5$ - 10$ - 20$ -50$';
        }
        else {
            this.credito = Math.floor(this.credito + add);
            return "Hai ricaricato ".concat(add, "$, il tuo credito attuale \u00E8 di ").concat(this.credito, "$");
        }
    };
    Persona.prototype.chiamata = function (time) {
        var costo = 0.20; //costo chiamata al minuto modificabile
        var costoTot = Number((time * costo).toFixed(2)); //usato per risolvere i problemi di tipo 5.9999999999$
        this.credito = Number((this.credito - costoTot).toFixed(2));
        this.numeroChiamate += 1; //+1 telefonata
        return "Hai fatto una chiamata di ".concat(time, " minuti. Il costo \u00E8 di ").concat(costoTot, "$, il tuo credito residuo \u00E8 di ").concat(this.credito, "$");
    };
    Persona.prototype.numero404 = function () {
        return this.credito;
    };
    Persona.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Persona.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Persona;
}());
separatore("---------------[Primo]---------------");
var persona1 = new Persona(100);
console.log(persona1);
console.log("[Ricarica] ".concat(persona1.ricarica(5)));
console.log("[Chiamata] ".concat(persona1.chiamata(2)));
console.log("[Ricarica] ".concat(persona1.ricarica(10)));
console.log("[Chiamata] ".concat(persona1.chiamata(4)));
console.log("[Numero404/Saldo Disponibile] ".concat(persona1.numero404(), "$"));
console.log("[N.Chiamate] ".concat(persona1.getNumeroChiamate()));
console.log("[Azzera] ".concat(persona1.azzeraChiamate()));
separatore("---------------[Secondo]---------------");
var persona2 = new Persona(20);
console.log(persona2);
console.log("[Ricarica] ".concat(persona2.ricarica(50)));
console.log("[Chiamata] ".concat(persona2.chiamata(5)));
console.log("[Ricarica] ".concat(persona2.ricarica(5)));
console.log("[Chiamata] ".concat(persona2.chiamata(20)));
console.log("[Numero404/Saldo Disponibile] ".concat(persona2.numero404(), "$"));
console.log("[N.Chiamate] ".concat(persona2.getNumeroChiamate()));
console.log("[Azzera] ".concat(persona2.azzeraChiamate()));
separatore("---------------[Terzo]---------------");
var persona3 = new Persona(50);
console.log(persona3);
console.log("[Ricarica] ".concat(persona3.ricarica(3)));
console.log("[Ricarica] ".concat(persona3.ricarica(20)));
console.log("[Chiamata] ".concat(persona3.chiamata(4)));
console.log("[Chiamata] ".concat(persona3.chiamata(7)));
console.log("[Numero404/Saldo Disponibile] ".concat(persona3.numero404(), "$"));
console.log("[N.Chiamate] ".concat(persona3.getNumeroChiamate()));
console.log("[Azzera] ".concat(persona3.azzeraChiamate()));
//divisorio
function separatore(tipo) {
    console.log('');
    console.log(tipo);
    console.log('');
}
