"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa3 = exports.Pessoa2 = exports.Pessoa = void 0;
/* Em TypeScript, a palavra-chave implements é usada em classes para declarar que a classe segue um ou mais
contratos definidos por uma ou mais interfaces. Esse contrato obriga a classe a implementar todas as propriedades
e métodos definidos na interface, garantindo que ela tenha uma estrutura consistente. */
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
const pessoa2 = new Pessoa2('Sérgio', 'Busquetz');
console.log(pessoa2.nomeCompleto());
class Pessoa3 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
}
exports.Pessoa3 = Pessoa3;
const pessoa3 = new Pessoa3('Sérgio', 'Busquetz');
console.log(pessoa3.nomeCompleto());
