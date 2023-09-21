// arrays dresctructuring

let fruis = ["apple", "banana"]
let [a,b] = fruis
console.log(a, fruis[1]);

let user = {username: "oscar", age: 28}
let {username, age} = user
console.log(username, age);

// spread operator

let person = {name: "oscar", age: 28}
let country = "CO"

let data = {id:2, ...person, country}
console.log(data);

// rest

function suma(num,...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
// pasa como un default
function solution(json1 = {name: "Mr. Michi",food: "Pescado",},json2 = {age: 12,color: "Blanco",} ) {
    return {...json1,...json2,};
}
solution({name: "Mr. Michi",food: "Pescado"}, {age:20,color: "red"} )