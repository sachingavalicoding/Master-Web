// let arr = [12, 34, 54, 3, 43, 5, 34, 3, 4];
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }

//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(` Max is ${max} and min is ${min} `);

// let arr = [12, 34, 3, 4];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

let arr2 = [32, 43, 34, 56, 23, 43];
// for (let i = 0; i < arr.length + arr2.length; i++) {
//   if (i < arr.length) {
//     console.log(arr[i]);
//   }
//   if (i >= arr.length) {
//     console.log(arr2[i - arr.length]);
//   }
// }
let arr = [10, 15, 725, 725, 15, 10];
for (let i = 0, j = arr.length - 1;+
    ---------------------------------------------------------------------------------------------------------------------------------------ra i < arr.length, j > 0; i++, j--) {
  if (arr[i] == arr[j]) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
