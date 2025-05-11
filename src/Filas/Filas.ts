class Pilha<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }
}