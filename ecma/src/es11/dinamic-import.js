let boton = document.getElementById("btn")
let p = document.getElementById("p")

boton.addEventListener("click", async function(){
    const module = await import("./module.js");
    console.log(module);
    p.innerHTML = "Hello"
    module.hello()
})