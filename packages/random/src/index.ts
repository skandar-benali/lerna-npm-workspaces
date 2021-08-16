const randomToTen = (): number => {
    const base = Date.now() * Math.random();
    return Math.floor(base % 10);
}

const randomToX = (x: number): number => {
    const base = Date.now() * Math.random() * 5558;
    return Math.floor(base % x);
}

export {
    randomToTen,
    randomToX
};