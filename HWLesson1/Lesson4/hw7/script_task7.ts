let list7:string='Список';
let n:number=10;

function list_print7(list:string,n:number){

    document.write(`<ul>`);
    for(let i=0;i<n;i++){document.write(`<li>${list}</li>`); }
    document.write(`</ul>`);

}
list_print7(list7,n);