const clearButton       = document.getElementById("clear");
const backButton        = document.getElementById("back");
const divideButton      = document.getElementById("divide");
const multiplyButton    = document.getElementById("multiply");
const subtractButton    = document.getElementById("subtract");
const addButton         = document.getElementById("add");

const zeroButton        = document.getElementById("zero");
const decimalButton     = document.getElementById("decimal");
const equalsButton      = document.getElementById("equals");
const displayInput      = document.getElementById("display");
const oneButton         = document.getElementById("one");
const twoButton         = document.getElementById("two");
const threeButton       = document.getElementById("three");
const fourButton        = document.getElementById("four");
const fiveButton        = document.getElementById("five");
const sixButton         = document.getElementById("six");
const sevenButton       = document.getElementById("seven");
const eightButton       = document.getElementById("eight");
const nineButton        = document.getElementById("nine");

// Add event listeners to number buttons
if (zeroButton)     zeroButton.addEventListener("click", () => displayInput.value += "0");

if (oneButton)      oneButton.addEventListener("click", () => displayInput.value += "1");

if (twoButton)      twoButton.addEventListener("click", () => displayInput.value += "2");

if (threeButton)    threeButton.addEventListener("click", () => displayInput.value += "3");

if (fourButton)     fourButton.addEventListener("click", () => displayInput.value += "4");

if (fiveButton)     fiveButton.addEventListener("click", () => displayInput.value += "5");

if (sixButton)      sixButton.addEventListener("click", () => displayInput.value += "6");

if (sevenButton)    sevenButton.addEventListener("click", () => displayInput.value += "7");

if (eightButton)    eightButton.addEventListener("click", () => displayInput.value += "8");

if (nineButton)     nineButton.addEventListener("click", () => displayInput.value += "9");


if (clearButton) {
    clearButton.addEventListener("click", () => {
        displayInput.value = "";
    });
}

if (backButton) {
    backButton.addEventListener("click", () => {
        displayInput.value = displayInput.value.slice(0, -1);
    });
}

if (divideButton) {
    divideButton.addEventListener("click", () => displayInput.value += "➗");
}

if (multiplyButton) {
    multiplyButton.addEventListener("click", () => displayInput.value += "✖️");
}

if (subtractButton) {
    subtractButton.addEventListener("click", () => displayInput.value += "➖");
}

if (addButton) {
    addButton.addEventListener("click", () => displayInput.value += "➕");
}

if (decimalButton) {
    decimalButton.addEventListener("click", () => {
        if (!displayInput.value.includes(".")) {
            displayInput.value += ".";
        }
    });
}


if (equalsButton) {
    equalsButton.addEventListener("click", () => {
        try {
            // Replace all 'x' or '×' with '*'
            // const expression = displayInput.value.replace(/x|×/gi, "*");
            const expression = displayInput.value.replace(/➗|➕|➖|✖️/gi, (match) => {
                switch (match) {
                    case "➗": return "/";
                    case "➕": return "+";
                    case "➖": return "-";
                    case "✖️": return "*";
                    default: return match; 
                }
            } );
            const result = eval(expression);
            displayInput.value = String(result);
        } catch {
            displayInput.value = "Error";
        }
    });
}






















