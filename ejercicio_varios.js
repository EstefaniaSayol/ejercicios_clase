function pot (a,b) {
    let result = a ** b
    return result
}
console.log(pot(5,2))


//definir una funcion para saber si un número es primo o no
function prim (number) {
    let i = number -1;
    while (i > 1) {
        console.log(i);
        if (number % i == 0) {
            console.log("No es primo");
            break;
        } 
        i--
    } 
    if (i == 1) {
        console.log("Es primo");
    }
}
prim(12);
//dará resultado

//para que no salgan tantos números, quitaremos el console.log(i);

//resultado de ejemplo de compañero de clase, con return
let number = 6;
function isPrime(a) {
    let i=a -1;
    while (i>1) {
        if ((a%i)==0) {
            return false;
        }
        i--;
        if (i==1) {
            return true;
        }
    }

}
console.log(isPrime(18))


//definir una función para calcular saber si un número pertenece a la serie fibonacci
function isFibo(number)
let fibo = [1,2];
while (i < 25) {
    console.log("El número es:", i)
    i++
}

//está por hacer este último ejercicio

//ejercicio hecho con javi
let questionNumber = undefined
let fib = [1,2];
while(fib.length < 13){
fib.push(fib[fib.length-1]+fib[fib.length-2]);
}
if(questionNumber == 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144) {
    return true;
}else{
    return false
}

//hemos ejecutado lo siguiente:
let summation = function (num) {
    let result = 0;
    let i = 1;
    while (i <= num) {
      result +=
    }
   
    }
  
    return result;
  }
  summation(10);
  


