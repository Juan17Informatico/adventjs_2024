# Ejercicio: Emparejando Botas 🦅

Los elfos han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- **type**: indica si es una bota izquierda (`I`) o derecha (`R`).
- **size**: indica el tamaño de la bota.

## Descripción del problema

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los tamaños de los pares disponibles después de emparejar las botas.

- Un par válido requiere una bota izquierda y una derecha del mismo tamaño.
- Puede haber múltiples pares del mismo tamaño.
- Si no hay pares disponibles, se debe devolver una lista vacía `[]`.

## Ejemplo de uso

```javascript
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
];

const pairs = organizeShoes(shoes);
console.log(pairs);
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
];

const pairs2 = organizeShoes(shoes2);
console.log(pairs2);
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
];

const pairs3 = organizeShoes(shoes3);
console.log(pairs3);
// []
```

### Restricciones

1. Cada objeto en el array tendrá las propiedades `type` y `size` correctamente definidas.
2. El tamaño de la bota (`size`) será un número entero positivo.
3. Si no hay pares válidos, devuelve una lista vacía `[]`.

---

¡Buena suerte ayudando a los elfos! 🎅✨