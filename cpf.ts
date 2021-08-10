var cpf = "04661870290"
var cpf_semUltimosDigitos = ""

var total = 0
var total2 = 0




for(let i = 0; i < 11; i++){
    if (i < 9){
        cpf_semUltimosDigitos += cpf[i]
    }
}

for (let j = 0; j < 9; j ++){

    let multi =   parseInt( cpf_semUltimosDigitos[j] ) * (j + 1)
   
    total += multi
}

var penultimoDigito = total % 11

if(penultimoDigito == 10){
    cpf_semUltimosDigitos += "0"

}else{
    cpf_semUltimosDigitos += penultimoDigito
}

for(let k = 0; k < 10; k++){
    let mult = parseInt(cpf_semUltimosDigitos[k]) * k 
    total2 +=  mult
}

var ultimoDigito = total2 % 11

if(ultimoDigito == 10){
    cpf_semUltimosDigitos += "0"
    
}else {
    cpf_semUltimosDigitos += ultimoDigito
}

if(cpf == cpf_semUltimosDigitos){
    console.log("CPF VALIDO")

}else{
    console.log("CPF INVÁLIDO!")
}

