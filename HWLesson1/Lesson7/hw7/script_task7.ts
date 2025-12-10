//@ts-ignore
        class Cars7_7{
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
    drive():void{
        console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info():void{
        console.log( `Модель автомобіля     -  ${this.model}
            Виробник              -  ${this.manufacturer}
            Рік випуску           -  ${this.yearManufacture} рік
            Максимальна швидкість - ${this.maxSpeed} км/год
            Об’єм двигуна         - ${this.valueEngine} л`)
    }
    increaseMaxSpeed(newSpeed:number):void{
        this.maxSpeed=this.maxSpeed+newSpeed;
    }
    changeYear(newValue:number):void{
        this.yearManufacture=newValue;
    }
    addDriver(driver:{name:string,age:number,categoria:string}):void{
        this.Driver=driver;
    }
}
let car7_7=new Cars7_7('bmv','BMW Group',2010,250,3);
console.log(car7_7);
car7_7.drive();
car7_7.info();
car7_7.increaseMaxSpeed(20);
car7_7.changeYear(2020)
car7_7.addDriver({name:'vasia',age:1978,categoria:'B'})
console.log(car7_7);


