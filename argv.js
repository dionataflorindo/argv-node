const { argv } = require("process")

// @ts-ignore
let arg= process.argv.slice(2)


let pedro = {
    altura: 1.89,
    peso:59,
    idade:33

}

let joao = {
    altura: 2.10,
    peso:98,
    idade:27

}

let pessoa1 = arg[pedro]
let pessoa2 = arg[joao]

let pessoa = ""

if( arg == 'joao'){
    pessoa = pessoa2
    console.log(joao)

}else if( arg == 'pedro'){
    pessoa = pessoa1
    console.log(pedro)

}else{

    console.log('não há registros')

}