const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "black",
  "white",
  "gray",
];

/* Filtering the colors array and returning the colors that start with the letter p. */
const colorsStartingWithP = colors.filter((color) => color.startsWith("p"));
console.log(colorsStartingWithP);

const computers = [
  {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2019,
  },
  {
    brand: "Dell",
    model: "XPS 13",
    year: 2020,
  },
  {
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    year: 2018,
  },
  {
    brand: "HP",
    model: "Spectre x360",
    year: 2016,
  },
  {
    brand: "Microsoft",
    model: "Surface Laptop 4",
    year: 2022,
  },
  {
    brand: "Acer",
    model: "Aspire 5",
    year: 2017,
  },
  {
    brand: "Asus",
    model: "ZenBook Duo",
    year: 2021,
  },
  {
    brand: "Razer",
    model: "Blade Stealth",
    year: 2016,
  },
  {
    brand: "Samsung",
    model: "Galaxy Book Pro",
    year: 2023,
  },
];

/* Filtering the computers array and returning the computers that have a year of 2020. */
const Computers2020 = computers.filter((computer) => computer.year === 2020);
console.log(Computers2020);

/* Filtering the computers array and returning the computers that have a year of 2016 to 2020. */
const computers2016to2020 = computers.filter(
  (computer) => computer.year >= 2016 && computer.year <= 2020
);
console.log(computers2016to2020);

/* Filtering the computers array and returning the computers that have a brand of Apple. */
const AppleComputers = computers.filter((computer) =>
  computer.brand.includes("Apple")
);
console.log(AppleComputers);
