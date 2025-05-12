"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Udemy = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
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
class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/0001-11');
    }
    popColaborador() {
        const colaborador = this.colaboradores.pop(); // o método pop exclui o último elemento de um array, e retorna ele
        if (colaborador)
            return colaborador;
        return null;
    }
}
exports.Udemy = Udemy;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Nelson', 'Freitas');
const colaborador2 = new Colaborador('Maria', 'Leonis');
const colaborador3 = new Colaborador('Júlia', 'Lima Mota');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
