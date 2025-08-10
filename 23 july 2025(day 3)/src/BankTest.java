package com.wipro.oop;

public class BankTest {
    public static void main(String[] args) {
        HDFC hdfcAccount = new HDFC("HDFC9076");
        Citi citiAccount = new Citi("CITI9065");

        hdfcAccount.deposit(3000, "HDFC9076");
        System.out.println("HDFC Balance:" + hdfcAccount.getBalance("HDFC9076"));

        citiAccount.deposit(5000, "CITI9065");
        System.out.println("Citi Balance:" + citiAccount.getBalance("CITI9065"));
    }
}
