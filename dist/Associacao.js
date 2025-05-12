"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caneta = exports.MaquinaEscrever = exports.Ferramenta = exports.Ecritor = void 0;
// A associação é um relacionamento fraco ou direto entre classes, onde uma classe pode usar ou interagir com outra sem depender totalmente dela. 
class Ecritor {
    constructor(_nome) {
        this._nome = _nome;
        this._ferramenta = null;
    }
    set ferramenta(ferramenta) {
        this._ferramenta = ferramenta;
    }
    get ferramenta() {
        return this._ferramenta;
    }
    escrever() {
        if (this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        console.log(`O escritor ${this._nome}`);
        this.ferramenta.escrever();
    }
}
exports.Ecritor = Ecritor;
class Ferramenta {
    constructor(_nome) {
        this._nome = _nome;
    }
    get nome() {
        return this._nome;
    }
}
exports.Ferramenta = Ferramenta;
class MaquinaEscrever extends Ferramenta {
    escrever() {
        console.log(`está usando a ${this.nome} para produzir o texto...`);
    }
}
exports.MaquinaEscrever = MaquinaEscrever;
class Caneta extends Ferramenta {
    escrever() {
        console.log(`está usando a ${this.nome} para produzir o texto...`);
    }
}
exports.Caneta = Caneta;
const escritor = new Ecritor('Manoel');
const caneta = new Caneta('Caneta Pena');
const maquina = new MaquinaEscrever('Máquina de escrever');
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquina;
escritor.escrever();
