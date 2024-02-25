const arr = [12, -4, -8, 4, 9];
let currSum = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
  currSum += arr[i];

  if (max < currSum) {
    max = currSum;
  }
  if (currSum < 0) {
    currSum = 0;
  }
}
console.log(max);
