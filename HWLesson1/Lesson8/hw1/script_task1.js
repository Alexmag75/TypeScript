"use strict";
let coursesAndDurationArray8_1 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
console.log(coursesAndDurationArray8_1);
let courses = coursesAndDurationArray8_1.map((value, index) => ({ ...value, id: index + 1 }));
console.log(courses);
