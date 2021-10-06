'use strict'
let aceptar=0
let indice=0
let array=[]
let suma=0
let media=0
while(aceptar==0){
    let decision
    do{
        decision=prompt('quieres introducir número (aceptar/cancelar)')
        decision=decision.toLowerCase()
    }while(decision!='aceptar' && decision!='cancelar')
    if(decision=='aceptar'){
        do{
            array[indice]= prompt('introduce el numero')
        }while(isNaN(array[indice]))
        indice++
    }else{
        aceptar=1
    }
}
for(let i=0;i<array.length;i++){
    suma=+suma + +array[i]
}
media=suma/array.length
document.write(`La suma de todos los numeros era ${suma} <br />`)
document.write(`La media de todos los numeros era ${media}`)
