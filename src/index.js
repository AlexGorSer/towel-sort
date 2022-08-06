
// You should implement your task here.




module.exports = function towelSort(matrix) {
  let arr = [];
  let arr2 = [];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        arr.push(matrix[i]);
      } else {
        matrix[i].reverse();
        arr.push(matrix[i]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let q = 0; q < arr[i].length; q++) {
        arr2.push(arr[i][q]);
      }
    }
    return arr2;
  } else return arr;

}
