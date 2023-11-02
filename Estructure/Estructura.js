let persona = ["pedro", "manuel", "luisa"]

console.log(persona);

// estaticos o dinamicos 

class miArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    pop(){
        let lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }
    shiftIndex(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    unshift(item) {

        for (let i = this.length; i > 0; i--) { // ["hola"]  length I
            this.data[i] = this.data[i - 1];
        }

        this.data[0] = item;
        this.length++;

        return item;
    }


    shift() {
        if (this.length === 0) {
            return undefined
        }
        
        
        const fisrtItem = this.data[0]
        delete this.data[0]

    
        for(let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }


        delete this.data[this.length - 1]
        this.length--

        return fisrtItem + " este "

    }
    
}

const persona2 = new miArray()


console.log(persona2.unshift(1))
console.log(persona2.unshift(2))
console.log(persona2.unshift(3))
console.log(persona2.unshift(2))
console.log(persona2.shift())
console.log(persona2.shift())

console.log(persona2);






