var paises = ["Brasil", "EUA", "India", "Russia", "China"];


var q1 = paises.length //mostra quantos elementos tem no array
console.log(q1);// -> 5

var q2 = paises.toString()
console.log(q2);// -> Brasil,EUA,India,Russia,China

var q3 = paises.indexOf("India")//passando um elemento mostar o seu indice no vetor
console.log(q3);// -> 2

var q4 = paises.reverse();// reversa a ordem do array
console.log(q4);// -> [ 'China', 'Russia', 'India', 'EUA', 'Brasil' ]

var q5 = paises.sort();//ordena em ordem alfabetica
console.log(q5);// -> [ 'Brasil', 'China', 'EUA', 'India', 'Russia' ]

var q6 = paises.join(" #");//serve para colocar separador
console.log(q6);// -> Brasil #China #EUA #India #Russia

var q7 = paises.concat("Argentina");//serve para concatenar e nao inseri
console.log(q7);//[ 'Brasil', 'China', 'EUA', 'India', 'Russia', 'Argentina' ]

var q8 = paises.slice(3);//remove todos elementos aparti de um indice decrementando
console.log(q8);// ->[ 'India', 'Russia' ]

var q9 = paises.splice(3, 1, "Argentina")//arg1 - remover elemento pelo indice
                                        //arg2 - quantidade de elemento a ser removido
                                       //arg3 - valor colocado no indice removido(opcao)
                                      //usado para renomear ou excluir elemenro
console.log(paises);// ->[ 'Brasil', 'China', 'EUA', 'Argentina', 'Russia' ]

var q10 = paises.shift()// remove o primeiro elemento no array
console.log(paises);// ->[ 'China', 'EUA', 'Argentina', 'Russia' ]

var q11 = paises.pop()// remove o ultimo elemento do array
console.log(paises);//->[ 'China', 'EUA', 'Argentina' ]

var q = paises.unshift("japão")//inserir elemento no inicio do array
console.log(paises);// -> [ 'japão', 'China', 'EUA', 'Argentina' ]

var q = paises.push("França")// inserir elemento no final do array
console.log(paises);//-> [ 'japão', 'China', 'EUA', 'Argentina', 'França' ]







