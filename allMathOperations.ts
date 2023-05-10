const convertStringToElements = (value) => {
  value.forEach((i) => {
    let [a, b, c] = i.split(/[-+*/=÷]/).map((item) => item.trim());
    a = Number(a.replace("_", ""));
    b = Number(b.replace("_", ""));
    c = Number(c.replace("_", ""));
    const arr = i.split("");
    if (arr.includes("-")) {
      return calculateSubtraction(a, b, c);
    } else if (arr.includes("x") || arr.includes("*")) {
      return calculateMultiplication(a, b, c);
    } else if (arr.includes("÷") || arr.includes("/")) {
      return calculateDivision(a, b, c);
    } else {
      return calculateSum(a, b, c);
    }
  });
  /* const newArr=[...value].map((i)=>i) */
};

const calculateMultiplication = (a, b, c) => {
  const operand1 = a || c / b;
  const operand2 = b || c / a;
  const outcome = operand1 * operand2;

  return console.log(`${operand1}*${operand2}=${outcome}	Multiplications`);
};

const calculateSubtraction = (a, b, c) => {
  const operand1 = a || b + c;
  const operand2 = b || a - c;
  const outcome = operand1 - operand2;

  return console.log(`${operand1}-${operand2}=${outcome}	SUBTRACT`);
};

const calculateSum = (a, b, c) => {
  const operand1 = a || c - b || c / 2;
  const operand2 = b || c - a || c / 2;
  const sum = operand1 + operand2;

  return console.log(`${operand1}+${operand2}=${sum}	ADDITION`);
};

const calculateDivision = (a, b, c) => {
  const operand1 = a || b * c;
  const operand2 = b || a / c;
  const quotient = operand1 / operand2;
  const remainder = operand1 % operand2;
  return console.log(
    `${operand1}÷${operand2}=${quotient} DIVISION  and ${remainder}	REMAINDER`
  );
};

convertStringToElements(
  [
    "2 ÷ 22 = _",
    "40 ÷ _ = 5",
    "27 ÷ _ = 9",
    "8 ÷ 2 = _",
    "24 ÷ _ = 3",
    "44 ÷ 4 = _",
    "24 ÷ 3 = _",
    "70 ÷ _ = 10",
    "6 ÷ 6 = _",
    "48 ÷ 6 = _",
    "_ ÷ 6 = 11",
    "_ ÷ 5 = 2",
    "_ ÷ 6 = 5",
    "_ ÷ 6 = 4",
    "56 ÷ _ = 8",
    "12 ÷ _ = 6",
    "14 ÷ _ = 2",
    "12 ÷ _ = 12",
    "_ ÷ 4 = 9",
    "15 ÷ 5 = _",
    "40 ÷ _ = 10",
    "42 ÷ 7 = _",
    "15 ÷ 3 = _",
    "48 ÷ _ = 6",
    "36 ÷ 3 = _",
    "16 ÷ _ = 2",
    "20 ÷ _ = 10",
  ]

  /* [ */

  /* "22÷2=_",
    "_/6=5" */
  /*    "5 x _ = 25",   // Answer: 5 x 5 = 25
       "3 x _ = 6",    // Answer: 3 x 2 = 6
       "_ x 4 = 12",   // Answer: 3 x 4 = 12
       "2 x _ = 8",    // Answer: 2 x 4 = 8
       "_ x 5 = 25",   // Answer: 5 x 5 = 25
       "4 x _ = 12",  */ // Answer: 4 x 3 = 12
  // Answer: There are multiple possible answers to this question.
  /* ] */

  /* [
        "5 - _ = 3",
        "_ - 2 = 6",
        "4 - 1 = _",
        "8 - _ = 4",
        "1 - 1 = _",
        "5 - 3 = _",
        "6 - _ = 3",
        "9 - 1 = _",
        "3 - _ = 1",
        "5 - 1 = _",
        "_ - 1 = 6",
        "4 - 4 = _",
        "6 - _ = 4",
        "7 - _ = 4",
        "7 - _ = 5",
        "_ - 1 = 1",
        "9 - 2 = _",
        "3 - _ = 2",
        "6 - _ = 5",
        "2 - _ = 0"
    ] */

  /* 
    ["_ + 33 = 54",    "85 + 10 =_",    "_ + 11 = 62",    "33 + 27 = _",     "31 + 47 = _",    "27 + _ = 88",    "54 + _ = 56",    "_ + 11 = 96 ",    "11 + _ = 92",    "99 + _ = 105",    "55 + _ = 78",    "_ + 36 = 101",    "20 + 21 = _",    "47 + 45 = _",    "33 + _ = 98",       "32 + _ = 82",        "24 + _ = 83","5 - _ = 3"] */
);
