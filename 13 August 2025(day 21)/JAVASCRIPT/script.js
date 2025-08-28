
document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById("btn1");
    const inputElement = document.getElementById("input1");
    const counterElement = document.getElementById("charCounter");

    btn1.addEventListener("click", function fn() {
        var input = inputElement.value;
        console.log(input);
    });
    inputElement.addEventListener("input", function() {
        const currentLength = this.value.length;
        const remaining = 50 - currentLength;
        counterElement.textContent = `${remaining} characters remaining`;
        
        if (remaining <= 10) {
            counterElement.style.color = "red";
        } else {
            counterElement.style.color = "black";
        }
    });
});