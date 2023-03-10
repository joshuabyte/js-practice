const numbers = [1, 2, 3, 4, 5];
const names = ["Edgar", "Josue", "Torres", "Urquilla"];

console.log(numbers.map((num) => num * num));
console.log(names.map((names) => names.toUpperCase()));

const students = [
  { name: "Alice", age: 18, desiredCareer: "Engineer" },
  { name: "Bob", age: 19, desiredCareer: "Doctor" },
  { name: "Charlie", age: 20, desiredCareer: "Lawyer" },
  { name: "David", age: 21, desiredCareer: "Artist" },
  { name: "Eve", age: 22, desiredCareer: "Programmer" },
];

console.log(
  students.map((student) => {
    return {
      name: student.name.toUpperCase(),
      age: student.age,
      desiredCareer: student.desiredCareer,
      gpa: Math.random() * 10,
    };
  })
);
