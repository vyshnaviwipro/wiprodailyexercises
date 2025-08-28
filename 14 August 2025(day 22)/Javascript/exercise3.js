class Util {
    getDate() {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        return `${dd}-${mm}-${yyyy}`;
    }
    getPIValue() {
        return Math.PI;
    }
    convertC2F(celsius) {
        return (celsius * 9/5) + 32;
    }

    getFibonacci(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }
}
const util = new Util();

console.log("Today's Date:", util.getDate());
console.log("Value of PI:", util.getPIValue());
console.log("25°C in Fahrenheit:", util.convertC2F(25));
console.log("First 2 Fibonacci numbers:", util.getFibonacci(2));
