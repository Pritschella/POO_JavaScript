/*  

Paradigma
Estructurado
Instancia
Plantilla

Paradigma de promación

Paradima = forma de hacer algo

Paradigma de programación = La forma de programar, la forma de dar soluciones a problemas que se nos presentan. 

Paradigmas de programación (formas de programar)

    - Programación imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programación basada en eventos: Enfocada en la gestión y respuesta de eventos (JS, C#, Python)

    - Programación declarativa: Explicar lo que necesitamos obtener, más que como se hace (HTML, SQL)

    - Programación orientada a objetos: Toma ejemplos del mundo real (objetos), comprende sus características (propiedades o atributos) y con base en su comportamiento o acciones (métodos), resolvemos problemas reales.

    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias (materialización) de este tipo de objetos.

    Objeto: Materialización de la información o los datos con los que cuenta mi plantilla o clase.
    
        Mostar un objeto similar a este
        let Felipe = {
            nombre: "Felipe",
            apellido: "Maqueda",
            edad: 31,
            email: "felipemaqueda@mail.com",
            telefono: "12345678",
        }
*/


//Creando mi primera clase

class persona {
    //Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    //3. Defino un constructor que tomará los atributos como "material" para la instancia o creación de mis objetos
    //el constructor es una función especial, cuya función es la de construir objetos.
    //Al pasar los atributos como parametros, es importante cuidar el orden en cómo fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    //2. Metodos o comportamientos (funciones)
    //Para definir los metodos de mi objeto, ya no utilizo la palabra function(porque estan dentro de una clase)
    hablar() {
        console.log("Hola, estoy hablando...");
    }//Cierre de metodo hablar

    dormir() {
        console.log("Zzzzzzzzz");
    }//Cierre de metodo dormir

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }//Cierre de metodo mostrar info

} //Cierre de mi clase persona

/*
Instancia de objetos del tipo persona

Sitaxis básica de una instacia

Variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)

*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "12345678");
let persona2 = new persona("Naruto", "Uzumaki", 22, "naruto@hokae.com", "1234567800");
let persona3 = new persona("Berenice", "Flores", 24, "prits@hotmail.com", "4949499900");

//Imprimir el objeto completo
console.log(persona1);

//Imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//Incovar el método del objeto
persona1.dormir();
persona2.mostrarInfo();

//Imprimir dos datos en una misma consola. 
console.log(persona1.nombre, persona1.apellido);


/* 
Existen 4 pilares de la POO que nos permiten ampliar las características y dotar de funcionalidades y operaciones a nuestro código.
    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstracción

*/

//Creando una nueva clase para aplicar la HERENCIA
class paciente extends persona {
    //1. Definición de atributos o propiedades
    doctorAtiende = ""; //Nombre del doctor que atiende
    historialMedico = ""; //Si o no en el historial
    alergias = ""; //alergias existentes

    //3. Generación de constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias) {
        super(nombre, apellido, edad, email, telefono); //super indica que traemos de la clase superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    //2. Métodos
    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial Médico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }

}

//Isntancias de un paciente
let paciente1 = new paciente("Jesus", "Gonzalez", 31, "jesusgonzalez@mail.com", "55987654321", "Doctor Simi", "No tiene", "Penicilina");

//Imprimir objeto paciente
console.log(paciente1);

//Uso del método mostar info
paciente1.mostrarInfo();

paciente1.dormir();

//Diferencias entre un objeto literal (normal), y un objeto tipo JSON

//Todas las claves y los valores van dentro de comillas
//Envio de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Tratar la información y sacar datos específicos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

/* 
Realizar un programa que consta de una clase llamada Alumno, que tenga como atributos el nombre y la nota del alumno. Definir métodos para inicializar sus atributos (método constructor), imprimirlos y mostrar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        - nombre
        - nota (calificación)

    Métodos:
        - Constructor
        - Método evaluación (si apruebo o no)
        - Método imprimirInfo (nombre y la nota)

    Lógica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, está reprobado)
        - Recuperamos la información por medio de un prompt
        - Generamos 3 instancias para probar mi código (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)
    
*/

//Creación de la clase (3 pasos)

class alumno {
    //1. Atributos o propiedades
    nombre;
    nota;


    //3. Constructor donde le di identidad a mi objeto (this)
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }


    //2. Métodos
    //Método general, un método que no requeire personalización porque aplica para cualquier objeto
    evaluacion(nota) {
        if (nota >= 6) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    }

    imprimirInfo() {
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);
    }

}

//Instancias de alumnos
let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);

//Incovando métodos 
alumno1.evaluacion(alumno1.nota); //reprobado
alumno2.evaluacion(alumno2.nota); //aprobado
alumno3.evaluacion(alumno3.nota); //aprobado







