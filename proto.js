Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
};

function Car(name, speed) {
    this.carName = name;
    this.speed = speed;
}

Car.method('setName', function (value) {
    this.name = value;
});

Car.method('getName', function () {
    return this.name;
});

Car.method('speedUp', function () {
    this.speed += 5;
    return this.speed;
});

Car.method('speedDown', function () {
    this.speed -= 5;
    return this.speed;
});

Car.method('print', function () {
    console.log(`현재 ${this.carName}의 스피드는 ${this.speed} 입니다.`)
});

var racer1 = new Car('toyota', 120);
racer1.speedUp();
var racer2 = new Car('kamaro', 140);
racer2.speedDown();

racer1.print();
racer2.print();
