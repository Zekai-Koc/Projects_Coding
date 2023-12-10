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

console.log(matrix[row][col]);

const checkLeft = (row, col) => {
   return matrix[row][col - 1] !== ".";
};

const checkRight = (row, col) => {
   return matrix[row][col + 1] !== ".";
};

console.log(checkLeft(row, col));
console.log(checkRight(row, col));
