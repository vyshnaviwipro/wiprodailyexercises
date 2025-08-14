
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Example usage:
const a = pair<number, string>(1, "one");     
const b = pair(true, { id: 42 });             
const c: [string, number] = pair("age", 21);

console.log(a);
console.log(b);
console.log(c);
