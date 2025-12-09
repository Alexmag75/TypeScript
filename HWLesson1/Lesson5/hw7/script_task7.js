"use strict";
let listTk7 = 'Список';
let g = 10;
let list_Print = (list, n) => {
    document.write(`<ul>`);
    for (let i = 0; i < n; i++) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
};
list_Print(listTk7, g);
