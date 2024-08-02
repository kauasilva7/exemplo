let primeiroNome = "Kaua"
let ultimoNome = "Miranda"

let nomeCompleto = primeiroNome + " " + ultimoNome
console.log(nomeCompleto)


let numero1 = 10 
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2 
let multiplicacao = numero1 * numero2 
let divisao = numero1 / numero2
console.log(soma,subtracao,multiplicacao, divisao )

let estaChovendo = true
if(estaChovendo){
    console.log('Está chovendo')
}else{
    console.log('Não está chovendo')
}

let resposta = null
let nota

console.log(resposta, nota)


let idUnico = Symbol()

let produto ={
    [idUnico] : 123,
    nome: 'Camiseta'
}
console.log(produto[idUnico])

let numeroGrande = BigInt('313131382153765427865426784253678457342')
console.log(numeroGrande)