package com.wipro.solid;

public class Paytm implements Payment {
    public void pay(double amount) {
        System.out.println("Paid ₹" + amount + " using Paytm.");
    }
}
