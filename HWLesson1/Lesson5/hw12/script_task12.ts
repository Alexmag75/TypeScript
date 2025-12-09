let masT12:number[]=[2,5,4,6,1,8,4,5,9];

let swapT12=(mas:number[],index1:number,index2:number)=>{
    let r:number;
    r=mas[index1];
    mas[index1]=mas[index2];
    mas[index2]=r;
}
swapT12(masT12,1,5);
for (const number of masT12) {
    console.log(number);
}
