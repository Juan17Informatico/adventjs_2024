/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
    const sizeObj = {};

    // Contamos las botas de cada tamaño (izquierda y derecha)
    for (const { size, type } of shoes) {
        if (!sizeObj[size]) {
            sizeObj[size] = { R: 0, I: 0 };
        }
        sizeObj[size][type]++;
    }

    // Creamos un arreglo con los pares y los ordenamos
    const pairs = [];
    for (const size in sizeObj) {
        const { R: right, I: left } = sizeObj[size];
        const pairsCount = Math.min(left, right);
        for (let i = 0; i < pairsCount; i++) {
            pairs.push(Number(size));
        }
    }

    // Devolvemos los pares ordenados
    return pairs.sort((a, b) => a - b);
}

const shoes = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
];

console.log(organizeShoes(shoes));
