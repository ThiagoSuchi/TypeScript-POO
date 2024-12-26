export class Empresa {
    // public: Acessível de qualquer lugar (dentro e fora da classe).
   // OBS: public é redundante!
    public readonly nome: string;// readonly é usada para marcar propriedades de um objeto como imutáveis
    // private: Acessível apenas dentro da classe em que foi definido (não pode ser acessado por subclasses).
    private readonly colaboradores: Colaboradores[] = [];
    // protected: Acessível apenas dentro da classe em que foi definido e nas subclasses.
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj
    }

    // Métodos
    adicionarColaborador (colaborador: Colaboradores): void {
        this.colaboradores.push(colaborador)
    } 

    mostrarColaborador():void {
        for(let colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaboradores {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string
    ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaboradores('Nelson', 'Freitas');
const colaborador2 = new Colaboradores('Maria', 'Leonis');
const colaborador3 = new Colaboradores('Júlia', 'Lima Mota');
empresa1.adicionarColaborador(colaborador1)
empresa1.adicionarColaborador(colaborador2)
empresa1.adicionarColaborador(colaborador3)

empresa1.mostrarColaborador()

   