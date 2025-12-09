
class User7_2 {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public email: string,
        public phone: string
    ) {}
}
let users7_2: User7_2[] = [
    new User7_2(1,'alex','map','assfd@gmail.com','0632568975'),
    new User7_2(2,'peta','chel','asfhgd@gmail.com','0632568945'),
    new User7_2(3,'alia','el','asdgf@gmail.com','0632568975'),
    new User7_2(4,'semen','ar','afgsd@gmail.com','0632514975'),
    new User7_2(5,'max','fg','asfgd@gmail.com','0632568975'),
    new User7_2(6,'gek','hgjgh','afgsd@gmail.com','0632568945'),
    new User7_2(7,'lef','hfdh','assadd@gmail.com','0632512575'),
    new User7_2(8,'roma','prt','asjhjd@gmail.com','0632562565'),
    new User7_2(9,'ivan','map2','afhsd@gmail.com','0632561255'),
    new User7_2(10,'lenia','map10','asfhd@gmail.com','0632569975')
];

const filterArr = function(user: User7_2):boolean {
    return user.id%2===0
}
let userFilter=users7_2.filter(filterArr);
console.log(userFilter);
