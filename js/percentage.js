var numOne = document.getElementById('mark');
var numTwo = document.getElementById('total');
var addSum = document.getElementById('calc');
numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);
function add() {
var one = parseFloat(numOne.value);
var two = parseFloat(numTwo.value);
addSum.innerText = one*100/two;
}