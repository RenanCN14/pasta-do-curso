function notas(valor){

        if (valor < 59 && valor > 0){
            nota = "F"
        }
        else if (valor > 60 && valor < 69){
            resultado = "D"
        }

        else if (valor > 70 && valor < 79){
            nota = "C"
        }

        else if (valor > 80 && valor < 89){
            nota = "B"
        }
            
        else if (valor > 90 && valor < 101){
            nota = "A"
        }

        else{
            nota = "Nota invalida"
        }
    console.log(nota)
}
notas(100)