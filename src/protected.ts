export class Empresa {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj
    }

    adicionarColaborador (colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    } 

    mostrarColaborador():void {
        for(let colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Udemy extends Empresa {
    constructor(){
        super('Udemy', '11.111.111/0001-11')
    }

    popColaborador(): Colaborador | null{
        const colaborador = this.colaboradores.pop()// o método pop exclui o último elemento de um array, e retorna ele
        if(colaborador) return colaborador
        return null;
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string
    ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Nelson', 'Freitas');
const colaborador2 = new Colaborador('Maria', 'Leonis');
const colaborador3 = new Colaborador('Júlia', 'Lima Mota');
empresa1.adicionarColaborador(colaborador1)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)

const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido);
console.log(empresa1);







   