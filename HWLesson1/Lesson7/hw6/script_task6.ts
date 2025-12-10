//@ts-ignore
class Cars{
    constructor(
        public model:string,
        public manufacturer:string,
        public yearManufacture: number,
        public maxSpeed:number,
        public valueEngine:number,
        public Driver?:{
            name:string,
            age:number,
            categoria:string
        }
    ){}
    drive(){
        console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        console.log( `Модель автомобіля     -  ${this.model}
            Виробник              -  ${this.manufacturer}
            Рік випуску           -  ${this.yearManufacture} рік
            Максимальна швидкість - ${this.maxSpeed} км/год
            Об’єм двигуна         - ${this.valueEngine} л`)
    };
    increaseMaxSpeed(newSpeed:number){
        this.maxSpeed=this.maxSpeed+newSpeed;
    };
    changeYear(newValue:number){
        this.yearManufacture=newValue;
    };
    addDriver (driver:{name:string,age:number,categoria:string}){
        this.Driver=driver
            }

}
let car=new Cars('bmv','BMW Group',2010,250,3)

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log(car);
car.changeYear(2020)
car.addDriver({ name: 'vasia', age: 1978, categoria: 'B' })
console.log(car);
