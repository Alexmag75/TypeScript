let listTk7:string='Список';
let g:number=10;

let list_Print=(list:string,n:number)=>{
    document.write(`<ul>`);
    for(let i=0;i<n;i++){document.write(`<li>${list}</li>`); }
    document.write(`</ul>`);
}
list_Print(listTk7,g);
