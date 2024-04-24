const oldCivic = {
  name: 'civic',
  year: 2000,
  isBroken: true,
};

// long annotation
const printVehicle = (vehicle: {
  name: string;
  year: number;
  isBroken: boolean;
}): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken : ${vehicle.isBroken}`);
};

printVehicle(oldCivic);

// fix annotation
interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
  test: string;
}

interface ReportAble {
  summary(): string;
}
const oldCivic_1 = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary(): string {
    console.log(`Name: ${this.name}`);
    return `Name: ${this.name}`;
  },
  test: '',
  test2: '',
};
const printSummary = (item: Vehicle): void => {
  item.summary();
};

printSummary(oldCivic_1);
