const sum = function(x, y){
    let result=x+y
    return result
}

console.log(sum(2, 3))
console.log(sum(5, 9))
console.log(sum(10, 22))
console.log(sum(20, 0))


let subject = "Criar video"

function criarPensamento(){
    subject = "Estudar"
    return subject
}

console.log(subject)
console.log(criarPensamento(subject))

const sayMyName = () => {

    console.log("Renan")
}

sayMyName()

function digaMeuNome(nome){
    console.log(nome)
}

digaMeuNome("Renan")

function Person(name){
    this.name = name
}
const mayk = new Person("Mayk")
console.log(mayk)

