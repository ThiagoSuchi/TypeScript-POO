interface TipoNome {
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome {
    nomeCompleto(): string;
}

export class Pessoa implements TipoPessoa {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa('Sérgio', 'Busquetz');
console.log(pessoa.nomeCompleto());



// OUU --------------------------------------------------------------------
interface TipoPessoa2 {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

export class Pessoa2 implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa2 = new Pessoa2('Laís', 'Busquetz');
console.log(pessoa2.nomeCompleto());