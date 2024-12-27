export class Pessoa {// Super class
    constructor (
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private CPF: string,
        // ouu
        // private _CPF: string
    ){}

    getIdade(): number {
        return this.idade;
    }

    setCpf(valor: string): void {
        this.CPF = valor
    }

    getCpf(): string {
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

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

}

const pessoa1 = new Pessoa('Luan', 'Vasquez Buarque', 24, '943.875.532-03')
console.log(pessoa1);
console.log(pessoa1.getCpf());
pessoa1.setCpf('943.875.532-11')

console.log(pessoa1.getCpf());
// ouu
// pessoa1.CPF = 943.875.532-11
// console.log(pessoa.CPF)


