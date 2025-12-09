let masT10:number[]=[2,5,4,6,1,8,4,5,9];
let minArr:number;
let minArray=(mas:number[]):number=>{
    let min:number=mas[0];
    for(let number of mas) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
minArr=minArray(masT10);
console.log(minArr);