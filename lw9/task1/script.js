let mean = [];

function isPrimeNumber(mean) {
  let isPrime;
  if (Array.isArray(mean)) {     //Обработка массива
    len = mean.length;
    for (let i = 0; i < len; i++) {     //Проверка массива на числа, если не число - вывод ошибки
      if (!Number.isInteger(mean[i])) {
        console.log('Array element is not a number!');
        len = 0;
      }
    }

    for (let i = 0; i < len; i++) {
      isPrime = true;
      for (let j = 2; j < mean[i]; j++) {
        if (mean[i] % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(mean[i] + ' is prime number.');
      }
      else {
        console.log(mean[i] + ' is not prime number.');
      }
    }
  }
  else if (Number.isInteger(mean)) {     //Обработка числа
    isPrime = true;
    for (let j = 2; j < mean; j++) {
      if (mean % j == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(mean + ' is prime number.');
    }
    else {
      console.log(mean + ' is not prime number.');
    }
  }

  else {      //Сообщение об ошибки, если не введено ни число, ни массив
    console.log('The passed parameter is not a number or an array!');
  }
}

isPrimeNumber([1,2,3,4,5]);