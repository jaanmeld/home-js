console.log("JavaScript funcionando correctamente")
// alert("Esto es cuadro de dialogo")
let variableSinValor 
let booleano1 = true
let booleano2 = false
const PI = 3.14
const TAU = 2*PI
const miNombre = "Janis"
let miNumeroFav = 82
let boolVar = true
console.log(miNombre.length)
console.log(typeof miNumeroFav)
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`)
let mayusculas = "Seré un crack en JavaScript al terminar el bootcamp" 
console.log(mayusculas.toUpperCase())
const crack = "Hola soy un crack"
console.log(crack.substring(0,4))
miNumeroFav = `"${miNumeroFav}"`
console.log(typeof miNumeroFav)

const iWillBecomeOther = "I am not the first const"
const iWasOther = `${iWillBecomeOther}`
console.log(iWasOther)

console.log(PI.toFixed(2))

const arrayVacio = undefined
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9]
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const arrayNumerosPares = [0, 2, 4, 6, 8]
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
const holaMundo = ['Hola', 'Mundo']
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
console.log(loGuardoTodo.length)
console.log(loGuardoTodo[1])
loGuardoTodo.push('Euralio')
console.log(loGuardoTodo)
const coche = {
    marca: "Lexus",
    modelo: "CT200",
    matricula: "HZN1403"
}
const casa ={
    codPostal: "46100",
    calle: "San Ignacio de Loyola",
    portal: "22",
    piso: "18"
}
const FullStackDeveloper = {
    lenguajes: ['javascript','php'],
    proyectos: ['homeimprovement', 'insurance portal', 'training program']
}
const perro = {
    nombre: "Simon",
    raza: "Husky",
    color: "gris",
    edad: 12
}

const noticia = {
    titular: "Asteroide esta vez viene de verdad!",
    cuerpo: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil iure dolores delectus debitis eligendi molestiae sequi officia corporis unde, in accusamus beatae doloremque ducimus id architecto ullam suscipit saepe impedit."
}

const persona = {
    nombre: "Janis",
    apellidos: "Melderis",
    edad: "41"
}
console.log(persona.nombre)

console.log(FullStackDeveloper.lenguajes[0])

let Portatil = {
    marca: "Samsung"  /*era MSI originalmente*/
    }
console.log(Portatil.marca)

const Concierto = {
    grupos: ["Silverchair", "Red Hot Chilly Pepers", "Dresden Dolls"]
}
console.log(Concierto.grupos)

const Led = {
    lampara1: "rojo",
    lampara2: "verde",
    lampara3: "azul"
}

const RGB = [
    Led.lampara1.charAt(0).toUpperCase() + Led.lampara1.slice(1),
    Led.lampara2.charAt(0).toUpperCase() + Led.lampara2.slice(1), Led.lampara3.charAt(0).toUpperCase() + Led.lampara3.slice(1)
]
console.log(RGB)

const O_Error = {
    código: "404"
}
console.log(O_Error.código)

const grupo = {
    integrantes: ["Juan", "Braulio", "Santana"]
}
const integrantes = grupo.integrantes
console.log(integrantes[1])

const impresora = {
    tinta: {rojo:"", verde:"", azul:""}
}
const nivelesTinta = impresora.tinta
console.log(nivelesTinta)

const Movil = {
    especificaciones: ["iPhone 14", "2022", "obsoleto" ]
}
console.log(Movil.especificaciones)

Portatil = {
    marca: "MSI"
}
console.log(Portatil)

Concierto.grupos.push("Guns N' Roses")
console.log(Concierto)

Concierto.fecha = "2023/09/18/"
console.log(Concierto)

let fecha = Concierto.fecha
Concierto.fecha = new Date().toLocaleDateString('es-ES', {year: "numeric", month: "2-digit", day: "2-digit"})
console.log(Concierto)

grupo.integrantes.pop()
console.log(grupo.integrantes.length)