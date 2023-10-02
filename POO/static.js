class patito {

    static hacerSonido() {

        return "cuak"
    }
}

const david = {
    name: "david",
    age: 18,
    approveCourses: ["git"],
    addCurse(newCourse) {
        this.approveCourses.push(newCurse)
    }
}

Object.seal(david) // object seal nos ayuda a evitar que las propiedades se puedan borrar
Object.freeze(david) // nos ayuda a que las propiedades no las podamos editar ni borrar


// ! metodos estaticos del prototipo object

console.log(Object.keys(david));
console.log(Object.getOwnPropertyNames(david));
console.log(Object.entries(david));

// primero definimos la instancia, el nombre de la llave y si despues con el cuerpo

console.log(Object.defineProperty(david, "navigator", { 
    value: "chrome",
    enumerable: false, // no es en listado en un array, solo  con la propiedad getownpropertyNames
    configurable: true,
    writable: true
}));


console.log(Object.defineProperty(david, "editor", {
    value: "VS cpde",
    enumerable: true,
    configurable: true,
    writable: false // no es posiblo editarlo pero si borrarlo
}));

console.log(Object.defineProperty(david, "terminal", {
    value: "bash",
    enumerable: true,
    configurable: false, // se puede editar pero no borrarlo
    writable: true
}));


console.log(Object.defineProperty(david, "nasa", { // no se puede inmutar
    value: "extraterrestres",
    enumerable: false,
    configurable: false,
    writable: false
}));


console.log(Object.defineProperty(david, "", {
    value: "",
    enumerable: true,
    configurable: true,
    writable: true
}));



console.log(Object.getOwnPropertyDescriptors(david));


console.log(Object.entries(david)[1] );


console.log(patito.hacerSonido());

Object.keys
Object.entries
Object.getOwnPropertyDescriptors

// los objetos no se pueden copiar y si se hace, la copia y la original siempre seran iguales

const perro = ["juan", "peluches"]

const perro2 = perro

perro2[1] = "chocolates"

perro[1] = "joder" 

console.log(perro)
console.log(perro2);

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d", e: "e",
    }
}

const stringifiedCompleObj = JSON.stringify(obj1) // covierte todo el objeto en string

// {
//     \"a\":\"a\",
//     \"b\":\"b\",
//     \"c\":{
//        \"d\":\"d\",
//        \"e\":\"e\"
//     }
// }

const obj2 = JSON.parse(stringifiedCompleObj)  // convierte un string en objeto el inverso de stringified

// {a: "a",
//     b: "b", 
//     c: {
//        d: "d",
//        e: "e"
//     }
// }

// ! funciones recursivas

let arrayNumber = [1,2,3,4,324,2,3,24,4,2,3,2,2,2,3,2]

function recursivas(array) {
    if(array.length != 0) {
        const first = array[0];
        console.log(first);
        array.shift();

        recursivas(array);
    }

}

recursivas(arrayNumber)

// preguntar si son objetos 

function isObject (subject) {
    return typeof subject == "object"
}

function isArray (subject) {
    return Array.isArray(subject)
}



function deepCopy (subject) {
    let copySubject

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
    
    if(subjectIsArray) {
        copySubject = []
    } else if (subjectIsObject){
        subjectIsObject = {}
    } else {
        return subject
    }

    for(key in subject) {
        const keyIsObject = isObject(subject[key])

        if(keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject
}

console.log(isObject(obj1))
console.log(isArray(obj1));