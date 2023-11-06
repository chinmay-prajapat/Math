const Sieve = (n: number): number[] => {
  const start = Date.now();
  const arr = Array(n + 1).fill(true);
  arr[0] = arr[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  const prime = arr.reduce((acc, isPrime, index) => {
    if (isPrime) acc.push(index);

    return acc;
  }, []);
  const endDate = Date.now();
  console.log(endDate - start);
  return prime;
};
console.log(Sieve(100).length);
