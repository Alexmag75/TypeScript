let list_array:any=[5,'text',true];

function list_print8(list:any){

    document.write(`<ul>`);
    for(const list_arr of list)
    {document.write(`<li>${list_arr}</li>`); }
    document.write(`</ul>`);

}
list_print8(list_array);
