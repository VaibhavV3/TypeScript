let apples: number = 5; //: number this is a type annotation
apples = 10;
//apples='v3';

let varX = 100; // auto detects annotation, hover over varX
// this would only work for initialization and declaration on same line.

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'blue'];
let nums: number[] = [1, 2, 3.0, -20];

//Classes
class Car {}
let car: Car = new Car();

//Object
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// method takes integer and returns nothing
// left hand side is, annotation. : (i: number) => void
const logNumber: (i: number) => void = (i: number) => {};

//All examples mentioned above, we did not have to write annotations manually
//-----------------------
// below are examples where type annotation is needed manually

// when to use annotations.
// 1) function that returns the 'any' type.
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json); // parse method returns any..
// annotated line:> const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Delayed Initialization
let dumbo; // this is by default any.
// annotated line:> let dumbo: number;
dumbo = 10;

// 3) Variable whose type cannot be inferred correctly.
let numbers = [-10, -1, 12];
let numberAboveZero; // variable to count numbers above zero. if total is 0, then value of variable is false (i.e., boolean)
// annotated line:> let numberAboveZero: boolean | number;
