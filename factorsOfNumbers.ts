export const Factors = (n: number): number[] => {
  const arr: number[] = [1, n];
  const square = Math.sqrt(n) | 0;
  for (let i = 2; i <= square; i++) {
    if (n % i === 0) {
      arr.push(i);
      if (i !== n / i) {
        // This condition ensures that the square root is not added twice for perfect squares
        arr.push(n / i);
      }
    }
  }
  console.log(arr.sort((a, b) => a - b));
  return arr.sort((a, b) => a - b);
};
