let arr = [12, 43, 23, 14];
let result = [];
result[0] = arr[arr.length - 1];
for (let i = 0; i < arr.length - 1; i++) {
  result[i + 1] = arr[i];
}
console.log(result);
