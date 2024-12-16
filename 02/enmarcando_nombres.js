function createFrame(names) {
    const longitudMaxima = Math.max(...names.map((name) => name.length));
    const anchuraMarco = longitudMaxima + 4;
    const borde = "*".repeat(anchuraMarco);

    const contenido = names
        .slice()
        .map((name) => `* ${name.padEnd(longitudMaxima)} *`)
        .join("\n");

    return `${borde}\n${contenido}\n${borde}`;
}
