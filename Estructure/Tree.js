//       10
//     /    \
//    4      20
//  /   \   /  \
// 2    8  17  25


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left; // reasigna el currentNode
                } 
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right; // reasigna el currentNode
                }
            }
        }
    }

    search(value) {

        let current = this.root;
        while( current.value != value ) {
            if( value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        return current;
    }
}

const tree = new BinarySearchTree();