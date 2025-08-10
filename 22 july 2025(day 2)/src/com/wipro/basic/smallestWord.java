package com.wipro.basic;
public class smallestWord {

	public static void main(String[] args) {
		String str = "The journey is so  interesting";
        String[] words = str.split(" ");
        String shortest = words[0]; 
        for (String word : words) {
            if (word.length() < shortest.length()) {
                shortest = word;
            }
        }
        System.out.println(shortest);
	}

}
