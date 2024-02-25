let l = 0;
let h = 0;
let a1 = [1, 3, 4, 5, 7];
let a2 = [2, 3, 12, 14, 16];
let result = [];
let idx;
while (l < a1.length && h < a2.length) {
  if (a1[l] < a2[h]) {
    console.log(a1[l]);
    l++;
  }
  if (a1[l] > a2[h]) {
    console.log(a2[h]);
    h++;
  }
  if (a1[l] == a2[h]) {
    console.log(a1[l]);
    h++;
    l++;
  }
}
while (l < a1.length) {
  console.log(a1[l]);
  l++;
}
while (h < a2.length) {
  console.log(a2[h]);
  h++;
}
