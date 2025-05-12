class Pilha<T> {
    private items: T[] = [];

    // Adciona ao fim da fila
    push(element: T): void {
        this.items.push(element);
    }

    // Remove o elemento adcionado
    pop(): T | undefined {
        return this.items.pop();
    }

    // Verifica o último elemento adicionado
    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const pilha = new Pilha<number>();
pilha.push(10);
pilha.push(20);
console.log(pilha.peek());
pilha.pop();
console.log(pilha.peek());
pilha.pop();
console.log(pilha.isEmpty());