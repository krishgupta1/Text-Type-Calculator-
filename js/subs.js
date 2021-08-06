var numOne = document.getElementById('cp');
var numTwo = document.getElementById('sp');
var addSum = document.getElementById('margin');
numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);
function add() {
var one = parseFloat(numOne.value);
var two = parseFloat(numTwo.value);
// addSum.innerText = two-one;
addSum.innerText = one - two;
}