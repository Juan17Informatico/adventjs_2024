# Ejercicio: Creación de Árbol de Navidad Especial 🎄

¡Es hora de poner el árbol de Navidad en casa! Pero este año queremos que sea especial. Vamos a crear una función que reciba la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

## Descripción del problema

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

1. El árbol está compuesto de triángulos de caracteres especiales.
2. Los espacios en blanco a los lados del árbol se representan con guiones bajos `_`.
3. Todos los árboles tienen un tronco de dos líneas, representado por el carácter `#`.
4. El árbol siempre debe tener la misma longitud por cada lado.
5. Usa saltos de línea `\n` para separar cada línea, excepto al final del último nivel del árbol.

### Ejemplo de uso

```javascript
const tree = createXmasTree(5, '*');
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+');
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@');
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

### Restricciones

- La altura del árbol debe ser un entero positivo entre 1 y 100.
- El carácter especial será una cadena de un solo carácter.
- Si la altura es `0` o el carácter no es válido, la función debe devolver una cadena vacía.

---

¡Buena suerte creando un árbol espectacular! 🌟