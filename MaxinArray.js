//Find the maximum number in an array
const arr = [3, 7, 2, 9, 19];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
