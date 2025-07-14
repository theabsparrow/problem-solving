// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Focus", year: 2018 },
  { make: "Chevrolet", model: "Malibu", year: 2010 },
];

function sortCarsByYear(carArray) {
  return carArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log("Sorted Cars by Year (Ascending):", sortedCars);
