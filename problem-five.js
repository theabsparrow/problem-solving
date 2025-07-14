// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

function updatePersonAge(peopleArray, targetName, newAge) {
  const person = peopleArray.find((p) => p.name === targetName);

  if (person) {
    person.age = newAge;
    console.log(`${targetName}'s age updated to ${newAge}.`);
  } else {
    console.log(`Person named ${targetName} not found.`);
  }

  console.log("Updated People Array:", peopleArray);
}

updatePersonAge(people, "Bob", 35);
