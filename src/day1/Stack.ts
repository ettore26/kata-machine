export default class Stack<T> {
    public length: number;
    public head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        let newNode = { value: item } as Node<T>;
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.previous = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop(): T | undefined {
        let oldHead = this.head;
        if (!oldHead)
            return undefined;

        this.head = oldHead.previous;
        oldHead.previous = undefined;
        this.length = Math.max(this.length - 1, 0);

        return oldHead?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type Node<T> = {
    value: T,
    previous: Node<T> | undefined,
}

