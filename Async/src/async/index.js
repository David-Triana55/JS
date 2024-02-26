const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("async"),2000)
            : reject(new Error("error!!"))
    })
}

const anotherFn = async () => {
    const something = await fnAsync()
    console.log(something);
    console.log("hello");
}

console.log("before");
anotherFn();
console.log("after");