# Ejercicio: Organización de Regalos de Santa Claus 🎅

Santa Claus ha recibido una lista de **números mágicos** que representan los regalos 🎁 que deben ser entregados esta Navidad. Sin embargo, algunos números están **duplicados**, lo que podría causar confusiones. Además, los regalos necesitan estar **ordenados en orden ascendente** antes de ser empaquetados y entregados a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista que cumpla con los siguientes requisitos:

1. **Sin duplicados**: Cada número debe aparecer solo una vez.
2. **Ordenados ascendentemente**: La lista debe estar ordenada de menor a mayor.

## Ejemplo de uso

```javascript
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía
```

### Restricciones
- La lista de entrada puede estar vacía. En este caso, la salida también debe ser una lista vacía.
- Puedes asumir que todos los elementos de la lista son números enteros.

---

¡Buena suerte! Los elfos confían en ti para que Santa Claus entregue los regalos a tiempo. 🎄