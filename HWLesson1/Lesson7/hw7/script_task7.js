"use strict";
//@ts-ignore
class Cars7_7 {
    constructor(model, manufacturer, yearManufacture, maxSpeed, valueEngine, Driver) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearManufacture = yearManufacture;
        this.maxSpeed = maxSpeed;
        this.valueEngine = valueEngine;
        this.Driver = Driver;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`Модель автомобіля     -  ${this.model}
            Виробник              -  ${this.manufacturer}
            Рік випуску           -  ${this.yearManufacture} рік
            Максимальна швидкість - ${this.maxSpeed} км/год
            Об’єм двигуна         - ${this.valueEngine} л`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newValue) {
        this.yearManufacture = newValue;
    }
    addDriver(driver) {
        this.Driver = driver;
    }
}
let car7_7 = new Cars7_7('bmv', 'BMW Group', 2010, 250, 3);
console.log(car7_7);
car7_7.drive();
car7_7.info();
car7_7.increaseMaxSpeed(20);
car7_7.changeYear(2020);
car7_7.addDriver({ name: 'vasia', age: 1978, categoria: 'B' });
console.log(car7_7);
