let apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 3, 2];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Fix any type
// when to use annotation
// 1. function that return the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log('coordinates', coordinates);

// 2. when we declare a variable on oneline
// and intializate it later
let words = ['red', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly

let numbers = [-10, -1, -2];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
