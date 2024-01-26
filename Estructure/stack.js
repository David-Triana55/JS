// pop() remover el ultimo elemento
// push() agregar un elemento al final
// peek() tomar el ultimo elemento en la fila

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length++
        return this
    }
    pop(){
        if(this.length > 0){
            this.top = this.top.next;
            this.length--;
            return this;
        } else {
            return "error Stack vacia"
        }
    }
}



const myStack = new Stack()
console.log(myStack.push(1))
console.log(myStack.push(2))
console.log(myStack.push(3))
console.log(myStack.push(4))
console.log(myStack.pop())

