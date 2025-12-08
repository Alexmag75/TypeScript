"use strict";
let R = 2;
let h = 5;
function area3(R, h) {
    return 2 * (Math.PI * R * R) + (2 * Math.PI * R) * h;
}
let s3 = area3(r, h);
console.log(s3);
