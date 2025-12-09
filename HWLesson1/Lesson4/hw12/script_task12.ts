let masiv:number[]=[2,5,4,6,1,8,4,5,9];

function swap(mas:number[],index1:number,index2:number){
    let r:number;
    r=mas[index1];
    mas[index1]=mas[index2];
    mas[index2]=r;
}
swap(masiv,1,5);
for (const number of masiv) {
    console.log(number);
}
