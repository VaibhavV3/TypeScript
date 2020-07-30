//--------------------------------------------------
// Type inference for functions
// typescript tries to figure out what type of value a function will return
// in this function
// If some user misses , return stmt, then return type of function would change..so it's better not to use type inference.
const add = (a: number, b: number) => {
  return a + b;
  // return 'sd'; will give error here.
  // returning nothing, would be assumed as void by typescript.
};

// Type annotation, defines return type.
const add1 = (a: number, b: number): number => {
  return a + b;
  // return 'sd'; will give error here.
};

let num = add(5, 10);

//-------------------
// annotation will work for both, name function and anonymyous function assigned to variable both.

function divide(a: number, b: number): number {
  return a / b;
}

const mul = function (a: number, b: number): number {
  return a * b;
};

//----------------------------------
// never is return type, when we truly never returns anything.
const throwError = (message: string): never => {
  throw new Error(message);
};

// where as in this case return type would be string.
const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

//------------------------------------
const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// way-1
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.weather);
  console.log(forecast.date);
};

// way-2 ES2015
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(weather);
  console.log(date);
};
