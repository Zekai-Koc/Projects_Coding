const fs = require("fs");
const readline = require("readline");

// Replace 'file.txt' with the path to your text file
const filePath = "input.txt";

// Create a readable stream from the file
const fileStream = fs.createReadStream(filePath);

// Create an interface to read lines from the stream
const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity, // To recognize all instances of CR LF ('\r\n') as a single line break
});

const createNumberArray = (singleLine) => {
   return singleLine.filter((character) => !isNaN(character));
};

const createTwoDigitNumber = (arrayOfNumbers) => {
   const twoDigit = [];

   if (arrayOfNumbers.length >= 2) {
      twoDigit.push(arrayOfNumbers[0]);
      twoDigit.push(arrayOfNumbers[arrayOfNumbers.length - 1]);
   }

   if (arrayOfNumbers.length === 1) {
      twoDigit.push(arrayOfNumbers[0]);
      twoDigit.push(arrayOfNumbers[0]);
   }

   if (arrayOfNumbers.length === 0) {
      twoDigit.push(0);
   }

   return twoDigit.join("");
};

let total = 0;

// Read the file line by line
rl.on("line", (line) => {
   // Process each line here
   // console.log("Line:", line);
   // const newLineArray = line.split("");
   // console.log("newLineArray:", newLineArray);
   const numbersArray = createNumberArray(line.split(""));
   console.log(numbersArray);

   const twoDigitNumber = createTwoDigitNumber(numbersArray);
   console.log(twoDigitNumber);
   total += parseInt(twoDigitNumber);
});

// Handle end of file
rl.on("close", () => {
   console.log("total: ", total);
   console.log("End of file");
});
