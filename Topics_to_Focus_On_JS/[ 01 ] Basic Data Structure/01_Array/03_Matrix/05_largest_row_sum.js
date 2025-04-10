function twoDMatrix(arr) {
  const row = 3;
  const col = 3;
  const t = Math.floor(Math.sqrt(arr.length));
  const matrix = Array.from({ length: t }, () => new Array(t).fill(0));
  let count = 0;
  let maxSum = -Infinity;

  // print row wise
  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      matrix[m][n] = arr[count];
      count++;
    }
  }

  // row wise sum
  for (let m = 0; m < row; m++) {
    let sum = 0;
    for (let n = 0; n < col; n++) {
      sum = sum + matrix[m][n];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    console.log(sum);
  }

  return maxSum;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = twoDMatrix(arr);
console.log(res);
