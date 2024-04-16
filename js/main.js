import {Car, Laptop, Phone, Watch, Mouse} from "./app.js"

let car = new Car("m5 f90", 2020, "20 000 km", "black", "BMW" )
console.log(car);
console.log(car.setName("cls 63 AMG"));
console.log(car.getName());
console.log(car.setYear(2018));
console.log(car.getYear());
console.log(car.setDistance("15 000 km"));
console.log(car.getDistance());
console.log(car.setColor("white"));
console.log(car.getColor());
console.log(car.setBrand("Mercedes Benz"));
console.log(car.getBrand());


let laptop = new Laptop("HP", 2022, "Ryzen 7", "blue", "512 GB" )
console.log(laptop);
console.log(laptop.setName("MacBook"));
console.log(laptop.getName());
console.log(laptop.setYear(2018));
console.log(laptop.getYear());
console.log(laptop.setProcessor("intel i7"));
console.log(laptop.getProcessor());
console.log(laptop.setColor("black"));
console.log(laptop.getColor());
console.log(laptop.setMemory("1 TB"));
console.log(laptop.getMemory());


let phone = new Phone("Samsung", 2024, "ForWork", "gray", "1 TB" )
console.log(phone);
console.log(phone.setName("RedMi"));
console.log(phone.getName());
console.log(phone.setYear(2022));
console.log(phone.getYear());
console.log(phone.setType("ForGaming"));
console.log(phone.getType());
console.log(phone.setColor("black"));
console.log(phone.getColor());
console.log(phone.setMemory("128 GB"));
console.log(phone.getMemory());

let watch = new Watch("iWatch Ultra", 2020, "ForBoys", "black", "Apple" )
console.log(watch);
console.log(watch.setName("iWatch Pro"));
console.log(watch.getName());
console.log(watch.setYear(2018));
console.log(watch.getYear());
console.log(watch.setType("ForGirls"));
console.log(watch.getType());
console.log(watch.setColor("Pink"));
console.log(watch.getColor());
console.log(watch.setBrand("Apple"));
console.log(watch.getBrand());


let mouse = new Mouse("S1000 plus", 2018, "DPI 1600", "white", "HP" )
console.log(mouse);
console.log(mouse.setName("n3"));
console.log(mouse.getName());
console.log(mouse.setYear(2022));
console.log(mouse.getYear());
console.log(mouse.setType("DPI 3000"));
console.log(mouse.getType());
console.log(mouse.setColor("black"));
console.log(mouse.getColor());
console.log(mouse.setBrand("Apple"));
console.log(mouse.getBrand());

