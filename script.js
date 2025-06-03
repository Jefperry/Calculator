// This function clears the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// This function appends the clicked button's value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// This function uses eval, which can be dangerous if the input is not controlled
//calculate the result of the expression in the display
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
//delete the last character from the display
function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}