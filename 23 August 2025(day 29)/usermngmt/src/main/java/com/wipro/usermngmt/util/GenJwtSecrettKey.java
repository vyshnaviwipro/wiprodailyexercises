package com.wipro.usermngmt.util;

import java.security.SecureRandom;
import java.util.Base64;

public class GenJwtSecrettKey {

	public static void main(String[] args) {
		SecureRandom random = new SecureRandom();
        byte[] key = new byte[64]; // 64 bytes = 512 bits
        random.nextBytes(key);
        String encodedKey = Base64.getEncoder().encodeToString(key);
        System.out.println("Generated HS512 key (base64 encoded): " + encodedKey);


	}

}

