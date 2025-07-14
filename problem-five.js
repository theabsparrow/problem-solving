// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

function updatePersonAge(peopleArray, targetName, newAge) {
  const updatedData = {};
  for (let i = 0; i < peopleArray.length; i++) {
    const peopleData = peopleArray[i];
    const peopleName = peopleData.name;
    if (peopleName === targetName) {
      peopleData.age = newAge;
      updatedData.name = peopleData.name;
      updatedData.age = newAge;
      break;
    } else {
      updatedData.name = "name not found";
    }
  }
  return updatedData;
}

const result = updatePersonAge(people, "Bhhob", 35);
console.log(result);
