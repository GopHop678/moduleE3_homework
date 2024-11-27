function createAdder(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  };
}


const addFive = createAdder(5);
const result = addFive(10);
console.log(result);