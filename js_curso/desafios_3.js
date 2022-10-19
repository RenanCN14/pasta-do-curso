let valor = ""
function converter(valor) {

    if(valor.toLowerCase().includes("c")){
        valor = valor.toLowerCase().replace("c","")
        let resultado = (Number(valor)-32 * 5/9 +" F")
        return resultado
    }
    else if (valor.toLowerCase().includes("f")){
        valor = valor.toLowerCase().replace("f","")
        let resultado = (Number(valor) * 9/5 +32 +" C")
        return resultado
    }
    else{
        valor = 'Grau não encontrado'
        return valor
    }
}

console.log(converter("5F"))
console.log(converter("10c"))
console.log(converter("20g"))
console.log(converter("40B"))
console.log(converter("23C"))
console.log(converter("80D"))
console.log(converter("100f"))
console.log(converter("0c"))
