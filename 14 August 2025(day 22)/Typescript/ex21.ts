<<<<<<< HEAD


class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}
const numberBox = new Box<number>(123);
console.log(numberBox.getValue());

const stringBox = new Box<string>("vyshnavi");
console.log(stringBox.getValue());
=======


class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}
const numberBox = new Box<number>(123);
console.log(numberBox.getValue());

const stringBox = new Box<string>("vyshnavi");
console.log(stringBox.getValue());
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
