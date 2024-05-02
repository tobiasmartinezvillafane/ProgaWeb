function dejarpasar(edad){
    if (edad>=18){
        console.log("dejar pasar")
    }else{
        console.log("No dejar pasar")
    }
}

dejarpasar(19)


function montaniarusa(altura,acompaniado){
    if (altura>=1.70){
        console.log("dejar pasar")
    }else if (acompaniado){
        console.log("puede pasar")
    }else{
        console.log("puede pasar")
    }
}


function contarhasta10(){
    for(let i=0; i<10;i++){
        console.log(i)
    }
}

contarhasta10()

notas=[1,2,3,4,5]
function duplicar(notas){
    for(let i=0; i<notas.length; i++){
        notas[i]=notas[i]*2
    }
return notas
}

console.log(duplicar(notas))



//metodos de array

notas.push(45)  //agrega al final
notas.unshift(1)  //agrega al principio

notas.pop()  //saca al final
notas.shift()  //saca el primero
console.log(notas)
//indexOf()

function indice (array,elementobuscado){
    for(let i=0; i<array.length; i++){
        if (array[i]===elementobuscado){
            return i
        }
    }
    return -1
}

console.log(indice(notas,4))


let inflacion= [10,20,30,40,50]
let inflacionacumulada= inflacion.reduce( (acumulador, currentvalue) => acumulador + currentvalue)
console.log(inflacionacumulada)

let compras = [
    {producto:"avena", cantidad:400},
    {producto:"arroz", cantidad:1},
    {producto:"Fideos", cantidad:4}
]
console.table(compras)

//aumentar las compras

function cambiarcompras (compras){
    for (let i=0; i<compras.length;i++){
        compras[i].cantidad +=100
    }
    return compras
}

console.table(cambiarcompras(compras))

//manejo de DOM

