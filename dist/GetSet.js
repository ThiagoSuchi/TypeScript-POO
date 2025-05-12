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
    getIdade() {
        return this.idade;
    }
    setCpf(valor) {
        this.CPF = valor;
    }
    getCpf() {
        return this.CPF.replace(/\D/g, '');
    }
    /*OUU
    set CPF(valor: string) {
          this._CPF = valor
    }
    
    get CPF(): string {
        return this._cpf.replace(/\D/g, '');
    }
    */
    getNomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
exports.Pessoa = Pessoa;
const pessoa1 = new Pessoa('Luan', 'Vasquez Buarque', 24, '943.875.532-03');
console.log(pessoa1);
console.log(pessoa1.getCpf());
pessoa1.setCpf('943.875.532-11');
console.log(pessoa1.getCpf());
// ouu
// pessoa1.CPF = 943.875.532-11
// console.log(pessoa.CPF)
