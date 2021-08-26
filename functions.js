function operate (operator, num1, num2) {
    switch (operator) {
        case 'add':
            final = add(num1, num2);
            break;
        case 'subtract':
            final = subtract(num1, num2);
            break;
        case 'multiply':
            final = multiply(num1, num2);
            break;
        case 'divide':
            final = divide(num1, num2);
            break;
    };
    return final;
};

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function workDisplayed (input) {
    let displayContent = document.getElementById('working-display').textContent;
    displayContent = displayContent + input;
    document.getElementById('working-display').textContent = displayContent;
};

function previousDisplay (input, operatorSymbol) {
    if (operatorSymbol === undefined || input === undefined) {
        document.getElementById('previous-display').textContent = '';
    }
    else {
        document.getElementById('previous-display').textContent = firstNum + ' ' + operatorSymbol;
    }
}