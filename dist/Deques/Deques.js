"use strict";
class Deque {
    constructor(capacity) {
        this.capacityLimit = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }
    addFirst(item) {
        if (this.count === this.capacityLimit) {
            throw new Error("Deque está cheio");
        }
        this.front = (this.front - 1 + this.capacityLimit) % this.capacityLimit;
        this.items[this.front] = item;
        this.count++;
    }
    addLast(item) {
        if (this.count === this.capacityLimit) {
            throw new Error("Deque está cheio");
        }
        this.items[this.rear] = item;
        this.rear = (this.rear + 1) % this.capacityLimit;
        this.count++;
    }
    removeFirst() {
        if (this.count === 0) {
            throw new Error("Deque está vazio.");
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined; // evita memory leak
        this.front = (this.front + 1) % this.capacityLimit;
        this.count--;
        return item;
    }
    removeLast() {
        if (this.count === 0) {
            throw new Error("Deque está vazio.");
        }
        this.rear = (this.rear - 1 + this.capacityLimit) % this.capacityLimit;
        const item = this.items[this.rear];
        this.items[this.rear] = undefined; // evita memory leak
        this.count--;
        return item;
    }
    peekFirst() {
        if (this.count === 0)
            return undefined;
        return this.items[this.front];
    }
    peekLast() {
        if (this.count === 0)
            return undefined;
        const lastIndex = (this.rear - 1 + this.capacityLimit) % this.capacityLimit;
        return this.items[lastIndex];
    }
    size() {
        return this.count;
    }
    capacity() {
        return this.capacityLimit;
    }
}
const deque = new Deque(5);
deque.addLast(40);
deque.addFirst(15);
deque.addLast(60);
console.log(deque.peekFirst());
console.log(deque.peekLast());
console.log(deque.removeFirst());
console.log(deque.removeLast());
console.log(deque.size());
console.log(deque.capacity());
