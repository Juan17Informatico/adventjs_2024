function prepareGifts(gifts) {
    return gifts
        .filter((gift, item) => {
            return gifts.indexOf(gift) === item;
        })
        .sort((a, b) => a - b);
}
