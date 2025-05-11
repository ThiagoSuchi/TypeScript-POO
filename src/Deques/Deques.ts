class Deque<T> {
    private items: (T | undefined)[];
    private capacityLimit: number;
    private front: number;
    private rear: number;
    private count: number;

    constructor(capacity: number) {
        this.capacityLimit = capacity;
        this.items = new Array<T | undefined>(capacity);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    addFirst(item: T): void {
        if (this.count === this.capacityLimit) {
            throw new Error("Deque está cheio");
        }

        this.front = (this.front - 1 + this.capacityLimit) % this.capacityLimit;
        this.items[this.front] = item;
        this.count++;
    }

    addLast(item: T): void {
        if (this.count === this.capacityLimit) {
            throw new Error("Deque está cheio");
        }

        this.items[this.rear] = item;
        this.rear = (this.rear + 1) % this.capacityLimit;
        this.count++;
    }

    removeFirst(): T {
        if (this.count === 0) {
            throw new Error("Deque está vazio.");
        }

        const item = this.items[this.front];
        this.items[this.front] = undefined; // evita memory leak
        this.front = (this.front + 1) % this.capacityLimit;
        this.count--;

        return item!;
    }

    removeLast(): T {
        if (this.count === 0) {
            throw new Error("Deque está vazio.");
        }

        this.rear = (this.rear - 1 + this.capacityLimit) % this.capacityLimit;
        const item = this.items[this.rear];
        this.items[this.rear] = undefined; // evita memory leak
        this.count--;

        return item!;
    }

    peekFirst(): T | undefined {
        if (this.count === 0) return undefined;
        return this.items[this.front];
    }

    peekLast(): T | undefined {
        if (this.count === 0) return undefined;
        const lastIndex = (this.rear - 1 + this.capacityLimit) % this.capacityLimit;
        return this.items[lastIndex];
    }

    size(): number {
        return this.count;
    }

    capacity(): number {
        return this.capacityLimit;
    }
}

const deque = new Deque<number>(5);

deque.addLast(40)
deque.addFirst(15);
deque.addLast(60);

console.log(deque.peekFirst());
console.log(deque.peekLast());
console.log(deque.removeFirst());
console.log(deque.removeLast());
console.log(deque.size());
console.log(deque.capacity());
