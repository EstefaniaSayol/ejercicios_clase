let number = parseInt(prompt("Indica un número"));
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