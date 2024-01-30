// enqueue agregar un elemento al final de la Fila
// dequeue remover el primer elemento en la fila
// peek tomar el primer elemento en la fila


class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.fist = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value); 
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if(this.length > 0){
            this.first = this.first.next;
            this.length--;
            return this;
        } else {
            return "error Stack vacia"
        }
    }
}