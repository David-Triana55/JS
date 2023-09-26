// objetos literales no son iguales a poo tales como => [] {}

const natalia = {
    name: "natalia",
    age: 19,
    cursosAprobados: [
        "curso Definitivo html y css",
        "curso practico de html y css"
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

function Student(name,age,cursosAprobados) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
}

// prototipo de student que hace una funcion para ejecutar algo

Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}

const juan = new Student(
    "juan",
    18,
    ["curso de creacion de personajes",
    "curso de github"
    ]
)

// prototipo con clases

class Student2 {
    constructor({name ,age ,cursosAprobados = [] ,email}) {

        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados
        this.email = email
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const migue = new Student2({
    email: "migue@gmail.com",
    name: "migue",
    age: 28,
})