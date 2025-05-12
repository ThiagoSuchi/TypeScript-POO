"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, CPF) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.CPF = CPF;
    }
    metodoNormal() {
        console.log(Pessoa.cpfPadrao, Pessoa.idadePessoa);
    }
    static criarPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, 0, '0000000000');
    }
}
exports.Pessoa = Pessoa;
Pessoa.idadePessoa = 21;
Pessoa.cpfPadrao = '000.000.000-00';
// Use static quando quiser algo que pertence à classe como um todo, e não a cada objeto criado a partir dela.
// É útil para constantes, funções utilitárias, ou dados que não precisam ser diferentes entre as instâncias.
const pessoa1 = new Pessoa('Luan', 'Vasquez Buarque', 24, '943.875.532-03');
// Não é possivel chamar o método estático pela instância
console.log(pessoa1);
// Só é possível chamar o método estático pela classe
const pessoa2 = Pessoa.criarPessoa('Thiago', 'Hens');
console.log(pessoa2);
pessoa1.metodoNormal();
