const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

// type alias
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsePower: 400,
  weight: 3354,
};
