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
