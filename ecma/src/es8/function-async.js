const async = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("async"),2000)
        : reject(new Error("ERROR!"))
    })
}

const anotherFn = async () => {
    const some = await async()
    console.log(some);
    console.log("hello");
}

console.log("before");
anotherFn()
console.log("after");