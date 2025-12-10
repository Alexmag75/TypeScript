class Client7_5{
    constructor(
       public id: number,
       public name :string,
       public surname :string,
       public email :string,
       public phone:string,
       public order:string[],
    ) {
    }

}
let Clients7_5:Client7_5[] = [
    new Client7_5(1,'alex','map','assfd@gmail.com','0632568975',['1','2','3']),
    new Client7_5(3,'peta','chel','asfhgd@gmail.com','0632568945',['2','4','7']),
    new Client7_5(2,'alia','el','asdgf@gmail.com','0632568975',['2','3','5']),
    new Client7_5(4,'semen','ar','afgsd@gmail.com','0632514975',['1','3','5']),
    new Client7_5(5,'max','fg','asfgd@gmail.com','0632568975',['7','1','5']),
    new Client7_5(6,'gek','hgjgh','afgsd@gmail.com','0632568945',['4','3','5','8']),
    new Client7_5(9,'lef','hfdh','assadd@gmail.com','0632512575',['1','5','4']),
    new Client7_5(8,'roma','prt','asjhjd@gmail.com','0632562565',['1','7','5','6','10']),
    new Client7_5(6,'ivan','map2','afhsd@gmail.com','0632561255',['2','3','5']),
    new Client7_5(10,'lenia','map10','asfhd@gmail.com','0632569975',['5','6','5'])
];

const sortClientsOrder=function (user1:Client7_5, user2:Client7_5):number {
    if (user1.order.length > user2.order.length) {
        return 1;
    }
    if (user1.order.length < user2.order.length) {
        return -1;
    }
    else return 0;
}
let sortClients=Clients7_5.sort(sortClientsOrder);
console.log(sortClients);