// const cuadrado = document.querySelector("#container")

// cuadrado.addEventListener("click", handleClick)

// function handleClick(e){
//     // if(e.target.classList.contains("cuadrado")){
//     //     e.target.classList.remove("cuadrado")
//     //     e.target.classList.add("circulo")
//     // } else if (e.target.classList.contains("circulo")){
//     //     e.target.classList.remove("circulo")
//     //     e.target.classList.add("cuadrado")
//     // }
//     if(e.target.classList.contains("cuadrado")){
//         e.target.classList.toggle("circulo")
//     }

//     if(!e.target.classList.contains("rojo")){
//         e.target.classList.add("rojo")
//     }
// }


let formulario = document.forms[0]
console.log([formulario])

const nombres = []
const numeros = [1,2,3,4,5,6,7,8,9,10]

// formulario.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     nombres.push(formulario[0].value)
//     console.log(nombres)
//     crearLista(nombres, "#lista")
// })

function crearLista(elementos, donde){
    let lista = document.querySelector(donde)
    lista.innerHTML = ""
    elementos.forEach(elemento => {
        let li = document.createElement("li")
        li.innerHTML = elemento
        lista.appendChild(li)
    })
}

const radioButtons = document.querySelectorAll("input[type='radio']")

radioButtons.forEach(radio => radio.addEventListener("change", verificarSeleccion))

function verificarSeleccion(){
    let seleccionado = Array.from(radioButtons).filter(radio => radio.checked)
    console.log(seleccionado)
    let arrayFiltrado = filtrarNumeros(numeros, seleccionado[0].value)
    crearLista(arrayFiltrado, "#lista")
}

function filtrarNumeros(arrayNumeros, filtro) {
    let numerosFiltrados = arrayNumeros.filter(numero => numero%2 == filtro || filtro === "todos")
    return numerosFiltrados
}