"use strict";
let coursesAndDurationArray6_8 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
console.log(coursesAndDurationArray6_8.sort((a, b) => a.monthDuration - b.monthDuration));
console.log(coursesAndDurationArray6_8.filter(a => a.monthDuration > 5));
console.log(coursesAndDurationArray6_8.map(function (value, index) {
    return { id: index, ...value };
}));
