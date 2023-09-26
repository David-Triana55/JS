const user = { username: 'davecode', email: 'hdhiha', password: "davecode"}

const {password, ...values} = user
console.log(values);