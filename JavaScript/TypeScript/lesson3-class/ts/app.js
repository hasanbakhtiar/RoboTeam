var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.imodel = model;
        this.iyear = year;
    }
    ;
    Car.prototype.carInfo = function () {
        return this.imodel;
    };
    return Car;
}());
var myCar = new Car("BMW X5", 2023);
console.log(myCar.carInfo());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(model, year) {
        return _super.call(this, model, year) || this;
    }
    Moto.prototype.calulateSpeed = function () {
        return this.imodel;
    };
    return Moto;
}(Car));
var myMoto = new Moto('Yamaha', 2000);
