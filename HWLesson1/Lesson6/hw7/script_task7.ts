let arr6_7:number[]=[20,10,50,40,30];

function sortNums(array:number[],direction:string):number[] {
    if(direction==='ascending'){
        array=array.sort((a:number,b:number):number=>{return a-b});
    }
    if(direction==='descending'){
        array=array.sort((a:number,b:number):number=>{return b-a});
    }
    return array;
}

console.log(sortNums(arr6_7,'ascending'));

console.log(sortNums(arr6_7,'descending'));