let list:string='Список';

function list_print(list:string){
    document.write(`<ul>
                        <li>${list}</li>
                        <li>${list}</li>
                        <li>${list}</li>                     
                    </ul>`);
}
list_print(list);
