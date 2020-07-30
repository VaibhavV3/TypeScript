class Vehicle {
  // color: string = 'red';

  // constructor(color: string) {
  //   this.color = color;
  // }
  // alternative to above comments
  constructor(public color: string) {}

  drive(): void {
    console.log('hula hula');
  }
  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // Notice that color here is not public, because we don't want to override from parent class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('vroom vroom');
  }
}

const car = new Car(4, 'Blue');
car.drive();
car.honk();
console.log(car.color);

// class modifiers..
// public (default one), private and protected.. same as java..
