// A associação é um relacionamento fraco ou direto entre classes, onde uma classe pode usar ou interagir com outra sem depender totalmente dela. 
export class Ecritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta
    }

    escrever(): void {
        if(this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        console.log(`O escritor ${this._nome}`);
        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    
    abstract escrever(): void;

    get nome(): string {
        return this._nome
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`está usando a ${this.nome} para produzir o texto...`);
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`está usando a ${this.nome} para produzir o texto...`);
    }
}

const escritor = new Ecritor('Manoel');
const caneta = new Caneta('Caneta Pena');
const maquina = new MaquinaEscrever('Máquina de escrever');

escritor.ferramenta = caneta;
escritor.escrever()
escritor.ferramenta = maquina
escritor.escrever()