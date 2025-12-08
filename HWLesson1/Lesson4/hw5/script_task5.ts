let text_:string='створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент'

function text_print(text_:string){
    document.write(`<p>${text_}</p>`);
}
text_print(text_);
