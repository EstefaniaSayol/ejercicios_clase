//Calcula si un número es primo (solo divisible entre 1 y sí mismo)

let number = 15;
let i = number -1;
while (i > 1) {
    if ((number % i) -- 0) {
        console.log("No es primo");
        break;
    }
    i--
}
if (i == 1) {
    console.log("Es primo");

}