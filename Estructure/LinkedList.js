// prepend => agregar un nodo al inicio
// append => agregar un nodo al final
// lookUp / search => buscar un nodo
// insert => insertar un nodo en la lista 
// delete => Borrar un nodo en la lista

// 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> 9 --> null 

// let nodo = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: { 
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyList {
    constructor(value){ // head: { value:1, next: value:2, next: null }
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode // escribe el nodo en el tail.next
        this.tail = newNode // pone el nodo nuevo en el tail

        this.length++;

        return this
    }

    prepend(value){
        const newNode = new Node(value)
        
        newNode.next = this.head
        this.head = newNode

        this.length++

        return this
    }
    
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
    
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
    
        this.length++;
    
        return this;

        // * - * - *
        //       *
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

    remove(index){
        if(index > this.length || index < 0){
            console.error("Index of bounds");
        }
    
        const holdingNode = this.getTheIndex(index-1);
        if (index === 0) {
            this.head = holdingNode.next;
        }else{
            const removedNode = holdingNode.next;
            holdingNode.next = removedNode.next;
    
        }
        this.length--
    
        return this;    
    }

}

let myList = new SinglyList(1)
console.log(myList.append(2));
console.log(myList.prepend(10))
console.log(myList.insert(2,6))
console.log(myList);
