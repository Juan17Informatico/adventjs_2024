function organizeInventory(inventory) {
    const organized = {};

    for (const item of inventory) {
        const { name, quantity, category } = item;

        if (!organized[category]) {
            organized[category] = {};
        }

        if (organized[category][name]) {
            organized[category][name] += quantity;
        } else {
            organized[category][name] = quantity;
        }
    }

    return organized;
}
