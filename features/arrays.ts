const carMakers = ['ford', 'lsmbo'];
// auto detects type.

const carMakers2: string[] = []; // here we should mention type

// auto detected 2D array.
const d = [['lambo'], ['fefsd']];

const d2: string[][] = []; // for empty 2d array, we need to mention type

//Hello with map.--
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//------------------
// FLexible types, auto inferred
const importantDates = [new Date(), '2030-10-10'];
