async function* anotherFunction() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherFunction();
other.next().then(Response => console.log(Response.value))
other.next().then(Response => console.log(Response.value))
other.next().then(Response => console.log(Response.value))
console.log("hello world");

async function arrayOfnames(array) {
    for await(let value of array){
        console.log(value);
    }
}

const names = arrayOfnames(["oscar","darwin"])
console.log("fire");