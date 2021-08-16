# Variáveis JavaScript

As variáveis são o que compõe a maior parte do nosso código JavaScript. Essas variáveis constituem valores de números a objetos, que são maneiras de tornar a vida muito mais fácil.

Definindo uma Variável

```js
var minhaVariavel= 'Esta e uma variavel!';
```

Usando uma variável

```js
var numero = 5;
    numero = 3;
```

Aqui, definimos uma variável chamado “numero” que era igual a 5. No entanto, na segunda linha, mudamos o valor para 3. Para mostrar o valor de uma variável, podemos usar o console ou window.alert()

```js
console.log(numero);
// → 3
window.alert(numero); 
// → 3
```
Para adicionar, subtrair, multiplicar, dividir, etc., fazemos assim:

```js
var numero_1 = numero
var numero_1 = numero_1 + 5;
// → 3 + 5 = 8
numero_1 = numero_1 - 6;
// → 8 - 6 = 2
var numero_2 = numero_1 * 10;
// → 2 * 10 = 20
var numero_3 = numero_2 / numero_1; 
// → 20 / 2 = 10;
```
Também podemos adicionar strings que irão concatená-los ou colocá-los juntos. Por exemplo:

```js
var minhaString = 'eu amo minha' + 'string!';
// → 'eu amo minha string!'
```

Tipos de Variáveis

```js
var idade = 12; 
// 32-bit Integer (de -2,147,483,648 a 2,147,483,647)
 
var km = 9310141419482; 
// 64-bit Long (de -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807)
 
var preco = 5.5; 
// 32-bit ponto flutuante (decimal)
 
var total = 9310141419482.22; 
// 64-bit número de ponto flutuante
 
var loja = true; 
// 1-bit Boolean  (true/false ou 0/1)
 
var sobrenome = NaN;
// Não é um número
 
var nome; 
// undefined: nós não definimos nada ainda 
 
var opcao = null; 
// null
 
// etc...
```

Arrays e Objetos

```js
var meuArray = []; 
// array vazio
```

Um array é um conjunto de variáveis. Por exemplo:

```js
var frutas = ["maria", "laranja", "morango"];
 
var carros = ["Toyota", "Ferrari", "Lexus"];
 
var empregados = ["ana", "maria", "carlos"];
 
var numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
 
var valores = [2, "ana", undefined, null, true, 2.51];
 
meuArray = ["zero", "um", "dois"];
 
console.log(meuArray[0]); 
// 0 e o primeiro elemento de um array
 
// neste caso, o valor seria "zero"
  
meuArray = ["ana", "maria"];
 
console.log(meuArray[1]);
// → maria
```

Um Objeto é um grupo de valores; ao contrário dos arrays, podemos fazer algo melhor do que eles:

```js
meuObject = {};
cliente= {nome: "ana", sobrenome: "silva", nomeCompleto: "ana silva"};
loja = {
 nome: "carioca",
 cidade: undefined,
 estado: "RJ"
};
console.log(cliente.nomeCompleto);
// → ana silva
console.log(loja.nome);
// → carioca
```