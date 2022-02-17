/***
 * Falsy - Truthy (valores falsos o verdaderos)
 */

let number = 1;
console.log(number, typeof number);

number = "1";
console.log(number, typeof number);

number = [];
console.log(number, typeof number);

if (number.length) {
  console.log("truthy");
} else {
  console.log("falsy");
}
