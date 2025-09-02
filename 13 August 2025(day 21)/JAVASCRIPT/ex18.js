<<<<<<< HEAD
function calculate(operation) {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'sub':
                result = number1 - number2;
                break;
            case 'mul':
                result = number1 * number2;
                break;
            case 'div':
                if (number2 === 0) {
                    result = "Cannot divide by zero!";
                } else {
                    result = number1 / number2;
                }
                break;
        }
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}
=======
function calculate(operation) {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'sub':
                result = number1 - number2;
                break;
            case 'mul':
                result = number1 * number2;
                break;
            case 'div':
                if (number2 === 0) {
                    result = "Cannot divide by zero!";
                } else {
                    result = number1 / number2;
                }
                break;
        }
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
