class LearningPath {
    constructor({name, courses = []}) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "escuela de desarrollo web",
    courses: [
        "cursoJS",
        "cursoReact",
        "cursoNextJ" 
    ]
});

const escuelaData = new LearningPath({
    name: "escula de data",
    courses: [
        "cursoPython",
        "CursoMatematicas",
        "CursoExcel",
    ]
});

class Student {
    constructor({name,email,username,twitter = undefined,instagram = undefined,facebook = undefined,approvedCourses = [],learningPaths = [] }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {twitter,instagram,facebook};
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaData
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const david = new Student({
    name: "david",
    age: 28,
    username: "davidCode",
    email: "david@gmail.com",
    instagram: "david_triana55",
//  learningPaths: [
//         escuela ingles,
//         escuela diseño
//     ]
});