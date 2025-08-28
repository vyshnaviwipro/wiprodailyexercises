
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum 1:", sumNumbers(1, 2, 3));          
console.log("Sum 2:", sumNumbers(10, 20, 30, 40));  
console.log("Sum 3:", sumNumbers(5));               
console.log("Sum 4:", sumNumbers());              
