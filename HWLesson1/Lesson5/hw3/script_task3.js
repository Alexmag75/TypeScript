"use strict";
let r_circle = 2;
let h_cylinder = 5;
let area_cylinder = (r, h) => 2 * (Math.PI * r * r) + (2 * Math.PI * r) * h;
let cylinder = area_cylinder(r_circle, h_cylinder);
console.log(cylinder);
