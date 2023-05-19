const calculateHCF = (n1, n2) => {
  let hcf;
  if (n1 === 0 || n2 === 0) {
    return n1 || n2;
  }
  for (let i = 0; i <= n1 && i <= n2; i++) {
    if (n1 % i === 0 && n2 % i == 0) {
      hcf = i;
    }
  }
  return hcf;
};
console.log(calculateHCF(5, 3));

// ----------------------------------------Recursion------------------------------------------------------
const calculateHCFWithRecursion = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }

  calculateHCFWithRecursion(n2, n1 % n2);
};
