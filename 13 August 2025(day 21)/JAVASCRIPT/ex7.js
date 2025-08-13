
let persons = [
    { name: "Alice", age: 17, city: "Mumbai" },
    { name: "Bob", age: 22, city: "Delhi" },
    { name: "Charlie", age: 19, city: "Chennai" },
    { name: "David", age: 16, city: "Kolkata" },
    { name: "Eva", age: 25, city: "Hyderabad" }
];
let eligibleVoters = persons.filter(person => person.age >= 18);
console.log("Eligible Voters:", eligibleVoters);

let outputDiv = document.getElementById("output");
eligibleVoters.forEach(voter => {
    outputDiv.innerHTML += `${voter.name} (${voter.age}) - ${voter.city}<br>`;
});
