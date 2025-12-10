"use strict";
class User7_3 {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let users7_3 = [
    new User7_3(1, 'alex', 'map', 'assfd@gmail.com', '0632568975'),
    new User7_3(2, 'peta', 'chel', 'asfhgd@gmail.com', '0632568945'),
    new User7_3(3, 'alia', 'el', 'asdgf@gmail.com', '0632568975'),
    new User7_3(4, 'semen', 'ar', 'afgsd@gmail.com', '0632514975'),
    new User7_3(5, 'max', 'fg', 'asfgd@gmail.com', '0632568975'),
    new User7_3(6, 'gek', 'hgjgh', 'afgsd@gmail.com', '0632568945'),
    new User7_3(7, 'lef', 'hfdh', 'assadd@gmail.com', '0632512575'),
    new User7_3(8, 'roma', 'prt', 'asjhjd@gmail.com', '0632562565'),
    new User7_3(9, 'ivan', 'map2', 'afhsd@gmail.com', '0632561255'),
    new User7_3(10, 'lenia', 'map10', 'asfhd@gmail.com', '0632569975')
];
const arrSort = function (user1, user2) {
    if (user1.id > user2.id) {
        return 1;
    }
    if (user1.id < user2.id) {
        return -1;
    }
    else
        return 0;
};
let userSort = users7_3.sort(arrSort);
console.log(userSort);
