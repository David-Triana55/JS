let persona = ["pedro", "manuel", "luisa"]
persona.push()

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

    push(item){ // add item to array
        this.data[this.length] = item
        this.length++
        return this.data
    }

    pop(){ // delete the last element
        let lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index){ // delete an item for index
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }

    shiftIndex(index) { // delete an item for index
        for (let i = index; i < this.length - 1; i++) { // [1,2,4,5]
            this.data[i] = this.data[i + 1]         // [1,4,5]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    unshift(item) { // add an item in the beginning of the array

        if(!item){
            return this.length;
        }
        
        if(this.length === 0){
            this.data[0] = item;
            this.length++;
            return this.length;
        }
        
        for(let i = this.length; i > 0; i--){
            this.data[i] = this.data[i - 1];
        }
        
        this.data[0] = item;
    
        this.length++;
        return this.length;
    }


    shift() { // delete the fisrt item
        if (this.length === 0) { // [1,4,5]
            return undefined     // [4,5]
        }
        
        const fisrtItem = this.data[0]
        delete this.data[0]
    
        for(let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1]
        this.length--

        return fisrtItem
    }
    
}

const persona2 = new miArray()

persona2.push("jose");
persona2.push("david");
persona2.push("ben");
console.log(persona2.get(2))

console.log(persona2);
0