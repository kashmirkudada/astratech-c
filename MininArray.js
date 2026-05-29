//Find the minimum number in an array
const arr = [12, 34, 45, 2];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);
