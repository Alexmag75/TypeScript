let text:string='створити функцію, яка створює параграф з текстом та виводить його через document.write. ' +
    'Текст задати через аргумент';


let textPrint=(text:string)=>document.write(`<p>${text}</p>`);
textPrint(text);
