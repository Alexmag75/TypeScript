let listOfItems:string[] = ['html','css','javascript','mysql','mongodb','react','angular','node.js'];
for(let i:number=0;i<listOfItems.length;i++)
{
    document.write(`<div>
                        <ul>
                        <li> ${listOfItems[i]} </li>
                        </ul>
                    </div>`);
}


