// declarando
// ? class user{}

// instanciar
// ? const dave = new user()

class user{
    greeting(){
        return "hello"
    }
}

const dave = new user()
console.log(dave.greeting);

// constructor

class user {
    constructor (){
        console.log("nuevo user");
    } 
    greeting () {
        return "hello"   
    }
}

const david = new user()


// this

class User {
    constructor(name) {
        this.name = name
    }
    // metodos
    speak() {
        return "hello"
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new User("ana")
console.log(ana.greeting());


// setters getters

class Usere {
    // constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // metodos
    speak() {
        return "Hello, "
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }

}

const bebeloper = new Usere(david,15)
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);