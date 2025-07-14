// problem: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 28, gender: "female" },
  { name: "David", age: 35, gender: "male" },
  { name: "Eve", age: 22, gender: "female" },
];

function getMaleNames(peopleArray) {
  return peopleArray
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

const result = getMaleNames(people);
console.log(result);
