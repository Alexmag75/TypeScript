"use strict";
let usersTask7 = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
document.write(`  <h3> Користувачі зі статусом true</h3> `);
for (let i = 0; i < usersTask7.length; i++) {
    if (usersTask7[i].status) {
        document.write(`<p>${usersTask7[i].name}</p>`);
    }
}
document.write(`  <h3> Користувачі зі статусом false</h3> `);
for (const user of usersTask7) {
    if (!user.status) {
        document.write(`<p>${user.name}</p>`);
    }
}
document.write(`  <h3> Користувачі які старші за 30 років</h3> `);
for (const user of usersTask7) {
    if (user.age > 30) {
        document.write(`<p>${user.name}</p>`);
    }
}
