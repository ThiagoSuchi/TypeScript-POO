// Classe abstract: Define uma base comum para outras classes, mas não pode ser usada diretamente.
// Método abstract: Força as classes derivadas a fornecerem uma implementação específica.

// Super Classe
export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao()
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(`${this.nome} agora tem ${this.vida} de vida...`);
    }

    abstract bordao(): void;
}

/* O atributo ou método marcado como abstract só pode ser declarado em uma classe abstrata. 
Um atributo abstract é um tipo de propriedade que precisa ser obrigatoriamente definida em 
qualquer classe concreta que herde da classe abstrata. */

/* OBS: Diferente de um método abstrato, um atributo abstrato não tem valor ou 
implementação diretamente; ele serve apenas como especificação.*/

// Subclasses
export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}';
    bordao(): void {
        console.log( this.emoji + ' AAAH VOCÊ IRÀ MORRER CRIATURA DEMONIACA!');
    }
};

export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';
    bordao(): void {
        console.log( this.emoji + ' HAHAHAhaha, eu irei te destruir ser insignificante.');
    }
};

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 200, 800);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
guerreira.atacar(monstro);