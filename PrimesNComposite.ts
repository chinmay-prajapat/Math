export const PrimesNComposite = (n: number): void => {
  const arr = Array(n + 1).fill(true);
  arr[0] = arr[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  console.log(
    arr.reduce<{ primes: number[]; composites: number[] }>(
      (acc, isPrime, index) => {
        if (isPrime) {
          acc.primes.push(index);
        } else {
          acc.composites.push(index);
        }

        return acc;
      },
      { primes: [], composites: [] }
    )
  );
};
