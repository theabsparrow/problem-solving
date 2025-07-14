// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Focus", year: 2018 },
  { make: "Chevrolet", model: "Malibu", year: 2010 },
];

function sortCarsByYear(carArray) {
  const ascendingCar = [];

  for (let i = 0; i < carArray.length; i++) {
    const carData = carArray[i];
    let inserted = false;
    for (let i = 0; i < ascendingCar.length; i++) {
      if (carData.year < ascendingCar[i].year) {
        ascendingCar.splice(i, 0, carData);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      ascendingCar.push(carData);
    }
  }
  return ascendingCar;
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
