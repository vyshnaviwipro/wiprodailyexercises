package com.wipro.oop;

public class AnimalTest {
    public static void main(String[] args) {
        Animal human = new Human("Priya");
        Animal bird = new Bird("Parrot");
        Animal dog = new Dog("Leo");
        human.eat();
        human.sleep();
        human.makeSound();
        human.move();
        bird.eat();
        bird.sleep();
        bird.makeSound();
        bird.move();
        dog.eat();
        dog.sleep();
        dog.makeSound();
        dog.move();
    }
}
