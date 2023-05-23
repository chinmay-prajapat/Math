const GetHCF = (a, b) => {
  if (a === 0) {
    return b;
  }
  return GetHCF(b % a, a);
};

const GetLCM = (a, b) => {
  console.log("getLCM", a, b);

  return (a * b) / GetHCF(a, b);
};

const HandlerFunction = (args) => {
  let lcm = [...args][0];
  for (let i = 1; i < args.length; i++) {
    lcm = GetHCF(lcm, args[i]);
    console.log(lcm);
  }
  return lcm;
};

console.log(HandlerFunction([4, 6, 8]));
