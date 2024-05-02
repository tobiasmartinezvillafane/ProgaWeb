//variable
let nombre ="tobias";
let edad;
edad = 19


//constante
const pi = 3.14

//print
console.log("hola mundo")

const ARRAY1 = (1, "tobias", true)
ARRAY1.puch(2)
console.log(ARRAY1)

let estudiante1 = {
    nombre:"Lucia",
    edad:23,
    adeuda:false,

    //metodos
    cumpliranios:function(){
        dia="10"
        estudiante1.edad=estudiante1.edad+1
    }

}
console.log(estudiante1.nombre)
estudiante1.cumpliraanios()

console.log(1+1)       //suma
console.log("estban"+"piazza")    //concatena
console.log("1"+1)
console.log("1"-1)
console.log("esteban"-1)      //NaN

//comparacion debil
console.log("10"==10)      //True

//comparacion estricta, valor y tipo de dato
console.log("10"===10)     //False

//funciones
function saludar(){
    console.log("hola mundo")

}
saludar()

function duplicar(n){
    let resultado = n*2
    return n*2
}
console.log(duplicar(4))

