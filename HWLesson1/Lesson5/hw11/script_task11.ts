let masT11:number[]=[2,5,4,6,1,8,4,5,9];

let sumArray=(mas:number[]):number=>{
    let sum:number=0;
    for(let number of mas) {
        sum=sum+number;
    }
    return sum;
}
console.log(sumArray(masT11));