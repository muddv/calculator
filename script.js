let displayText = '';
let dotUsed = 0;
let dotErased = 0;
let isResulst = 0;

function takeInputs() {
    const nine = document.querySelector('#nine');
    nine.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('9');
            isResulst = 0;
        }
        else displayInput('9');
    });
    const eight = document.querySelector('#eight');
    eight.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('8');
            isResulst = 0;
        }
        else displayInput('8');
    });
    const seven = document.querySelector('#seven');
    seven.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('7');
            isResulst = 0;
        }
        else displayInput('7');
    });
    const six = document.querySelector('#six');
    six.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('6');
            isResulst = 0;
        }
        else displayInput('6');
    });
    const five = document.querySelector('#five');
    five.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('5');
            isResulst = 0;
        }
        else displayInput('5');
    });
    const four = document.querySelector('#four');
    four.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('4');
            isResulst = 0;
        }
        else displayInput('4');
    });
    const three = document.querySelector('#three');
    three.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('3');
            isResulst = 0;
        }
        else displayInput('3');
    });
    const two = document.querySelector('#two');
    two.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('2');
            isResulst = 0;
        }
        else displayInput('2');
    });
    const one = document.querySelector('#one');
    one.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('1');
            isResulst = 0;
        }
        else displayInput('1');
    });
    const zero = document.querySelector('#zero');
    zero.addEventListener('click', () => {
        if (isResulst === 1) {
            displayPrevious('ans=' + displayText) 
            displayText = '';
            displayInput('0');
            isResulst = 0;
        }
        else displayInput('0');
    });
    const dot = document.querySelector('#dot');
    dot.addEventListener('click', () => {
        if (dotUsed === 0) {
            displayInput('.');
            dotUsed = 1;
        }
    });
    const plus = document.querySelector('#plus');
    plus.addEventListener('click', () => {
        // there has to be better way to do this but now I have to carefully monitor this variable to prevent dot bugss
        dotUsed = 0;
        isResulst = 0;
        displayInput('+');
    });
    const minus = document.querySelector('#minus');
    minus.addEventListener('click', () => {
        // there has to be better way to do this but now I have to carefully monitor this variable to prevent dot bugss
        dotUsed = 0;
        isResulst = 0;
        displayInput('-');
    });
    const multiply = document.querySelector('#multiply');
    multiply.addEventListener('click', () => {
        // there has to be better way to do this but now I have to carefully monitor this variable to prevent dot bugss
        dotUsed = 0;
        isResulst = 0;
        displayInput('*');
    });
    const divide = document.querySelector('#divide');
    divide.addEventListener('click', () => {
        // there has to be better way to do this but now I have to carefully monitor this variable to prevent dot bugss
        dotUsed = 0;
        isResulst = 0;
        displayInput('÷');
    });
    const equals = document.querySelector('#equals');
    equals.addEventListener('click', () => {
        displayPrevious(displayText);
        // there has to be better way to do this but now I have to carefully monitor this variable to prevent dot bugss
        dotUsed = 0;
        isResulst = 0;
        if (displayText != '') {
            displayInput('=');
            parseInput(displayText);
        }
    });
}

function displayInput(input) {
    const display = document.querySelector('#input');

    // this is awful spaghetti for backspace
    if (input === 'backspace') {
        if (isResulst === 1) {
            displayPrevious(displayText)
            displayText = '';
            isResulst = 0;
        }
        let erased = displayText[displayText.length - 1];
        console.log(`erased: ${erased}`)
        displayText = displayText.slice(0, displayText.length - 1);
        // dot is requires extra attention here
        if (erased === '.') {
            dotErased = 1;
            dotUsed = 0;
        }
        // this prevents the bug where you can add infinite number of dots if you keep erasing them after operators
        if (dotErased === 1 && (erased === "+" || erased === "-" || erased === "*" || erased === "÷")) {
            let dotIndex = 0;
            let operatorIndex = 0;
            for (i = displayText.length - 1; i >= 0; i--) {
                if (displayText[i] === ".") {
                    if (i > dotIndex) dotIndex = i;
                }
                if (displayText[i] === "+" ||  displayText[i] === "-" ||  displayText[i] === "*" ||  displayText[i] === "÷") {
                    operatorIndex = i;
                }       
        }
        if (dotIndex > operatorIndex) {
            dotUsed = 1;
        }
    }
        display.textContent = displayText;
        console.log(`displayText.length ${displayText.length}`);
        if (displayText.length === 0 && isResulst === 0) displayPrevious('');
        return dotUsed;
    }

    // this is part of the function responsible for actual input display
    if (input != undefined) {
        if (isResulst === 1) {
            resultLen = displayText.length;
            console.log(`result length: ${resultLen}`)
        }
        displayText = displayText + input;
    }
    display.textContent = displayText;
    console.log(`displayText: ${displayText}`);
} 

function displayPrevious(displayText) {
    const previous = document.querySelector('#previous');
    previous.textContent = displayText;
}

function backspace() {
    const backspace = document.querySelector('#backspace');
    backspace.addEventListener('click', () => {
        displayInput('backspace');
    });
}

function clearButton() {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        displayText = '';
        dotUsed = 0;
        displayInput(displayText);
        displayPrevious(displayText);
        return displayText, dotUsed;
    });
}

function clearCurrent() {
    displayPrevious(displayText);
    displayText = '';
    displayInput(displayText);
}

function parseInput(displayText) {
    let variables = displayText.split(/[-, +, -, *, ÷, =]+/);
    //SOMEHOW EMPTY UNDEFINED LAST ELEMENT IS BEING ADDED TO THIS ARRAY, THIS NEED TO BE SOLVED BETTER
    variables.pop();
    let operators = [];
    let j = 0;
    for (i = 0; i < displayText.length; i++) {
        if (displayText[i] == "+" || displayText[i] == "*" || displayText[i] == "÷" || displayText[i] == "-") {
            operators[j] = displayText[i];
            j++;
        }
    }
    evaluate(variables, operators)
}

function evaluate(variables, operators) {
    if (variables.length <= operators.length) {
        clearCurrent();
        displayInput("Invalid expression");
        displayText = '';
        return displayText;
    }
    // this my be necessary no longer
    if (operators.length === 1) {
        if (operators[0] === "+") variables[0] = sum(variables[0], variables[1]); 
        if (operators[0] === "-") variables[0] = subtract(variables[0], variables[1]);
        if (operators[0] === "*") variables[0] = multiply(variables[0], variables[1]);
        if (operators[0] === "÷") variables[0] = divide(variables[0], variables[1]); 
    }
    else {
        for (let i = 0; i <= operators.length; i++) {
            if (operators[i] === "*" || operators[i] === "÷") {
                 operators[i] === "*" ? variables[i] = multiply(variables[i], variables[i + 1]) : variables[i] = divide(variables[i], variables[i + 1]);
                // inverting binary tree woah
                 for (let j = i + 1; j < variables.length; j++) {
                     let temp = variables[j + 1];
                     variables[j] = temp;
                 }
                 for (let k = i; k < operators.length; k++) {
                     let temp = operators[k + 1]
                     operators[k] = temp;
                 }
                 i--;
            }
        }
        for (let i = 0; i <= operators.length; i++) {
            if (operators[i] === "+" || operators[i] === "-") {
                operators[i] === "+" ? variables[i] = sum(variables[i], variables[i + 1]) : variables[i] = subtract(variables[i], variables[i + 1]);
                for (let j = i + 1; j < variables.length; j++) {
                    let temp = variables[j + 1];
                    variables[j] = temp;
                }
                for (let k = i; k < operators.length; k++) {
                    let temp = operators[k + 1]
                    operators[k] = temp;
                }
                i--;
            }
        }
    }
            //  this may be problematic but now this is the only way result is displayed
            clearCurrent();
            // maybe pass this as display text
            // limit decimals
            displayInput(variables[0]);
            isResulst = 1;
            return isResulst;
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
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    result = +result.toFixed(3);
    return result;
}

window.onload = () => {
    takeInputs();
    clearButton();
    displayInput();
    backspace()
}