const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// this method has long annotation..
// if there are other functions using vehicle param, there would be a lot of code duplication.
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name : ${vehicle.name} `);
};

printVehicle(oldCivic);

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// this two methods shows, code is reused, because of interface.
const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`Name : ${vehicle.name} `);
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name : ${vehicle.name} `);
};

//--------------------------------------------------------
