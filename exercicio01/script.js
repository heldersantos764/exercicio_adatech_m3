//Exercício 1: Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.
const carro = {
    marca: "fiat",
    modelo: "modelo",
    ano: 2023,
    cor: 'vermelho'
}

console.log(carro)


//Exercício 2: Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).
const circulo = {
    raio: 10,
    calcularArea: function() {
        return Math.PI*this.raio**2
    }
}

console.log(circulo.calcularArea())

//Exercício 3: Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.
const aluno = {
    nome: "Pedro",
    idade: 25,
    mostrarInformacoes: function() {
        return `Nome: ${this.nome} - idade: ${this.idade}`
    }
}

console.log(aluno.mostrarInformacoes())

//Exercício 4: Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.
const livro = {
    titulo: "título do livro",
    autor: "Eu",
    detalhes: function(){
        return `titulo: ${this.titulo} - autor: ${this.autor}`
    }
}

console.log(livro.detalhes())

//Exercício 5: Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.
class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){
        return this.largura*this.altura;
    }
}

const retangulo = new Retangulo(10, 40)
console.log(retangulo.calcularArea())