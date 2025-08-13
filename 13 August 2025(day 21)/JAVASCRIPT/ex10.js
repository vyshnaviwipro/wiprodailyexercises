// Voter list (from Ex7/Ex9)
let persons = [
    { name: "Alice", age: 17, city: "Mumbai" },
    { name: "Bob", age: 22, city: "Delhi" },
    { name: "Charlie", age: 19, city: "Chennai" },
    { name: "David", age: 16, city: "Kolkata" },
    { name: "Eva", age: 25, city: "Hyderabad" }
];

// Add 'status' property using map() ('Adult' if age >= 18, 'Minor' otherwise)
let updatedPersons = persons.map(person => ({
    ...person,
    status: person.age >= 18 ? "Adult" : "Minor"
}));

// Print updated list in console
console.log(updatedPersons);
