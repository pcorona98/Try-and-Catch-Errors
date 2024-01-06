function getCarColor(car) {
  try {
    if (car !== undefined && car !== null) {
      return car.color;
    } else {
      throw new Error("Invalid car object");
    }
  } catch (error) {
    return "Color unknown";
  }
}

let car = { make: "Honda", model: "Civic", color: "Slate Grey" };
console.log(getCarColor(car)); // Expected output: "Slate Grey"

car = undefined;
console.log(getCarColor(car)); // Expected output: "Color unknown"