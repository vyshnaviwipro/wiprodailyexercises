package com.wipro.thread;

public class Counter {
	    int count = 0;
	    public synchronized void increment() {
	        count++;
	    }
	    public int getCount() {
	        return count;
	    }
	}

 