/* Adding a new property to each object in the array. */
//forEach method is adding the new property isAdult. The new property will be equal to true or false depending on the users age.
const fruits = ["Apples", "Oranges", "Bananas", "Grapes"];

fruits.push("Tangerine");
console.log(fruits);

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

console.log(myStudents);

const cars = [
  { brand: "Toyota", model: "Camry", year: 2021 },
  { brand: "Honda", model: "Civic", year: 2022 },
  { brand: "Ford", model: "Mustang", year: 2019 },
  { brand: "Tesla", model: "Model S", year: 2020 },
  { brand: "Chevrolet", model: "Corvette", year: 2023 },
  { brand: "BMW", model: "M3", year: 2018 },
  { brand: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { brand: "Audi", model: "A4", year: 2022 },
  { brand: "Lamborghini", model: "Huracan", year: 2021 },
  { brand: "Ferrari", model: "488 GTB", year: 2019 },
];

cars.forEach((car) => {
  car.hasInsurance = Math.round(Math.random()) ? "Yes" : "No";
});

console.log(cars);
