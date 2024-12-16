# Ejercicio: Enmarcar Nombres de los Niños Buenos 🎅

Santa Claus quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

## Reglas

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.

1. Cada nombre debe estar en una línea, alineado a la izquierda.
2. El marco está construido con `*` y tiene un borde de una línea de ancho.
3. La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

## Ejemplo de uso

```javascript
createFrame(['midu', 'madeval', 'educalvolpz']);

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(['midu']);

// Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc']);

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(['a', 'bb', 'ccc', 'dddd']);

// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********
```

### Restricciones
- La lista de entrada puede estar vacía. En este caso, la salida debe ser solo un marco vacío (`**\n**`).
- Todos los nombres son cadenas de texto.

---

¡Buena suerte! Santa Claus espera que su taller quede espectacular con estos marcos. 🎄✨
