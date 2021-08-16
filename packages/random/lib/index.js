"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomToX = exports.randomToTen = void 0;
const randomToTen = () => {
    const base = Date.now() * Math.random();
    return Math.floor(base % 10);
};
exports.randomToTen = randomToTen;
const randomToX = (x) => {
    const base = Date.now() * Math.random() * 5558;
    return Math.floor(base % x);
};
exports.randomToX = randomToX;
//# sourceMappingURL=index.js.map