<<<<<<< HEAD

let names = ["Raj", "Ananya", "Kiran", "Vivek", "Sita", "Krishna"];


let result = names
    .filter(name => name.length > 5) 
    .map(name => name.toUpperCase()); 


console.log("Original names:", names);
console.log("Filtered & Uppercase:", result);
document.getElementById("output").innerHTML = result.join("<br>");
=======

let names = ["Raj", "Ananya", "Kiran", "Vivek", "Sita", "Krishna"];


let result = names
    .filter(name => name.length > 5) 
    .map(name => name.toUpperCase()); 


console.log("Original names:", names);
console.log("Filtered & Uppercase:", result);
document.getElementById("output").innerHTML = result.join("<br>");
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
