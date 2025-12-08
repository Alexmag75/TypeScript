"use strict";
let text_ = 'створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент';
function text_print(text_) {
    document.write(`<p>${text_}</p>`);
}
text_print(text_);
