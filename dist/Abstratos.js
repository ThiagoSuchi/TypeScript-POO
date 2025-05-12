"use strict";
// Classe abstract: Define uma base comum para outras classes, mas não pode ser usada diretamente.
// Método abstract: Força as classes derivadas a fornecerem uma implementação específica.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = exports.Guerreira = exports.Personagem = void 0;
// Super Classe
class Personagem {
    constructor(nome, ataque, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.vida = vida;
    }
    atacar(personagem) {
        this.bordao();
        personagem.perderVida(this.ataque);
    }
    perderVida(forcaAtaque) {
        this.vida -= forcaAtaque;
        console.log(`${this.nome} agora tem ${this.vida} de vida...`);
    }
}
exports.Personagem = Personagem;
/* O atributo ou método marcado como abstract só pode ser declarado em uma classe abstrata.
Um atributo abstract é um tipo de propriedade que precisa ser obrigatoriamente definida em
qualquer classe concreta que herde da classe abstrata. */
/* OBS: Diferente de um método abstrato, um atributo abstrato não tem valor ou
implementação diretamente; ele serve apenas como especificação.*/
// Subclasses
class Guerreira extends Personagem {
    constructor() {
        super(...arguments);
        this.emoji = '\u{1F9DD}';
    }
    bordao() {
        console.log(this.emoji + ' AAAH VOCÊ IRÀ MORRER CRIATURA DEMONIACA!');
    }
}
exports.Guerreira = Guerreira;
;
class Monstro extends Personagem {
    constructor() {
        super(...arguments);
        this.emoji = '\u{1F9DF}';
    }
    bordao() {
        console.log(this.emoji + ' HAHAHAhaha, eu irei te destruir ser insignificante.');
    }
}
exports.Monstro = Monstro;
;
const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 200, 800);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
