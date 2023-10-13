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
        this.approveCourses.push(newCourse)
    }
}


// ! metodos estaticos del prototipo object

console.log(Object.keys(david)); // hace un array con solo las llaves
console.log(Object.getOwnPropertyNames(david)); // se usa para obtener las propiedades enumerables que estan ocultas
console.log(Object.entries(david)); // hace array de arrays con las llaves y valores
console.log(Object.getOwnPropertyDescriptors(david));  // nos muestra propiedades del objeto

// ? primero definimos la instancia, el nombre de la llave y si despues las demas propiedadess

console.log(Object.defineProperty(david, "navigator", {  //
    value: "chrome",
    enumerable: false, // no es listado en un array, solo con la propiedad getownpropertyNames
    writable: true,
    configurable: true
}));


console.log(Object.defineProperty(david, "editor", {
    value: "VS cpde",
    enumerable: true, 
    writable: false, // no es posiblo editarlo pero si borrarlo
    configurable: true
}));

console.log(Object.defineProperty(david, "terminal", {
    value: "bash",
    enumerable: true,
    writable: true,
    configurable: false // se puede editar pero no borrarlo
}));

console.log(Object.defineProperty(david, "nasa", { // no se puede inmutar
    value: "extraterrestres",
    enumerable: false,  // enumerable
    writable: false, // editable
    configurable: false // inborrable
}));

console.log(Object.defineProperty(david, "", {
    value: "",
    enumerable: true,
    writable: true,
    configurable: true
}));


console.log(Object.getOwnPropertyDescriptors(david));


// todo: // metodos!!!!

Object.isFrozen(juan) 

/* Object.isFrozen() => las propiedades que tengamos en nuestro objeto 
tengan el "writable" y "configurable" como false, esto quiere decir que 
no podremos editar ni borrar nuestras propiedades. nos devuelve true o false */

Object.isSealed(juan)

/* Object.isSealed() => verificar si todas las propiedades de nuestro objeto
 tienen confifurable como false. nos devuelve true o false */

Object.seal(david) // object seal nos ayuda a evitar que las propiedades se puedan borrar

Object.freeze(david) // nos ayuda a que las propiedades no las podamos editar ni borrar


// ! los objetos no se pueden copiar y si se hace, la copia y la original siempre seran iguales

// ? stack y heap memorias, stack => variables, heap => obj

const perro = ["juan", "peluches"]

const perro2 = perro

perro2[1] = "chocolates"

perro[1] = "joder" 

console.log(perro)
console.log(perro2);


// ! shallow copy

// solo se pueden copiar si no tienen objetos dentro de objetos

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d", e: "e",
    }
}

const obj2 = {}


for (prop in obj1) {
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1)
const obj4 = Object.create({}, obj1)


// ! JSON

// funciona con objetos dentro de objetos pero no sirve si tiene metodos por dentro

const stringifiedCompleObj = JSON.stringify(obj1) // convierte todo el objeto en string

// {
//     \"a\":\"a\",
//     \"b\":\"b\",
//     \"c\":{
//        \"d\":\"d\",
//        \"e\":\"e\"
//     }
// }

const obj = JSON.parse(stringifiedCompleObj)  // convierte un string en objeto el inverso de stringify

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

// preguntar si es un array

function isArray (subject) {
    return Array.isArray(subject)
}

// copia profunda de un objeto => deep copy

function deepCopy (subject) {
    let copySubject

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
    
    if(subjectIsArray) {
        copySubject = []
    } else if (subjectIsObject){
        copySubject = {}
    } else {
        return subject
    }

    for(item in subject) {
        const keyIsObject = isObject(subject[item])

        if(keyIsObject) {
            copySubject[item] = deepCopy(subject[item])
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[item])
            } else {
                copySubject[item] = subject[item]
            }
        }
    }
    return copySubject
}

// const obj2 = obj1

// console.log(deepCopy(obj2));

// console.log(isObject(obj2))
// console.log(isArray(obj1));

const studentBase = {
    name: undefined,
    age: undefined,
    email: undefined,
    approveCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
        instagram: undefined,
    } 
}

const juan = deepCopy(studentBase)

Object.defineProperty(juan, "name", {
    value: "juanito",
    configurable: false,
})

Object.seal(juan)

console.log(juan);

function error(param) {
    throw new Error(param + "es obligatorio");
}

// roro => recibir un objeto y retornar un objeto

function createStudent({
    name = error("name"),  // argumentos obligatorios, por defecto
    age = error("age"),
    email = error("email"),
    twitter,
    instagram,
    facebook,
    approveCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
        "_learningsPaths": learningPaths,
    }

    const public =  {
        age,
        email,
        approveCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        get name() {
            return private["_name"]
        },

        set name(value) {
            if(value.length != 0) {
                private["_name"] = value
            } else {
                console.warn("error");
            }
        },

        get learningPaths() {
            return private["_learningsPaths"]
        },

        set learningPaths(newLP) {
            if(!newLP.name) {
                console.warn(" tu LP no tiene la propiedad name");
                return 
            }

            if(!isArray(newLP.courses)) {
                console.warn("Tu LP no es una lista (*de cursos)");
                return
            }

            private["_learningsPaths"].push(newLP)
        },

        // ? readName () {
        // ?   return private["_name"]
        // ?},
        // ?changeName(newName) {
        // ?   private["_name"] = newName;
        // ?},
    }

    // ? Object.defineProperty(public, "readName", {
    // ?     configurable: false,
    // ?     writable: false
    // ? })
    // ? Object.defineProperty(public, "changeName", {
    // ?     configurable: false,
    // ?     writable: false
    // ? })

    return public
}

function createLearningPath({
	name = error("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
	const private = { // Atributos privados
		"_name": name,
		"_courses": courses,
	}

	const public = { // Getters y Setters
		
        get name() {
			return private["_name"];
		},

		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName;
			} else {
				console.warn("El nombre debe tener al menos 1 caracter");
			}
		},

		get courses() {
			return private["_courses"];
		},
	}

    return public;
}


const dave = createStudent({
    name: 'david',
    age: 18,
    email: 'dave@gmail.com',
    twitter: "dave_#4324",
    learningPaths: ["github", "git"],
})

console.log(dave);

console.log(dave.name); // Se ejecuta el GETTER
dave.name = "Rigoberto"; // Se ejecuta el SETTER
console.log(dave.name);
console.log(dave.learningPaths);
dave.learningPaths = { name: "github y gt"}
console.log(dave.learningPaths);

const dave = createLearningPath({
    name: "entorno",
    courses: ["github y git"]
})


/*Personalmente, por esa misma razón casi siempre me gusta dejar exclusivamente el 
for .. in para objetos y el for .. of para arrays.

For … in => devuelve los indices o las llaves del array u objeto que esta siendo iterado. 
For … of => devuelve ya directamente los valores. */

// ! instance of

//  instanceof nos arroja true o false si una instancia es de un prototipo en especifico

function LearningPath({
	name = error("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
    this.name = name;
    this.courses = courses;
}

function Student({
    name = error("name"),
    email = error("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    const private = {
        "_leaningPaths" : []
    }

    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_leaningPaths"]
        },
        set(newLp) {
            if(newLp instanceof LearningPath) {
                private["_leaningPaths"].push(newLp)
            } else {
                console.warn("Alguno de los LPS no es una instancia del prototipo LearningPath");
            }
        }
    })

    if (isArray(learningPaths)) {
        this.learningPaths = [];

        for (learningPathIndex in learningPaths) {
            this.learningPaths = (learningPaths[learningPathIndex]);
        }
    }
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });

const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
    escuelaWeb,
    escuelaData,
    ],
});

function SuperObject () {}
SuperObject.isObject = function (subject) {
    return typeof subject === "object"
}


SuperObject.deepCopy = function (subject) {
    let copySubject
    
    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArray(subject)
        
    if(subjectIsArray) {
        copySubject = []
    } else if (subjectIsObject){
        copySubject = {}
    } else {
        return subject
    }
    
    for(item in subject) {
        const keyIsObject = isObject(subject[item])

        if(keyIsObject) {
            copySubject[item] = deepCopy(subject[item])
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[item])
            } else {
                copySubject[item] = subject[item]
            }
        }
    }
    return copySubject
}