const fs = require("fs");

function createMatrix(filePath) {
   const fileContent = fs.readFileSync(filePath, "utf-8");
   const lines = fileContent.trim().split("\n");

   const matrix = lines.map((line) => line.trim().split(""));

   return matrix;
}

const matrix = createMatrix("example.txt");

const row = 4;
const col = 3;

// console.log(matrix[row][col]);

const checkLeft = (row, col) => {
   // return matrix[row][col - 1] !== undefined || isNaN(matrix[row][col - 1]);
   return (
      matrix[row][col - 1] === undefined ||
      (isNaN(matrix[row][col - 1]) && matrix[row][col - 1] !== ".")
   );
};

const checkRight = (row, col) => {
   // return matrix[row][col + 1] !== ".";
   return (
      matrix[row][col + 1] === undefined ||
      (isNaN(matrix[row][col + 1]) && matrix[row][col + 1] !== ".")
   );
};

// console.log(checkLeft(row, col));
// console.log(checkRight(row, col));

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

      if (colIndex.length > 0) {
         console.log("number: ", number);
         console.log("colIndex: ", colIndex);

         colIndex.forEach((element) => {
            // console.log(checkLeft(rowNum, element));
            console.log(
               "checkRight: ",
               matrix[rowNum][element],
               checkRight(rowNum, element)
            );
            console.log(
               "checkLeft: ",
               matrix[rowNum][element],
               checkLeft(rowNum, element)
            );
         });
      }
   }
};

readRow(0);
