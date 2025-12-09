let mas:number[]=[2,5,4,6,1,8,4,5,9];
let min;
function min_mas(mas:number[]):number{
    let min:number=mas[0];
    for(let number of mas) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
min=min_mas(mas);
console.log(min);