// ! Metodo forEach

//  ? no devuelve un nuevo array
const letters = ["a","b", "c", "d", "e", "f"]


letters.forEach(element => console.log(element))


// ! Metodo map

// ? produce nuevo array

const letras = ["a", "b", "c", "d",]

const le = letters.map(letter => letter + "++")

// ! Metodo map-reloaded

const ordes = [
    {
        customerName: "david",
        total: 100,
        delivered: true,
    },
    {
        customerName: "Felipe",
        total: 80,
        delivered: false,
    },
    {
        customerName: "Juan",
        total: 10,
        delivered: true,
    },
    {
        customerName: "pedro",
        total: 20,
        delivered: false,
    }
]

const r = ordes.map(item => item.total)

let tem = ordes.map(item => { // añadir elementos sin modificar el original
    return {
        ...item,
        tax: (item.total * 0.19)
    }
})

console.log("-Map original ", ordes);
console.log("-Map añadir tax " , tem);
console.log("-Map totales ",r);

// ! Metodo Filter

// develve un array con elementos que cumplen una condicion

const words = ["custom", "delivered", "total", "elite"]

const word = words.filter(item => item.length > 6)

const delivered = ordes.filter(item => item.delivered && item.total <= 20)

console.log( "-Filter",delivered);

console.log(word);

// ? busqueda de persona

const search = (heisse) => {
    return ordes.filter(item => {
        return item.customerName.includes(heisse)
    })
}

console.log(search("a"));


// ! Metodo reduce

// primer valor del metodo reduce es el acomulador

const totals = [1,2,3,4,5,6,7,8,9]

const rta = totals.reduce((a,b) => a + b, 0) // ultimo valor indica el estado inicial

console.log("-Reduce" ,rta);

// ! Metodo reduce-reloaded

const items = [1,2,3,3]

const rta2 = items.reduce((obj,item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log("-Reduce",rta2);

const list = [];
    for (let i=0; i<30; i++) {
        list. push(Math. floor(Math.random() * 11));
    }
    const rst = list. reduce((obj, value) => {
        if (value < 5) {
            obj["1-4"] += 1;
        } else if (value < 9) {
            obj["5-8"] += 1;
        } else {
            obj["9-10"] += 1;
        }
        return obj
    }, {
        "1-4": 0,
        "5-8": 0,
        "9-10": 0
    })

console.log("-Reduce-reloaded",rst)

// ! some 

// si alguno de los elementos cumple con esa condicion retorna true o false 

const numbers = [1,2,3,4]

const result = numbers.some(item => item % 2 === 0)
console.log("-Some",result);

// ! every 

// todxs los elementos tiene que cumplir con la condicion retorna true o false

const numbers2 = [3,4,5,7,8,11,12,13,14,15]

const rta3 = numbers2.every(item => item <= 40)

console.log( "-Every",rta3);

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const rta4 = team.every(item => item.age <= 18)

console.log("edades",rta4);

// ! Find 

// me devuelve un elemento que cumpla con la condicion y nos retorna solo el elemento, si no devuelve undefined

// ! findIndex nos devuelve en que posicion de array se encuentra el elemento, si no devuelve -1


const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];


let findFood = products.find(item => item.price === 12)

console.log("-Find", findFood);

// ! Incluides

// nos devuelve un true o un false si se incluye en un array un elemento o en un string

const pets = ["cat", "dog", "bat"]

const includes = pets.includes("cat")
console.log("-includes: ", includes);

// ! Join

// une los elementos de un array en un string con el elemento que le mandemos como concatenador 

const elements = ["water", "fire" , "wind"]

const join = elements.join(" ")

console.log("-Join", join);

// ! Split

// nos convierte un string en un array 

const title = "that's a example of sentence" 
const titleFinal = title.split(" ").join("--")
console.log("-split and join", titleFinal);

// ! Concat 

// para concatenar array

const element = [1,3,4,2,4]
const otherElement = [3,3,42,]

const concat = element.concat(otherElement)
const concat2 = [...element, ...otherElement]

console.log("Concat",concat);
console.log("Concat2",concat2);

// ! flat

// aplana los array anidados

const matriz = [
    [1,2,3],
    [4,5,6,[1,4,3,4,[1,2,3,[4,5,6]]]],
    [7,8,9],
]

const flat = matriz.flat(4)

console.log( "-Flat",flat);


const newArray = []

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
    
}
console.log("-Flat con for",newArray);

// ! FlatMap

// aplana los array anidados pero tambien nos permite trasnformalos

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
]

const usersMap = users.map(user => user.attributes).flat()
console.log("-Map y flat",usersMap);

const userMap2 = users.flatMap(user => user.attributes)
console.log("-FlatMap",userMap2);


const calendars = {
    primaryCalendar: [{
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
        },
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [{
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
        },
        {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
        },
    ],
};

let dates = Object.values(calendars).flatMap(dates => {
    return dates.map(item  => item.startDate)
})
console.log("-FlatMap Dates ",dates);

// exercise

let Input =  [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
]

function countWords(array) {
    let array1 = array.map(item => item.split(" ")).flat()
    console.log("-CountWordsExercise", array1);
    console.log("-CountWordsExercise", array1.length);

}
countWords(Input)

// ! Metodos Mutables 


// ? Push ➡️ agrega uno o varios elementos al final del array original. recibe como argumento los valores a agregar.

// ? Unshift ➡️ agrega uno o varios elementos al inicio del array original recibe como argumento los valores a agregar.

// ? Pop ➡️ extrae el elemento del final del array original. El método no recibe ningún argumento

// ? Shift ➡️ extrae el elemento del inicio del array original. El método no recibe ningún argumento

// ? splice ⬇️ extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento

/* array.splice(índice, cantidad, items)
array.splice(índice, cantidad, item1, item2, ..., itemN)

?  [1,2,3,4] => array.splice(2,1,"tres") => [ 1, 2, 'tres', 4 ]

El método splice recibe tres argumentos:

El índice donde comenzará a cambiar el array.    
La cantidad de elementos que serán reemplazados.  
Uno o varios elementos que reemplazarán a los originales del array.  
*/

const products1 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products1);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products1.findIndex(item => item.id === '🍔');
    if (productIndex !== -1) {
        products1.splice(productIndex, 1);
        myProducts.push(products1[productIndex]);
    }
console.log("products", products1);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

  // Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
    ];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);

// ! Sort

// organizar los elementos de un array y muta el array original


const months = ['march', 'jan', 'f', 'a'];
months.sort() 
console.log(months);

const numberos = [1, 30, 4, 21, 100000]
numberos.sort((a, b) => a - b)
console.log(numberos);

const wordss = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort()
console.log(orders);




export function simulacion({ satelite, estacion, astronauta, texto }) {
    satelite.send({
        from: astronauta,
        to: estacion,
        text: texto,
    });
    return satelite.messages;
}

export class Astronaut {
    constructor({ name }) {
        this.name = name;
    }
}

export class SpaceStation {
    constructor({ name }) {
        this.name = name;
        this.team = [];
    }

    addTeamMember(newMember) {
        if (newMember instanceof Astronaut) {
            this.team.push(newMember.name);
        }
    }
}

export class Satelite {
    constructor({
        name,
    }) {
        this.name = name;
        this.messages = [];
    }
    
    send({ from, to, text }) {
        if (from === "Astronauta") {
            if(SpaceStation.team instanceof SpaceStation) {

                this.messages.push({
                    from: from.name,
                    to: to.name,
                    text: text,
                });
            }
        }
    }
}