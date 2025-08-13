
let date = new Date("2025-08-14");
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayIndex = date.getDay();

let dayName = weekdays[dayIndex];
console.log("14th August 2025 will be a " + dayName);
