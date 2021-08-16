function Carro(marca, modelo, ano, preco) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.preco = preco
}

let  carro1 = new Carro("Eagle", "Talon TSi", 1993, 25000);
let  carro2 = new Carro("Nissan", "300ZX", 1992,46000);
let  carro3 = new Carro("Mazda", "Miata", 1990,67000);

function Pessoa(id, nome, idade, sexo, carro) {
    this.id = id
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.carro = carro
}

let cliente_1 = new Pessoa(1, "Jose Silva", 33, "M", carro1);
let cliente_2 = new Pessoa(2, "Paulo Santos", 39, "M", carro3);
let cliente_3 = new Pessoa(3, "Ana Clara", 21, "F", carro2);
let cliente_4 = new Pessoa(2, "Paulo Santos", 39, "M", carro1);

let cliente = []

cliente.push(cliente_1)
cliente.push(cliente_2)
cliente.push(cliente_3)
cliente.push(cliente_4)
    

//obter cliente do mesmo id
let getClientById = cliente.filter( item => item.id == 2)
console.log(getClientById)

//de um desconto de preço de 5000
let priceDiscount = getClientById.map(item =>  item.carro.preco +=  -5000);
console.log(priceDiscount)

//total do valor a apagar
let  totalValue = priceDiscount.reduce((sum, item) => { return  sum + item}, 0);
console.log(totalValue)
