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
    let variables = displayText.split(/[+, *, /, -, =]+/);
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
        if (operators[0] === "+") sum(variables[0], variables[1]); 
        if (operators[0] === "-") subtract(variables[0], variables[1]);
        if (operators[0] === "*") multiply(variables[0], variables[1]);
        if (operators[0] === "/") divide(variables[0], variables[1]); 
    }
    else {
        j = 0;
        for (i = 0; i < operators.length; i++) {
            if (operators[i] === "*" || operators[i] === "/") {
                if (variables[i] != "done" && variables[i + 1] != "done") {
                    operators[i] === "*" ? memory[j] = multiply(variables[i], variables[i + 1]) : memory[j] = divide(variables[i], variables[i + 1]);
                    j++;
                    variables[i] = "done"
                    variables[i + 1] = "done"
                }
                else if (variables[i] === "done" && variables[i + 1] != "done") {

                }
                else if (variables[i] != "done" && variables[i + 1] === "done") {

                }
                else if (variables[i] === "done" && variables[i + 1] === "done") {

                }
            }
            console.table(`memory: ${memory}`)
            console.table(`variables: ${variables}`)

        }
    }
}

function remember(index, variableIndex, value) {
    const memory = {};
    memory.index = index;
    memory.variableIndex = variableIndex;
    memory.value = value;
    return memory;
}

function sum(a, b) {
    result = a + b;
    displayInput(result);
    return result;
}

function subtract(a, b) {
    result = a - b;
    displayInput(result);
    return result;
}

function multiply(a, b) {
    result = a * b
    displayInput(result);
    return result;
}

function divide(a, b) {
    result = a / b
    displayInput(result)
    return result;
}

window.onload = () => {
    takeInputs();
    clearButton();
    displayInput();
}