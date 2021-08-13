const randomToTen = () => {
    const base = Date.now() * Math.random();
    return Math.floor(base % 10);
}

const randomToX = (x) => {
    const base = Date.now() * Math.random() * 5558;
    return Math.floor(base % x);
}

module.exports =  {
    randomToTen,
    randomToX
};