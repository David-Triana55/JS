// no romper flujo de app con el signo ?

const users = {
    dave: {
        country: "United"
    } ,
    ana: {
        country: "colombia"
    }
}

console.log(users.dave.country);
console.log(users?.haa?.country);