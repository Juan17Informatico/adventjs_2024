/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = "";

    for (let i = 0; i < height; i++) {
        const spaces = "_".repeat(height - i - 1);
        const decorations = ornament.repeat(2 * i + 1);
        tree += spaces + decorations + spaces + "\n";
    }

    const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
    tree += trunk + "\n" + trunk;

    return tree;
}
