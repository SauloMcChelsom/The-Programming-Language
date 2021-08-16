var carro = [ 
  { 
    fabricante: 'Ford', 
    modelo: 'GT-200',
    ano: 2009, 
    valor: 120.100, 
    revenda: 'Aqui Carro'
  } 
]
delete carro[0].ano //deletar propriedade do array carro
console.log(carro)//->[{fabricante: 'Ford',  modelo: 'GT-200',  valor: 120.1, revenda: 'Aqui Carro'}]


var q1 = ("revenda" in carro[0])// operador 'in' verificar se uma propriedade existe
console.log(q1)//->true


var q2 = Object.values(carro[0])//obter os valoes, sem as propriedades
console.log(q2)//->[ 'Ford', 'GT-200', 120.1, 'Aqui Carro' ]


var q3 = Object.keys(carro[0])//obter as propriedades, sem os valores
console.log(q3)//->[ 'fabricante', 'modelo', 'valor', 'revenda' ]


var q4 = JSON.parse(' { "nome" : "saulo" } ')//string to obj
console.log(q4)//->{ nome: 'saulo' }


var q5 = JSON.stringify( { nome : "saulo" } )//obj to string
console.log(q5)//->{"nome":"saulo"}


var q6 = carro[0].hasOwnProperty("revenda") //se existe esta propriedade
console.log(q6)//->true


var q7 =  carro.length // quantidade inserido
console.log(q7)//->1


carro.push(
  { 
    fabricante: 'AUDIO',
    modelo: 'A3', 
    ano: 2007, 
    valor: 87.500, 
    revenda: 'Aqui Carro'  
  },
  { 
    fabricante: 'VOLVO',
    modelo: 'RR3', 
    ano: 2018, 
    valor: 107.900, 
    revenda: 'Aqui Carro'  
  },
)//inserir novo carro
console.log(carro)


carro.pop() //remover o ultimo
console.log(carro)


carro.splice(0, 1)// remover lista: 0->indice, 1->quantidade
//console.log(carro)


carro[0].cor = "vermelho"// inserir propriedade
console.log(carro[0])


carro[0].ano = 2019 //atualizar valor da propriedade
console.log(carro[0])


eval(" var aluno = {'nome':'saulo'} ");//criar uma variavel do tipo object
console.log(aluno)         
          

























