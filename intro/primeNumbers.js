//asal sayı bulma

//arrayin ilk iki elemanından kurtulabilirsek argümanlara ulaşabiliriz.
const arguments = process.argv.slice(2);

function showPrimeNumbers(lownumber, highNumber) {
  for (let i = lownumber; i <= highNumber; i++) {
    let isPrime = true;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

//showPrimeNumbers(7, 22);

//fonskyon çalış kullanılan argument
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1); //string rakama dönüşüyor.
