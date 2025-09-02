<<<<<<< HEAD

class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek());
console.log(numberStack.pop()); 
console.log(numberStack.pop());
console.log(numberStack.pop());

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("vyshnavi");
console.log(stringStack.peek());
=======

class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek());
console.log(numberStack.pop()); 
console.log(numberStack.pop());
console.log(numberStack.pop());

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("vyshnavi");
console.log(stringStack.peek());
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
