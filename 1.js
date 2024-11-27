function CountElems(arr) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  arr.forEach(element => {
    if (typeof element === 'number' && !isNaN(element)) {
      if (element === 0) {
          zero += 1;
      }
      else if (element % 2 === 0) {
          even += 1;
      }
      else {
          odd += 1;
      }
    }
  });
  console.log(`Четные: ${even}`);
  console.log(`Нечетные: ${odd}`);
  console.log(`Нулевые: ${zero}`);
}


const array = [1, 2, 3, 4, 0, 'text', null, 5, -2, NaN];
CountElems(array);
