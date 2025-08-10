package com.wipro.basic;

import java.util.Arrays;

public class stringAnagram {

    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";

        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        if (str1.length() != str2.length()) {
            System.out.println("Not Anagrams");
        } else {

            char[] arr1 = str1.toCharArray();
            char[] arr2 = str2.toCharArray();

            Arrays.sort(arr1);
            Arrays.sort(arr2);
            if (Arrays.equals(arr1, arr2)) {
                System.out.println("The strings are anagrams.");
            } else {
                System.out.println("The strings are not anagrams.");
            }
        }
    }
}


