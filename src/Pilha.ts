class Stack<T> {
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

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.isEmpty());