//---------------------------------------------------------------------------------
//FORMAS DE DECLARAR FUNCIONES EN JS
//---------------------------------------------------------------------------------


//STANDAR 

function sumar (a, b){
    return a + b
}

//FORMA ANONIMA

const formatoAnonima = function(a, b){
    return a + b
}

//FUNCION FORMATO FLECHA
const sumarFormatoFlecha = (a,b) => a+b;

let op1 = 5
let op2 = 6
resultado = sumarFormatoFlecha(op1, op2)
console.log(`La suma de ${op1} mas ${op2} es igual a ${resultado}`)

// RETORNAR OBJETOS EN JAVASCRIPT


const getPersona = () => {
    return {nombre: 'Ezequiel', edad: 18}
}

console.log(getPersona())

//OTRA FORMA

const getPersona2 = () => ({nombre: 'Ezequiel', edad: 18})


console.log(getPersona2())


//---------------------------------------------------------------------------------
// VARIABLES Y TIPOS DE DATO:
//---------------------------------------------------------------------------------

// 1. TIPOS PRIMITIVOS (NUMBER,BOOLEAN,STRING,UNDEFINED,NULL) -> COPIA POR VALOR:

//SI ALTERAMOS EL VALOR LA COPIA VA A SER IGUAL AL VALOR INICIAL PORQUE ES COPIA POR VALOR

//TIPO NUMBER

var an =1
var bn = an
an = 10
console.log(an)
console.log(bn)

//TIPO BOOLEAN

var ab = true
var bb = ab
ab = false
console.log(ab)
console.log(bb)

//TIPO STRING

var as = "Hola"
var bs = as
as = "Chau"
console.log(as)
console.log(bs)

//2. TIPOS OBJETO (ARRAY,OBJECT,FUNCTION) -> COPIA POR REFERENCIA

//SI ALTERAMOS EL VALOR LA COPIA VA A SEGUIR IGUAL PORQUE ES COPIA POR REFERENCIA

//TIPO ARRAY

var aa = [1,2,3]
var ba = aa
aa[0] = 11
console.log(aa)
console.log(ba)

//TIPO OBJETO

var ao = {x:1}
var bo = ao
ao.x=11
console.log(ao)
console.log(bo)

//EJEMPLO 1 FUNCTION ALTERAR UN PARAMETRO DE TIPO PRIMITIVO

var fecha = '23/12/2020'

function agregarHoraAFecha (f){
    f = f + ' 12:25:00'
    console.log(f)
}

console.log(fecha)
agregarHoraAFecha(fecha)
console.log(fecha)

//EJEMPLO 2 FUNCTION ALTERAR UN PARAMETRO DE TIPO OBJETO

var fechaObj = {f: '20/12/2020'}
function agregarHoraAFechaObj (fobj){
    fobj.f = fobj.f + ' 12:25:00'
    console.log(fobj)
}

console.log(fechaObj)
agregarHoraAFechaObj(fechaObj)
console.log(fechaObj)

//---------------------------------------------------------------------------------
//BOM (Browser Object Model) : window y DOM (Document Object Model): document
//---------------------------------------------------------------------------------

console.log('h', window.innerHeight)
console.log('w', window.innerWidth)

//ACCESO AL DOM

console.log(window.document.getElementById('titulo'))
console.log(window.document.getElementsByTagName('h1'))