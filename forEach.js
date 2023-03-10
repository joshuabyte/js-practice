/* Adding a new property to each object in the array. */
//forEach method is adding the new property isAdult. The new property will be equal to true or false depending on the users age.
const users = [
  {
    name: "Edgar",
    age: 24,
  },
  {
    name: "Michelle",
    age: 17,
  },
  {
    name: "Daniel",
    age: 16,
  },
];

users.forEach((user) => {
  user.isAdult = user.age >= 18;
});

console.log(users);

const myStudents = [
  { name: "Alice", age: 18, desiredCareer: "Engineer" },
  { name: "Bob", age: 19, desiredCareer: "Doctor" },
  { name: "Charlie", age: 20, desiredCareer: "Lawyer" },
  { name: "David", age: 21, desiredCareer: "Artist" },
  { name: "Eve", age: 22, desiredCareer: "Programmer" },
];

myStudents.forEach((student) => {
  student.isApproved = student.age >= 18;
});

console.log(myStudents)
