"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa2 = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
const pessoa = new Pessoa('Sérgio', 'Busquetz');
console.log(pessoa.nomeCompleto());
class Pessoa2 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
exports.Pessoa2 = Pessoa2;
const pessoa2 = new Pessoa2('Laís', 'Busquetz');
console.log(pessoa2.nomeCompleto());
