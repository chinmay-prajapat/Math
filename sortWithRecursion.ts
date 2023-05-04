let arr = [2, 7, 3, 4, 6, 9, 4, 5];
const sortMe = (arr) => {
  let tempArr = [];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      sortMe(arr);
    }
  }
  return arr;
};
console.log(sortMe(arr));
