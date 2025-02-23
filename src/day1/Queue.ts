export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    // 1, 2, 3, 4
    // ^        ^
    // H        T
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        //let newNode: Node<T> = { value: item };
        const newNode = { value: item } as Node<T>;
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head)
            return undefined;

        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;

        this.length = Math.max(this.length - 1, 0);
        if (this.length === 0)
            this.tail = undefined

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

type Node<T> = {
    value: T;
    next?: Node<T>;
}
