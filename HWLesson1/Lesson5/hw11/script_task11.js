"use strict";
let masT11 = [2, 5, 4, 6, 1, 8, 4, 5, 9];
let sumArray = (mas) => {
    let sum = 0;
    for (let number of mas) {
        sum = sum + number;
    }
    return sum;
};
console.log(sumArray(masT11));
