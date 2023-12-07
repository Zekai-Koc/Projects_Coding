const fs = require("fs");
const readline = require("readline");

// Replace 'file.txt' with the path to your text file
const filePath = "example.txt";

// Create a readable stream from the file
const fileStream = fs.createReadStream(filePath);

// Create an interface to read lines from the stream
const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity, // To recognize all instances of CR LF ('\r\n') as a single line break
});

let total = 0;
const digitsInLetters = [
   "one",
   "two",
   "three",
   "four",
   "five",
   "six",
   "seven",
   "eight",
   "nine",
];

const numbersWithPositions = [];

const parseSingleLine = (singleLine) => {
   const numbersArray = singleLine.split("");
   console.log("numbersArray: ", numbersArray);

   for (let i = 0; i < numbersArray.length; i++) {
      if (!isNaN(numbersArray[i])) {
         console.log("=> ", numbersArray[i]);
         numbersWithPositions.push({
            number: numbersArray[i],
            position: i,
         });
      }
   }
};

// Read the file line by line
rl.on("line", (line) => {
   console.log("Line:", line);
   parseSingleLine(line);
});

// Handle end of file
rl.on("close", () => {
   console.log("total: ", total);
   console.log("numbersWithPositions: ", numbersWithPositions);
   console.log("End of file");
});