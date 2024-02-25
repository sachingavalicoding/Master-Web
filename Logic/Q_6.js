let arr = [2, 6, 4, 3, -2, 7, -1, 8, 12];
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] == 10) {
      result.push([arr[i], arr[j]]);
    }
  }
}

console.log(result);
