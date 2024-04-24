class Vehicle1 {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('honk honk');
  }

  constructor(public color: string) {}
}

class Car1 extends Vehicle1 {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

// const vehicle = new Vehicle1();
// vehicle.drive();
// vehicle.honk();

const car12 = new Car1(3, 'yellow');
car12.startDrivingProcess();
// car12.honk();
console.log(car12.color);
