// teste de variaveis

//atribuindo valores
let idade = 25
console.log (idade)

//modificando valores
idade = 32
console.log (idade)

//recuperando valores
idade = idade +1
console.log(idade)

//VAR, LET OU COSNT

function exemploVAR(){
    var x = 5
    if(true){
        var x = 10
        console.log(x)
    }
    console.log(x)

}
    function exemploLET(){
        let x = 5
        if(true){
           let x = 10
            console.log(x)
        }
        console.log(x)
}  
function exemploCONST(){
    const x = 5
    //const Y:  não existe variavel vazia
    if(true){
       const x = 10
        console.log(x)
    }
    //não podemos re-atribuir/modificar o valor
    x = 15
    console.log(x)
} 
//tipos de variaveis em JS
function tiposVariaveis(){
    //numeros
    let idade = 25
    let peso = 80.00
    console.log(idade,peso)

    //texto

    let nome = 'Vanessa'
    //ou
    let nome_ = "João"
    console.log(nome, nome_)

    //boolean
    let verdadeiro = true
    let falso = falseconsole.log (verdadeiro, falso)
    console.log(verdadeiro, falso)

    //Array
    let lista = ['laranja', 'maçã', 'banana']
    let precos = [1.99, 2.99, 7.99]
    let mista = ['gol', 5, 1.99, true, false]

    console.log(lista)
    console.log(precos)
    console.log(mista)
}
//chamando as funções para execução  

exemploVAR()
exemploLET()
exemploCONST()

