package com.wipro.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class StringLowerCase {

	@ParameterizedTest
    @ValueSource(strings = {"priya","hii", "meenu","vyshu"})
    void test(String input) {
        assertTrue(input.equals(input.toLowerCase()));
    }
}
