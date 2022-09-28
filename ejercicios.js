/*ejercicio fibonacci.
Consigue la serie fibonacci en un array
resultado:*/

let number = [1,2];
let last = number.length - 1;
let penultime = number.length -2;
let nextNumber = number[last] + number[penultime];
number.push(nextNumber);
console.log(nextNumber);

/*0,1,1,2,3,5,8*/
