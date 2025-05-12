"use strict";
class Pilha {
    constructor() {
        this.items = [];
    }
    // Adciona ao fim da fila
    push(element) {
        this.items.push(element);
    }
    // Remove o elemento adcionado
    pop() {
        return this.items.pop();
    }
    // Verifica o último elemento adicionado
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
console.log(pilha.peek());
pilha.pop();
console.log(pilha.peek());
pilha.pop();
console.log(pilha.isEmpty());
