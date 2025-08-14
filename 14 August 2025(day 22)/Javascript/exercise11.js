
function separateFirstRest(...args) {

    const first = args[0];
    const rest = args.slice(1);
    return { first, rest };
}

console.log(separateFirstRest(10, 20, 30, 40));

console.log(separateFirstRest("A", "B", "C"));

console.log(separateFirstRest(5));

console.log(separateFirstRest());
