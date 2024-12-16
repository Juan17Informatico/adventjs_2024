# Ejercicio: Organización del Inventario de Santa Claus 🎅

Santa Claus está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

## Descripción del problema

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

- **name**: el nombre del juguete (string).
- **quantity**: la cantidad disponible de ese juguete (entero).
- **category**: la categoría a la que pertenece el juguete (string).

Tu tarea es escribir una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

1. **Claves del objeto**: Las claves del objeto serán las categorías de juguetes.
2. **Valores**: Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
3. Si hay juguetes con el mismo nombre en la misma categoría, debes **sumar sus cantidades**.
4. Si el array está vacío, la función debe devolver un objeto vacío `{}`.

## Ejemplo de uso

```javascript
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
];

const organizedInventory = organizeInventory(inventory);

console.log(organizedInventory);
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
// }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
];

const organizedInventory2 = organizeInventory(inventory2);

console.log(organizedInventory2);
// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
```

### Restricciones

- Si el array está vacío, la salida debe ser un objeto vacío `{}`.
- Los nombres de los juguetes y las categorías serán cadenas de texto.
- Las cantidades serán números enteros positivos.

---

¡Buena suerte! Santa Claus necesita que el inventario esté perfecto para la entrega de regalos. 🎁
