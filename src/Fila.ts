class Queue<T> {
    private items: T[] = [];

    // Adciona um elemento no final da fila
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Remove o primeiro elemento da fila
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // Verifica o primeiro elemento da fila sem remover
    front(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<string>();
queue.enqueue('Celular');
queue.enqueue('Mouse');
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
queue.dequeue();
console.log(queue.isEmpty());


