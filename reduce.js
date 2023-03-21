const people = [
  { name: "Alice", age: 25, salary: 50000 },
  { name: "Bob", age: 30, salary: 60000 },
  { name: "Charlie", age: 35, salary: 70000 },
];

const totalSalary = people.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.salary;
}, 0);

console.log(totalSalary);
