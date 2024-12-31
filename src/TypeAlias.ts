export type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}
/* Em TypeScript, a palavra-chave implements é usada em classes para declarar que a classe segue um ou mais 
contratos definidos por uma ou mais interfaces. Esse contrato obriga a classe a implementar todas as propriedades 
e métodos definidos na interface, garantindo que ela tenha uma estrutura consistente. */
export class Pessoa implements TipoPessoa {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa('Sérgio', 'Busquetz');
console.log(pessoa.nomeCompleto());


// OUU ------------------------------------------------------------------------------------------------------------
export type TipoNome = {
    nome: string;
}

export type TipoSobrenome = {
    sobrenome: string;
}

export type TipoNomeCompleto = TipoNome & TipoSobrenome & {
    nomeCompleto(): string;
}

export class Pessoa2 implements TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa2 = new Pessoa2('Sérgio', 'Busquetz');
console.log(pessoa2.nomeCompleto());


// OUU ------------------------------------------------------------------------------------------------------------
export type TipoNome2 = {
    nome: string;
}

export type TipoSobrenome2 = {
    sobrenome: string;
}

export type TipoNomeCompleto2 = {
    nomeCompleto(): string;
}

export class Pessoa3 implements TipoNome, TipoSobrenome, TipoNomeCompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa3 = new Pessoa3('Sérgio', 'Busquetz');
console.log(pessoa3.nomeCompleto());