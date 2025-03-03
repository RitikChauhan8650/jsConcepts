let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};

let carProps = {
  type: {
    value: "Volkswagen",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  model: {
    value: "Golf",
    writable: true,
    enumerable: true,
    configurable: true,
  },
};

var car = Object.create(vehicle, carProps);

console.log("car----------", car);
console.log("car type:", car.type);
console.log("car model:", car.model);
console.log("car wheels:", car.wheels);
