export class Empresa {
    public readonly nome: string;// readonly é usada para marcar propriedades de um objeto como imutáveis

    constructor(nome: string) {
        this.nome = nome;
    }
}

const empresa1 = new Empresa('Udemy');
const empresa2 = new Empresa('Alura');
console.log(empresa1.nome, empresa2.nome);
