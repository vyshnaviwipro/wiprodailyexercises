package com.wipro.day4;
import java.util.ArrayList;
public class ArrayListOps {
	public static void main(String[] args) {
	ArrayList<Integer> li = new ArrayList<>();
	li.add(899);
	li.add(789);
	li.add(78);
	li.add(78);
	li.add(7);
	System.out.println(li);
	li.remove(2);
	System.out.println(li);
	li.add(9);
	System.out.println(li);
	}
}
