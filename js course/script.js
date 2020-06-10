let firstNumber = 36325;
let secondNumber = 9824;
let thirdnumber = 777;


function multiply(value1, value2) {
    return value1 + value2;

}
multiply(firstNumber, secondNumber);

function add(multiply, value3) {
    let result = multiply + value3;
    console.log (result);
}
add(multiply(firstNumber, secondNumber), thirdnumber);






function foo (callback) {
    return callback;
}

foo(function() {alert("Hello")});