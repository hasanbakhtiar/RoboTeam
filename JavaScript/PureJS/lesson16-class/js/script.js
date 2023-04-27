// function Car (brand,model,year){
//     this.ibrand = brand;
// }

// const myCar = new Car("BMW","X5",2000);

// console.log(myCar.ibrand);


class Car{
    constructor(brand,model,year){
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;
    }

    calculateSpeed(km,hour){
            return `${this.ibrand} speed: ${(km/hour).toFixed()} km/h`;
    }
}

Car.prototype.color = "yellow";
// console.log(window);



const myCar = new Car("BMW","X5",2000);

// console.log(myCar.color);
console.log(myCar.calculateSpeed(1000,4));


class Moto extends Car{
    constructor(a,b,c,d){
        super(a);
        this.id = d
    }
}

const myMoto = new Moto('Yamaha','S500',2004,'test');
console.log(myMoto.calculateSpeed(300,4));
console.log(myMoto.id);
