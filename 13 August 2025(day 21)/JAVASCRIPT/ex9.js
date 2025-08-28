
let persons = [
    { name: "Alice", age: 17, city: "Mumbai" },
    { name: "Bob", age: 22, city: "Delhi" },
    { name: "Charlie", age: 19, city: "Chennai" },
    { name: "David", age: 16, city: "Kolkata" },
    { name: "Eva", age: 25, city: "Hyderabad" }
];
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        persons[i].status = "Adult";
    } else {
        persons[i].status = "Minor";
    }
}
console.log(persons);
