var q = new Date() 

    p1 = q.getTime()//método retorna o número de milissegundos * desde a época do Unix 
    console.log( p1 )// -> 1600191405877


    p2 = q.getFullYear() 
    console.log( p2 )// ->   2020


    p3 = q.getDate()//Obter o dia do mes (numerico de 1 a 31)// ->  
    console.log( p3 )// ->   15


    p4 = q.getDay()//Obter o dia da semana (0 a 6)// ->  
    console.log( p4 )// ->   2


    p5 = q.getMonth()//Obtem o mes (numerico de 0 a 11)// ->  
    console.log( p5 )// ->   8


    p6 = q.getYear()// Obter o ano 
    console.log( p6 )// ->   120


    p7 = q.getHours()//Obter a hora (numerico de 0 a 23)// ->  
    console.log( p7 )// ->   14


    p7 = q.getMinutes()//Obter os minutos (numerico de 0 a 59)// ->  
    console.log( p7 )// ->   36


    p8 = q.getSeconds()//Obter os segundos (numerico de 0 a 59)// -> 
    console.log( p8 )// ->   45


    p9 = q.toGMTString() //converte uma data em uma string
    console.log( p9 )// ->   Tue, 15 Sep 2020 17:36:45 GMT

       
       

