const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// help with inference when extracting value
const car1 = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible value
carMakers.push('huyndai');

//help with map
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

carMakers.forEach((car) => {});

// flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
