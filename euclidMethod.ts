const GetHCF = (a: number, b: number): number => {
  if (a === 0) {
    return b;
  }
  return GetHCF(b % a, a);
};

const GetLCM = (a: number, b: number): number => {
  return (a * b) / GetHCF(a, b);
};

const HandlerFunction = (args: number[]): number => {
  let lcm = [...args][0];
  for (let i = 1; i < args.length; i++) {
    lcm = GetLCM(lcm, args[i]);
  }
  return lcm;
};

console.log(HandlerFunction([12, 28, 36]));
