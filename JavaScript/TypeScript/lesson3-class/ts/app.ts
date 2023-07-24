class Car{

    protected imodel:string;
    public iyear:number;
    
    constructor(model:string,year:number){
        this.imodel = model;
        this.iyear = year;
    };

  public carInfo(){
        return this.imodel 
    }
}

const myCar = new Car("BMW X5",2023);

console.log(myCar.carInfo());


class Moto extends Car{
    constructor(model:string,year:number){
        super(model,year);
    }

   public calulateSpeed(){
        return this.imodel
    }
}

const myMoto = new Moto('Yamaha',2000);
