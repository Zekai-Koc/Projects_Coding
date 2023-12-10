const fs = require("fs");

function createMatrix(filePath) {
   const fileContent = fs.readFileSync(filePath, "utf-8");
   const lines = fileContent.trim().split("\n");

   const matrix = lines.map((line) => line.trim().split(""));

   return matrix;
}

const matrix = createMatrix("example.txt");
console.log(matrix);
console.log(matrix[4][2]);
