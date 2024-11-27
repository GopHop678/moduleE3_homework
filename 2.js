function IsPrime(num) {

  if (typeof num !== 'number' || num < 2) {
    console.log(`${num} простое`);
  }

  // Проверка делителей от 2 до квадратного корня из num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(`${num} не простое`);
      return; // Если есть делитель, число не простое
    }
  }
  console.log(`${num} простое`);
}


let my_int = 997
IsPrime(my_int);
