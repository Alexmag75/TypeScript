let r_circle:number=2;
let h_cylinder:number=5;

let area_cylinder=(r:number,h:number):number=>2*(Math.PI*r*r)+(2*Math.PI*r)*h;
let cylinder:number=area_cylinder(r_circle,h_cylinder);
console.log(cylinder);