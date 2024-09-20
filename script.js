let history = [];
let expression = '';

function inputValue(value) {
    expression += value;
    document.getElementById('output').value = expression;
}

function inputOperator(operator) {
    expression += ' ' + operator + ' ';
    document.getElementById('output').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('output').value = expression;
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById('output').value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById('output').value = result;
        addToHistory(expression + ' = ' + result);
        expression = result.toString();
    } catch (error) {
        document.getElementById('output').value = "Error";
    }
}

function inputAdvanced(type) {
    let value = parseFloat(expression);
    let result = 0;

    switch(type) {
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'pow':
            result = Math.pow(value, 2);
            break;
        case 'sin':
            result = Math.sin(value);
            break;
        case 'cos':
            result = Math.cos(value);
            break;
        case 'tan':
            result = Math.tan(value);
            break;
        default:
            result = value;
    }

    document.getElementById('output').value = result;
    addToHistory(type + '(' + expression + ') = ' + result);
    expression = result.toString();
}

function addToHistory(entry) {
    history.push(entry);
    document.getElementById('history').innerHTML = history.join('<br/>');
}
