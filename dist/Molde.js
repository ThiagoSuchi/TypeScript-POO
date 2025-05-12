"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaboradores = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        // private: Acessível apenas dentro da classe em que foi definido (não pode ser acessado por subclasses).
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    // Métodos
    adicionarColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    mostrarColaborador() {
        for (let colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
// Atalho de class
class Colaboradores {
    // Ao ultilizar o atalho de class é necessário especificar algum modificador de acesso(private, protected, public)
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaboradores = Colaboradores;
const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaboradores('Nelson', 'Freitas');
const colaborador2 = new Colaboradores('Maria', 'Leonis');
const colaborador3 = new Colaboradores('Júlia', 'Lima Mota');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.mostrarColaborador();
