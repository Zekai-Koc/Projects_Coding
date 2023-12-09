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

const threeLetters = ["one", "two", "six"];
const fourLetters = ["four", "five", "nine"];
const fiveLetters = ["three", "seven", "eight"];

const numbersWithPositions = [];

const parseSingleLine = (singleLine) => {
   const numbersArray = singleLine.split("");
   // console.log("numbersArray: ", numbersArray);
   // splice ile sifirdan baslayarak pars et...
   const newDigits = [];
   for (let i = 0; i < numbersArray.length; ) {
      if (!isNaN(numbersArray[i])) {
         console.log("NUM ", numbersArray[i]);
         newDigits.push(numbersArray[i]);
         i++;
      } else {
         const tempString = singleLine.slice(3);
         console.log(tempString);

         console.log("NaN ", numbersArray[i]);
         i++;
         // once 3 karakterlik bir buffer al ve icinde sayi var mi diye kontrol et.
         // yoksa 4 karakterlik bir buffer
         // 5 karakterlik buffer
      }
   }
   console.log(newDigits);
};

// Read the file line by line
rl.on("line", (line) => {
   // console.log("Line:", line);
   parseSingleLine(line);
   console.log("-------------");
});

// Handle end of file
rl.on("close", () => {
   // console.log("total: ", total);
   // console.log("numbersWithPositions: ", numbersWithPositions);
   console.log("End of file");
});

// const parseSingleLine = (singleLine) => {
//    const numbersArray = singleLine.split("");
//    // console.log("numbersArray: ", numbersArray);

//    for (let i = 0; i < numbersArray.length; i++) {
//       if (!isNaN(numbersArray[i])) {
//          console.log("NUM ", numbersArray[i]);
//          numbersWithPositions.push({
//             number: numbersArray[i],
//             position: i,
//          });
//       } else {
//          console.log("NaN ", numbersArray[i]);
//          numbersWithPositions.push({
//             number: "NaN",
//             position: i,
//          });
//       }
//    }
// };
