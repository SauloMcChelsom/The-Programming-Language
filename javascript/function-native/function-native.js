
var nome = "ana"

var q1 = (17 >= 18) ? "maior de idade"  :  "menor de idade"
console.log(  q1  )// ->menor de idade

var q2 = 22.33.toFixed(4)//formata um número usando a notação de ponto fixo.
console.log(  q2  )// ->22.3300

var q3 = typeof(nome)//retorna o tipo - string, number, boolean...
console.log(  q3  )// ->string

var q4 = ( nome instanceof Number )//Indica se objeto e do tipo especificado string,number,boolean,objeto
console.log(  q4  )// ->false

var q5 = eval("2*q2")//avalia uma expressao string
console.log(  q5  )// ->44.66

var q6 = isNaN(5)//função determina se um valor é NaN ou não
console.log(  q6  )// ->false

var q7 = parseFloat("1253.45")//converter string para numero de ponto flutuan
console.log(  q7  )// ->1253.45

var q8 = parseInt("1253.45")//converter valores de string em valores numericos
console.log(  q8  )// ->1253

setTimeout(()=> console.log("ana"), 3000)
// -> ana

