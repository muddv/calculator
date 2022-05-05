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
        parseInput(displayText);
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
        displayPrevious(displayText);
        return displayText;
    });
}

function parseInput(displayText) {
    console.log(displayText)
    // this is a RegExp and I don't really know how this works
    //let variables = displayText.split(/[+, *, /, -, =]+/);
    let variables = displayText.split(/[-, +, -, *, =]+/);
    //SOMEHOW EMPTY UNDEFINED LAST ELEMENT IS BEING ADDED TO THIS ARRAY, THIS NEED TO BE SOLVED BETTER
    variables.pop();
    console.table(variables)
    let operators = [];
    let j = 0;
    for (i = 0; i < displayText.length; i++) {
        if (displayText[i] == "+" || displayText[i] == "*" || displayText[i] == "/" || displayText[i] == "-") {
            operators[j] = displayText[i];
            j++;
        }
    }
    console.table(operators)
    console.log(`operator[0]: ${operators[0]}`)
    evaluate(variables, operators)
    // ADD LOGIC FOR OPERATOR PRECEDENCE
    //if (operator[0] === "+") sum(variables); 
    //if (operator[0] === "-") subtract(variables);
    //if (operator[0] === "*") multiply(variables);
    //if (operator[0] === "/") divide(variables);  
}

function evaluate(variables, operators) {
    if (operators.length === 1) {
        if (operators[0] === "+") variables[0] = sum(variables[0], variables[1]); 
        if (operators[0] === "-") variables[0] = subtract(variables[0], variables[1]);
        if (operators[0] === "*") variables[0] = multiply(variables[0], variables[1]);
        if (operators[0] === "/") variables[0] = divide(variables[0], variables[1]); 
    }
    else {
        for (let i = 0; i <= operators.length; i++) {
            if (operators[i] === "*" || operators[i] === "/") {
                 operators[i] === "*" ? variables[i] = multiply(variables[i], variables[i + 1]) : variables[i] = divide(variables[i], variables[i + 1]);
                // inverting binary tree woah
                 for (let j = i + 1; j < variables.length; j++) {
                     let temp = variables[j + 1];
                     variables[j] = temp;
                     console.table(`post calc vars: ${variables}`)
                 }
                 for (let k = i; k < operators.length; k++) {
                     let temp = operators[k + 1]
                     operators[k] = temp;
                     console.table(`post calc ops: ${operators}`);
                 }
                 variables.pop()
                 operators.pop()
                 i--;
            }
        }
        for (let i = 0; i <= operators.length; i++) {
            if (operators[i] === "+" || operators[i] === "-") {
                operators[i] === "+" ? variables[i] = sum(variables[i], variables[i + 1]) : variables[i] = subtract(variables[i], variables[i + 1]);
                for (let j = i + 1; j < variables.length; j++) {
                    let temp = variables[j + 1];
                    variables[j] = temp;
                    console.table(`post calc vars: ${variables}`)
                }
                for (let k = i; k < operators.length; k++) {
                    let temp = operators[k + 1]
                    operators[k] = temp;
                    console.table(`post calc ops: ${operators}`);
                }
                variables.pop()
                operators.pop()
                i--;
            }
        }
        console.log(`operators.length: ${operators.length}`)
    }
            //  this may be problematic but now thi is the only way result is displayed
            displayInput(variables[0])
}



function sum(a, b) {
    let result = Number(a) + Number(b);
    return result;
}

function subtract(a, b) {
    let result = Number(a) - Number(b);
    return result;
}

function multiply(a, b) {
    let result = a * b
    console.log(`result: ${result}`)

    return result;
}

function divide(a, b) {
    let result = a / b
    return result;
}

window.onload = () => {
    takeInputs();
    clearButton();
    displayInput();
}