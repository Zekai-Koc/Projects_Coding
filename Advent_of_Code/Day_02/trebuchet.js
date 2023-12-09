const { subscribe } = require("diagnostics_channel");
const fs = require("fs");
const readline = require("readline");

const filePath = "example.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity,
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

// const numbersArray = singleLine.split("");
// // console.log("numbersArray: ", numbersArray);
// // splice ile sifirdan baslayarak pars et...
// const newDigits = [];
// for (let i = 0; i < numbersArray.length; ) {
//    if (!isNaN(numbersArray[i])) {
//       console.log("NUM ", numbersArray[i]);
//       newDigits.push(numbersArray[i]);
//       i++;
//    } else {
//       const tempString = singleLine.slice(3);
//       console.log(tempString);

//       console.log("NaN ", numbersArray[i]);
//       i++;
//       // once 3 karakterlik bir buffer al ve icinde sayi var mi diye kontrol et.
//       // yoksa 4 karakterlik bir buffer
//       // 5 karakterlik buffer
//    }
// }
// console.log(newDigits);
const parseSingleLine = (singleLine) => {
   console.log("singleLine:", singleLine);

   for (let i = 0; i < singleLine.length; ) {
      if (isNaN(singleLine[i])) {
         const tempSubStr = singleLine.substring(i, 3);
         console.log(tempSubStr);
         if (tempSubStr.includes("one")) console.log(1);
         if (tempSubStr.includes("two")) console.log(2);
         if (tempSubStr.includes("six")) console.log(6);
      }
      i++;
   }
};

// Read the file line by line
rl.on("line", (line) => {
   // console.log("Line:", line);
   parseSingleLine(line);
   // console.log("-------------");
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
