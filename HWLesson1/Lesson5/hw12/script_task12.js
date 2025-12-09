"use strict";
let masT12 = [2, 5, 4, 6, 1, 8, 4, 5, 9];
let swapT12 = (mas, index1, index2) => {
    let r;
    r = mas[index1];
    mas[index1] = mas[index2];
    mas[index2] = r;
};
swapT12(masT12, 1, 5);
for (const number of masT12) {
    console.log(number);
}
