const arr = [2, 3, 5, 6];
const arr1 = [1, 3, 4, 5];

let k = 3;
let temp = 0;
let max = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(` K th min element is ${arr[0 + k - 1]}`);
console.log(` K th max element is ${arr[arr.length - k]}`);
