"use strict";
let listArrayTk8 = [5, 'text', true];
let listPrintTK8 = (list) => {
    document.write(`<ul>`);
    for (const list_arr of list) {
        document.write(`<li>${list_arr}</li>`);
    }
    document.write(`</ul>`);
};
listPrintTK8(listArrayTk8);
