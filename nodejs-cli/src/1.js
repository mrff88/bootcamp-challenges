var prompt = require('prompt-sync')({sigint: true});

const randomNumber = Math.ceil(Math.random() * 5);
let number = parseInt(prompt('Adivine el numero entre el 1 al 5: '));
while (randomNumber !== number) {
    number = parseInt(prompt('¡Incorrecto! Adivine nuevamente el numero: '));
}
console.log('¡Adivinaste!');