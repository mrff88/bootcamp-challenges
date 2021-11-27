var prompt = require('prompt-sync')({sigint: true});

const lista = [1,2,3,4,5,6];

let app = true;
console.clear();
while (app) {
    console.log(`***************************************************
Transformador de lista: [${lista}] por consola
***************************************************
Operaciones:
1. Duplicar
2. Imprimir
3. Salir`);
    let operation = parseInt(prompt('Que operacion deseas realizar: '));
    switch (operation) {
        case 1:
            console.log(`Resultado de la lista tranformada: [${lista.map(n => n*2)}]`);
            break;
        case 2:
            console.log(`Resultado de la lista tranformada: [${lista}]`);
            break;
        case 3:
            app = false;
            break;
        default:
            console.log('La opcion ingresada no existe')
            break;
    }
}