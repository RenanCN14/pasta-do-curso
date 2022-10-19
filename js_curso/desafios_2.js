let familia = {
    receitas:[1200, 3200, 250.43, 360.45],
    despesas:[320.34, 128.45, 176.87, 1450, 2000]
}

function sum(array){
    let total = 0;

    for(let i of array){
        total+=i
    }

    return total
}

function calculateBalance(){
    const calculateReceita = sum(familia.receitas)
    const calculateDespesas = sum(familia.despesas)

    const total = calculateReceita - calculateDespesas

    const itsOK = total >= 0
    let balanceText = "Negativo"
    if (total){
        balanceText = "Positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)

}

calculateBalance()