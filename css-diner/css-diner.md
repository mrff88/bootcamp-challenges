- **Captura de los 32 niveles superados**

![screenshot](../main/css-dinner-32-levels.png)

- **Respuesta de cada nivel**
  1. plate
  2. bento
  3. #fancy
  4. plate apple
  5. #fancy pickle
  6. .small
  7. orange.small
  8. bento orange.small
  9. plate, bento
  10. \*
  11. plate *
  12. plate + apple
  13. bento ~ pickle
  14. plate > apple
  15. plate orange:first-child
  16. plate apple:only-child, plate pickle:only-child
  17. apple:last-child, pickle:last-child
  18. plate:nth-child(3)
  19. bento:nth-last-child(3)
  20. apple:first-of-type
  21. plate:nth-of-type(even)
  22. plate:nth-of-type(2n+3)
  23. plate apple:only-of-type
  24. orange:last-of-type, apple:last-of-type
  25. bento:empty
  26. apple:not(.small)
  27. [for]
  28. plate[for]
  29. bento[for="Vitaly"]
  30. [for^="Sa"]
  31. [for$="ato"]
  32. [for*="obb"]

- **Lista de tipo de selectores de CSS**
  1. Selector universal => *
  2. Selector etiqueta => div
  3. Selector clase => .small
  4. Selector identificador => #fancy
  5. Selector descendiente => div p
  6. Selector de hijos => div > p
  7. Selector adyacente => div + p
  8. Selector de hermanos generales => div ~ p
  9. Selector de atributos => [for]
  10. Selector de pseudo-clases => div:first-child

- **¿Que significa la especifidad y como se calcula?**

Es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados. La especificidad se puede calcular como un número que consta de cuatro dígitos ABCD en el cual tenemos:

  - **A o primer dígito:** toma valor 1 cuando el estilo se declara en línea o cero en caso contrario.
  - **B o segundo dígito:** se calcula sumando 1 por cada identificador de tipo id que afecte a un elemento. Si una declaración es #menu1 #item1 {…} el valor del segundo dígito de especificidad para esta regla será 2, resultado de sumar 1+1, una unidad por cada id que afecte al elemento.
  - **C o tercer dígito:** se calcula sumando 1 por cada clase o pseudoclase que afecte a un elemento. Por ejemplo .destacado { … } aporta un valor 1, mientras que .destacado .especial .suiter { … } aporta un valor 3 resultado de sumar 1+1+1, una unidad por cada clase o pseudoclase.
  - **D o cuarto dígito:** se calcula sumando 1 por cada elemento HTML o pseudoelemento que aparezca en la declaración. Por ejemplo ul li a { … } aporta un valor 3, resultado de sumar 1+1+1, una unidad por cada elemento HTML referenciado.
Una vez determinado cada dígito, se obtiene un valor numérico (por ejemplo 0112) que podemos ver como el peso de la regla. “Gana” la regla con mayor peso.
