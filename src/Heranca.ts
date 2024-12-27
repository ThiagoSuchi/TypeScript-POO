export class Pessoa {
    constructor (
        public readonly nome: string,
        public readonly sobrenome: string,
        public readonly idade: number,
        protected readonly CPF: string,
        private readonly senha: string
    ){}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.CPF;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

}

// Aqui essas outras classe estão herdando todos os valores e campos da classe Pessoa
export class Aluno extends Pessoa {}// extends indica que uma class está herdando outra

// Polimorfismo:
export class Professor extends Pessoa {
    // Em resumo polimorfismo é o mesmo método pode ter comportamentos diferentes em classes distintas.
    getNomeCompleto(): string {
        return 'Este é o(a) Professor(a): ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa1 = new Pessoa('Luan', 'Vasquez Buarque', 24, '94387553203', 'luanzinDela223344#')
const pessoa2 = new Aluno('Amanda', 'Bartinela Mendes', 22, '05172223402', 'amanda@!Bartilena22')
const pessoa3 = new Professor('Marta', 'Souza Huffnof', 28, '99382337708', 'tutaligadEE@123321')

console.log(pessoa1.getNomeCompleto());
console.log(pessoa2.getNomeCompleto());
console.log(pessoa3.getNomeCompleto());

