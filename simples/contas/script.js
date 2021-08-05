const button = document.querySelector('button');

button.onclick = function(e) {
    e.preventDefault();

    const val1 = document.querySelector('#val1');
    const val2 = document.querySelector('#val2');
    const result = document.querySelector('#result');

    result.value = soma(val1.value, val2.value);
}

function soma(a,b) {
    return Number(a) + Number(b);
}

/* --------------------------------------------------------------------------- */

/* const button2 = document.querySelector('#operator')

button2.onclick = function(e) {
    e.preventDefault();

    const val3 = document.querySelector('#val3');
    const val4 = document.querySelector('#val4');
    const result = document.querySelector('#end');

    result.value = calc(val3.value, val4.value);
} */

function soma() {
    const val3 = document.querySelector('#val3');
    const val4 = document.querySelector('#val4');
    const result = document.querySelector('#end');

    result.value = Number(val3.value) + Number(val4.value);
}

function menos() {
    const val3 = document.querySelector('#val3');
    const val4 = document.querySelector('#val4');
    const result = document.querySelector('#end');

    result.value = Number(val3.value) - Number(val4.value);
}

function mult() {
    const val3 = document.querySelector('#val3');
    const val4 = document.querySelector('#val4');
    const result = document.querySelector('#end');

    result.value = Number(val3.value) * Number(val4.value);
}

function divis() {
    const val3 = document.querySelector('#val3');
    const val4 = document.querySelector('#val4');
    const result = document.querySelector('#end');

    result.value = Number(val3.value) / Number(val4.value);
}

/* function calc (a, b) {
    switch (operator) {
        case '+':
            return Number(a) + Number(b);
            break;
        case '-':
            return Number(a) - Number(b);
            break;
        case '*':
            return Number(a) * Number(b);
            break;
        case '/':
            return Number(a) / Number(b);
            break;
        default:
            return 'Invalid operator';
    }
} */