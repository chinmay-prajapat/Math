const findPrime = (num: number): boolean => {
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

const range = (start: number, end: number): number | undefined => {
  for (let i = start; i <= end; i++) {
    if (findPrime(i)) {
      return i;
    }
  }
  return undefined;
};
range(1, 10);
