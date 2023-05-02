function bigNsmall(...params) {
  let arr = params.map((str) =>
    str.split("").map((i, index) => str.toLowerCase().charCodeAt(index))
  );

  let newArr = arr.map((i) =>
    i.reduce((acum, current, index) => acum + current)
  );
  const keyPair = newArr.reduce((acum, current, index) => {
    acum[current] = params[index];
    return acum;
  }, {});
  const finalArr = Object.entries(keyPair).sort((a: any, b: any) => a - b);
  console.log(finalArr);
}
