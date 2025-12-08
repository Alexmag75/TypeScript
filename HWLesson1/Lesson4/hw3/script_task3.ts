let R:number=2;
let h:number=5;

function area3(R:number,h:number):number{
    return 2*(Math.PI*R*R)+(2*Math.PI*R)*h;
}
let s3=area3(r,h);
console.log(s3);
