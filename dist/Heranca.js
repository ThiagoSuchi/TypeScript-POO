"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = exports.Aluno = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, CPF, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.CPF = CPF;
        this.senha = senha;
    }
    getIdade() {
        return this.idade;
    }
    getCpf() {
        return this.CPF;
    }
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
// Aqui essas outras classes(subclasses) estão herdando todos os valores e campos da classe Pessoa
class Aluno extends Pessoa {
    constructor(nome, sobrenome, idade, cpf, senha, sala) {
        super(nome, sobrenome, idade, cpf, senha);
        this.sala = sala;
    }
    getNomeCompleto() {
        const result = super.getNomeCompleto();
        return result + ' ' + 'isso é polimorfismo';
    }
}
exports.Aluno = Aluno;
// Polimorfismo:
class Professor extends Pessoa {
    // Em resumo polimorfismo é, o mesmo método, pode ter comportamentos diferentes em classes distintas.
    getNomeCompleto() {
        return 'Este é o(a) Professor(a): ' + this.nome + ' ' + this.sobrenome;
    }
}
exports.Professor = Professor;
const pessoa1 = new Pessoa('Luan', 'Vasquez Buarque', 24, '94387553203', 'luanzinDela223344#');
const pessoa2 = new Aluno('Amanda', 'Bartinela Mendes', 22, '05172223402', 'amanda@!Bartilena22', '3ºA');
const pessoa3 = new Professor('Marta', 'Souza Huffnof', 28, '99382337708', 'tutaligadEE@123321');
console.log(pessoa1.getNomeCompleto());
console.log(pessoa2.getNomeCompleto());
console.log(pessoa3.getNomeCompleto());
console.log(pessoa2);
