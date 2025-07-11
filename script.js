function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printhistory(num) {
    document.getElementById("history-value").innerText; 0
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }
    else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    varn = Number(num);
    var value = num.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printhistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output = "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output !== "" || history != ""
            ) {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printhistory("");
                }
                else {
                    history = history + this.id;
                    printhistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++) {
    number[i].addEventListener('click', function () {
        var output=reverseNumberFormat(getOutput());
        if (output!=NaN){ //if output is a number
        output - output + this.id;
        printOutput(output);
        }
    });
}