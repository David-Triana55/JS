class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        }

        let newNode = new Node(value);
        let prevPointer = this.getTheIndex(index - 1);
        let nextPointer = prevPointer.next;
        newNode.prev = prevPointer;
        newNode.next = nextPointer;
        prevPointer.next = newNode;
        nextPointer.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            console.log("index fuera de rango");
            return;
        }
        let indexToRemove = this.getTheIndex(index);
        let nextPointer = indexToRemove.next;
        let prevPointer = indexToRemove.prev;
        if (prevPointer && nextPointer) {
            prevPointer.next = nextPointer;
            nextPointer.prev = prevPointer;
        } else if (!prevPointer) {
            nextPointer.prev = null;
            this.head = nextPointer;
        } else if (!nextPointer) {
            prevPointer.next = null;
            this.tail = prevPointer;
        }
        this.length--;
        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}