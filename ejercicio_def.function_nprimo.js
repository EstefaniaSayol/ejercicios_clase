//Definir una function para saber si un número es primo o no.

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
prim(12); //Dará resultado
}

//Otro ejemplo

let number = 6;
function isPrime(a) {
    let i = a - 1;
    while ((a % i)== 0){
        return false;
    }
    i-- ;
    if (i==1) {
        return true;
    }
}
console.log(isPrime(18));
