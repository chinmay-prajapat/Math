// this function is better for finding a prime number but if we are looking for a range of prime number then we should use sieve's algorithm

const primeNumber = (number: number): number[] => {
  const arr = new Array(number).fill(true);

  arr[0] = arr[1] = false;
  const square = Math.sqrt(number) | 0;

  //  **********Math.sqrt(number) | 0 it returns truncated value*************

  for (let i = 2; i <= square; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= number; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.reduce((acum, count, index) => {
    if (count) acum.push(index);
    return acum;
  }, []);
};
console.log(primeNumber(10));
