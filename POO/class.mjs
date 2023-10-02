class Comment {
    constructor({content, studentName, studentRole = "estudiante"}) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0
    }

    publicar() {
        console.log(this.studentName + "(" +this.studentRole +")");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}

export class DavidClass {
    constructor({name, video,}) {
        this.name = name;
        this.video = video;
    }

    reproducir() {
        videoPlay(this.video)
    }

    pausar() {
        pauseVideo(this.video)
    }
}

function videoPlay(id) {
    const url = "http://video.secretop.com" + id
    console.log("se esta reproduciendo video " + url);
}

function pauseVideo(id) {
    const url = "http://video.secretop.com" + id
    console.log("pause video " + url);
}

// !   _________________cursos________________________________________________________________

// # hace los campos privados en las clases
class Course {
    #name
    constructor({name,classes=[],isFree = false, lang = "spanish"}){
        this.#name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang; 
    } 

    get name() { // obtiene el nombre
        return this.#name;
    }

    set name(nuevoNombrecito) { // modificar el nombre 
        if (nuevoNombrecito === "Curso Malito de Programación Básica"){
            console.error("Web... no");
        } else {
            this.#name = nuevoNombrecito;
        }
    }
}

const cursoProgBasica = new Course({
    name:"Curso Gratis de Programación Básica", 
    isFree: true
})

const cursoDefinitivoHTML = new Course({
    name:"Curso Definitivo de HTML y CSS",
    lang: "english"
})

const cursoPracticoHTML=new Course({
    name:"Curso Practico de HTML y CSS"
});

// ! ____________________________ruta aprendizaje________________________________________________________________


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

// ! ____________________________Estudiante________________________________________________________________
class Student {

    constructor({name,email,username,twitter = undefined,instagram = undefined,facebook = undefined,approvedCourses = [],learningPaths = [] }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {twitter,instagram,facebook};
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComent(comentario) {
        const comment = new Comment({
            content: comentario,
            studentName: this.name
        })

        comment.publicar()
    }
}

class freeStudent extends Student{
    constructor(props) {
        super(props);
    }
    
    approveCourse(newCourse){
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("lo sentimos,"+ this.name + " solo puedes tomar cursos abiertos");
        }
    }

    p
}

class BasicStudent extends Student{
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("lo sentimos,"+ this.name + "no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse){
        this.approveCourse.push(newCourse)
    }
}

class TeacherStudent extends Student{
    constructor(props) {
        super(props); 
    }

    approveCourse(newCourse){
        this.approveCourse.push(newCourse)
    }

    publicarComent(comentario) {
        const comment = new Comment({
            content: comentario,
            studentName: this.name,
            studentRole: "teacher"
        })

        comment.publicar()
    }
}

const fredy = new TeacherStudent({
    name: "Fredy",
    username: "Fredier",
    email: "fred@fredy.com",
    instagram: "fredier",
});

fredy.publicarComent("hello")

const juan2 = new freeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb.courses,
        escuelaData
    ],
});

const dabid = new BasicStudent({
    name: "david",
    username: "daveCode",
    email: "david@gmail.com",
    instagram: "david_triana55",
    learningPaths: [
        escuelaData.name, escuelaData.courses,
        escuelaWeb.name, escuelaWeb.courses
    ],
})

console.log(juan2.approveCourse(cursoProgBasica))

const miguelito2 = new ExpertStudent({


    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb.courses,
        escuelaData,
    ],
});

const david = new Student({
    age: 28,
    username: "davidCode",
    email: "david@gmail.com",
    instagram: "david_triana55",
    name: "david",
});

console.log(dabid);