var word = "http://localhost:3000/img/produto/201953172342.png" 

var q1 = word.length //retorna o tamanho da string (quantidade de bytes)
console.log( q1 )// -> 50

var q2 = word.charAt(6)//encontra um caracter na posiçaõ informado pelo
console.log( q2 )// ->  /

var q3 = word.charCodeAt(7)//valor unicode
console.log( q3 )// -> 108

var q4 = word.concat(" EUA")//concatena numero, letra, caracter na ultima posição da fraze
console.log( q4 )// -> http://localhost:3000/img/produto/201953172342.png EUA

var q5 = word.indexOf("a")//encotra o primeiro ( a )
console.log( q5 )// -> 10

var q6 = word.lastIndexOf("a")//encotra o  ultimo ( a )
console.log( q6 )// -> 10

var q7 = word.replace("i","as")// encontra o primeiro ( i ) e altere por ( as )
console.log( q7 )// -> http://localhost:3000/asmg/produto/201953172342.png/img/produto/201953172342.png

var q8 = word.substring(21)// extrai um pedacao da string, ex.: de (arg1)  ate (arg2)
console.log( q8 )// -> /img/produto/201953172342.png

var q9 = word.substr(3,5)
console.log( q9 )// -> p://l

var q10 = word.split("o")
console.log( q10 )// -> [ 'http://l', 'calh', 'st:3000/img/pr', 'dut', '/201953172342.png' ]

var q11 = word.toLowerCase()//letra minuscula
console.log( q11 )// -> 

var q13 = word.toUpperCase()//letra maiuscula
console.log( q13 )// -> 
