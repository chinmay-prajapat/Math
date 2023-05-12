const findPrime = (num: number) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const range = (start: number, end: number) => {
  for (let i = start; i <= end; i++) {
    if (findPrime(i)) {
      console.log(i);
    }
  }
};
range(1, 10);
