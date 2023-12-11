const fs = require("fs");

function createMatrix(filePath) {
   const fileContent = fs.readFileSync(filePath, "utf-8");
   const lines = fileContent.trim().split("\n");

   const matrix = lines.map((line) => line.trim().split(""));

   return matrix;
}

const matrix = createMatrix("example.txt");

const checkLeft = (row, col) => {
   // return matrix[row][col - 1] !== undefined || isNaN(matrix[row][col - 1]);
   if (col - 1 < 0) return false;
   return (
      matrix[row][col - 1] === undefined ||
      (isNaN(matrix[row][col - 1]) && matrix[row][col - 1] !== ".")
   );
};

const checkRight = (row, col) => {
   // return matrix[row][col + 1] !== ".";
   if (col + 1 > matrix[row].length) return false;
   return (
      matrix[row][col + 1] === undefined ||
      (isNaN(matrix[row][col + 1]) && matrix[row][col + 1] !== ".")
   );
};

const checkTop = (row, col) => {
   if (row - 1 < 0) return false;
   return (
      matrix[row - 1][col] === undefined ||
      (isNaN(matrix[row - 1][col]) && matrix[row - 1][col] !== ".")
   );
};

const checkBottom = (row, col) => {
   if (row + 1 > matrix.length) return false;
   return (
      matrix[row + 1][col] === undefined ||
      (isNaN(matrix[row + 1][col]) && matrix[row + 1][col] !== ".")
   );
};

const checkTopLeft = (row, col) => {
   if (row - 1 < 0) return false;
   if (col - 1 < 0) return false;
   return (
      matrix[row - 1][col - 1] === undefined ||
      (isNaN(matrix[row - 1][col - 1]) && matrix[row - 1][col - 1] !== ".")
   );
};

const checkTopRight = (row, col) => {
   if (row - 1 < 0) return false;
   if (col + 1 > matrix[row].length) return false;
   return (
      matrix[row - 1][col + 1] === undefined ||
      (isNaN(matrix[row - 1][col + 1]) && matrix[row - 1][col + 1] !== ".")
   );
};

const checkBottomLeft = (row, col) => {
   if (row + 1 > matrix.length) return false;
   if (col - 1 < 0) return false;
   return (
      matrix[row + 1][col - 1] === undefined ||
      (isNaN(matrix[row + 1][col - 1]) && matrix[row + 1][col - 1] !== ".")
   );
};

const checkBottomRight = (row, col) => {
   if (row + 1 > matrix.length) return false;
   if (col + 1 > matrix[row].length) return false;
   return (
      matrix[row + 1][col + 1] === undefined ||
      (isNaN(matrix[row + 1][col + 1]) && matrix[row + 1][col + 1] !== ".")
   );
};

const checkAllSides = (row, col) => {
   let result = false;

   if (checkLeft(row, col)) result = true;
   if (checkRight(row, col)) result = true;
   if (checkTop(row, col)) result = true;
   if (checkBottom(row, col)) result = true;
   if (checkTopLeft(row, col)) result = true;
   if (checkTopRight(row, col)) result = true;
   if (checkBottomLeft(row, col)) result = true;
   if (checkBottomRight(row, col)) result = true;

   return result;
};
// console.log(checkLeft(row, col));
// console.log(checkRight(row, col));

const partNumber = [];
const readRow = (rowNum) => {
   console.log(matrix[rowNum]);
   for (let i = 0; i < matrix[rowNum].length; i++) {
      // console.log("=> ", singleRow[i]);
      let number = "";
      let colIndex = [];
      while (!isNaN(matrix[rowNum][i])) {
         number += matrix[rowNum][i];
         colIndex.push(i);
         i++;
      }

      let tempPartNumber = false;
      if (colIndex.length > 0) {
         console.log("number: ", number);
         console.log("colIndex: ", colIndex);
         colIndex.forEach((element) => {
            console.log(
               "checkAllSides: ",
               matrix[rowNum][element],
               checkAllSides(rowNum, element)
            );
            tempPartNumber = tempPartNumber || checkAllSides(rowNum, element);
         });

         if (tempPartNumber) partNumber.push(number);
      }
   }
};

readRow(0);
console.log(partNumber);

// console.log(checkLeft(rowNum, element));
// console.log(
//    "checkRight: ",
//    matrix[rowNum][element],
//    checkRight(rowNum, element)
// );
// console.log(
//    "checkLeft: ",
//    matrix[rowNum][element],
//    checkLeft(rowNum, element)
// );
// console.log(
//    "checkTop: ",
//    matrix[rowNum][element],
//    checkTop(rowNum, element)
// );
// console.log(
//    "checkBottom: ",
//    matrix[rowNum][element],
//    checkBottom(rowNum, element)
// );
// console.log(
//    "checkTopLeft: ",
//    matrix[rowNum][element],
//    checkTopLeft(rowNum, element)
// );
// console.log(
//    "checkTopRight: ",
//    matrix[rowNum][element],
//    checkTopRight(rowNum, element)
// );
// console.log(
//    "checkBottomRight: ",
//    matrix[rowNum][element],
//    checkBottomRight(rowNum, element)
// );
