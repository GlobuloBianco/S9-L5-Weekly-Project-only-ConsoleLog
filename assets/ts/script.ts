interface Cellulare {
    credito: number;
    numeroChiamate: number;

    ricarica(add:number): string;
    chiamata(time: number): string;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): number;
}

class Persona implements Cellulare {
    public credito: number;
    public numeroChiamate: number;

    public constructor(_credito: number) {
        this.credito = _credito;
        this.numeroChiamate = 0;
    }

    public ricarica(add: number): string {
        if(add != 5 && add != 10 && add != 20 && add != 50) {
            return 'Devi scegliere di ricaricare tra 5$ - 10$ - 20$ -50$';
        } else {
            this.credito = Math.floor(this.credito + add);
            return `Hai ricaricato ${add}$, il tuo credito attuale è di ${this.credito}$`;
        }
    }
    public chiamata(time: number): string {
        let costo: number = 0.20; //costo chiamata al minuto modificabile
        let costoTot: number = Number((time * costo).toFixed(2));//usato per risolvere i problemi di tipo 5.9999999999$
        this.credito = Number((this.credito - costoTot).toFixed(2));
        this.numeroChiamate += 1; //+1 telefonata

        return `Hai fatto una chiamata di ${time} minuti. Il costo è di ${costoTot}$, il tuo credito residuo è di ${this.credito}$`;
    }
    public numero404(): number {
        return this.credito;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }
}

separatore("---------------[Primo]---------------");
let persona1 = new Persona(100);
console.log(persona1);
console.log(`[Ricarica] ${persona1.ricarica(5)}`);
console.log(`[Chiamata] ${persona1.chiamata(2)}`);
console.log(`[Ricarica] ${persona1.ricarica(10)}`);
console.log(`[Chiamata] ${persona1.chiamata(4)}`);
console.log(`[Numero404/Saldo Disponibile] ${persona1.numero404()}$`);
console.log(`[N.Chiamate] ${persona1.getNumeroChiamate()}`);
console.log(`[Azzera] ${persona1.azzeraChiamate()}`);

separatore("---------------[Secondo]---------------");
let persona2 = new Persona(20);
console.log(persona2);
console.log(`[Ricarica] ${persona2.ricarica(50)}`);
console.log(`[Chiamata] ${persona2.chiamata(5)}`);
console.log(`[Ricarica] ${persona2.ricarica(5)}`);
console.log(`[Chiamata] ${persona2.chiamata(20)}`);
console.log(`[Numero404/Saldo Disponibile] ${persona2.numero404()}$`);
console.log(`[N.Chiamate] ${persona2.getNumeroChiamate()}`);
console.log(`[Azzera] ${persona2.azzeraChiamate()}`);

separatore("---------------[Terzo]---------------");
let persona3 = new Persona(50);
console.log(persona3);
console.log(`[Ricarica] ${persona3.ricarica(3)}`);
console.log(`[Ricarica] ${persona3.ricarica(20)}`);
console.log(`[Chiamata] ${persona3.chiamata(4)}`);
console.log(`[Chiamata] ${persona3.chiamata(7)}`);
console.log(`[Numero404/Saldo Disponibile] ${persona3.numero404()}$`);
console.log(`[N.Chiamate] ${persona3.getNumeroChiamate()}`);
console.log(`[Azzera] ${persona3.azzeraChiamate()}`);

//divisorio
function separatore(tipo: string) {
    console.log('');
    console.log(tipo);
    console.log('');
}