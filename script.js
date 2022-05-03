let displayText = '';

function takeInputs() {
    const nine = document.querySelector('#nine');
    nine.addEventListener('click', () => {
        displayInput('9');
    });
    const eight = document.querySelector('#eight');
    eight.addEventListener('click', () => {
        displayInput('8');
    });
    const seven = document.querySelector('#seven');
    seven.addEventListener('click', () => {
        displayInput('7');
    });
    const six = document.querySelector('#six');
    six.addEventListener('click', () => {
        displayInput('6');
    });
    const five = document.querySelector('#five');
    five.addEventListener('click', () => {
        displayInput('5');
    });
    const four = document.querySelector('#four');
    four.addEventListener('click', () => {
        displayInput('4');
    });
    const three = document.querySelector('#three');
    three.addEventListener('click', () => {
        displayInput('3');
    });
    const two = document.querySelector('#two');
    two.addEventListener('click', () => {
        displayInput('2');
    });
    const one = document.querySelector('#one');
    one.addEventListener('click', () => {
        displayInput('1');
    });
    const zero = document.querySelector('#zero');
    zero.addEventListener('click', () => {
        displayInput('0');
    });
    const dot = document.querySelector('#dot');
    dot.addEventListener('click', () => {
        displayInput('.');
    });

    const plus = document.querySelector('#plus');
    plus.addEventListener('click', () => {
        displayInput('+');
    });
    const minus = document.querySelector('#minus');
    minus.addEventListener('click', () => {
        displayInput('-');
    });
    const multiply = document.querySelector('#multiply');
    multiply.addEventListener('click', () => {
        displayInput('*');
    });
    const divide = document.querySelector('#divide');
    divide.addEventListener('click', () => {
        displayInput('/');
    });
    const equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        displayPrevious(displayText);
        displayInput('=');
        evaluateInput(displayText);
    });
}

function displayInput(input) {
    const display = document.querySelector('#input');
    
    if (input != undefined) {
        displayText = displayText + input;
    }
    display.textContent = displayText;
} 

function displayPrevious(displayText) {
    const previous = document.querySelector('#previous');
    previous.textContent = displayText;
}

function clearButton() {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        displayText = ''
        displayInput(displayText);
        return displayText;
    });
}

function evaluateInput(displayText) {
    console.log(displayText)
    // this is a RegExp and I don't really know how this works
    let variables = displayText.split(/[+, *, /, -, =]+/);
    console.table(variables)
    let operator = [];
    for (i = 0; i < displayText.length; i++) {
        if (displayText[i] == "+" || displayText[i] == "*" || displayText[i] == "/" || displayText[i] == "-") {
            operator[i] = displayText[i]
        }
    }
    console.table(operator)
    // ADD LOGIC FOR OPERATOR PRECEDENCE
    if (operator[0] === "+") sum(variables); 
    if (operator[0] === "-") subtract(variables);
    if (operator[0] === "*") multiply(variables);
    if (operator[0] === "/") divide(variables);  
}

function sum(variables) {
    let sum = 0;
	for (let i = 0; i < variables.length; i++) {
    sum += Number(variables[i]);
  }
  displayInput(sum);
}

function subtract(variables) {
    result = variables[0] - variables[1];
    displayInput(result);
}

function multiply(variables) {
    result = variables[0] * variables[1]
    displayInput(result);
}

function divide(variables) {
    result = variables[0] / variables[1]
    displayInput(result)
}

window.onload = () => {
    takeInputs();
    clearButton();
    displayInput();
}