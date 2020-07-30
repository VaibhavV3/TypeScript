// this is object..
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// this is js tuple, which looks like simple array..
// but we have lost our data of what is what.. which is basically tuple..
// but we need to maintain order as well.. and here for pepsi.. there is not order between types..
// it's like string | boolean | number
const pepsi = ['brown', true, 40];

// where as, this way gives order of types to tuple
const coke: [string, boolean, number] = ['brown', true, 40];

// or another way is..
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//---------------------------------------
const carSpecs: [number, number] = [400, 4456];

const carStats = {
  horsepower: 400,
  weight: 4456,
};

// out of above object and tuple... object is more comprehensable.
// object is more preferrable over tuple
