let a1 = [1, 3, 4, 5, 8];
let a2 = [4, 5, 6, 7, 12];
let a3 = [-1, 0, 1, 2, 3, 4, 5];
let result = [];
let idx = 0;
for (let i = 0; i < a1.length; i++) {
  for (let j = 0; j < a2.length; j++) {
    if (a1[i] == a2[j]) {
      result[idx++] = a1[i];
    }
  }
}

console.log(result);
