const { subscribe } = require("diagnostics_channel");
const fs = require("fs");
const readline = require("readline");

const filePath = "example.txt";
// const filePath = "input.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity,
});

let total = 0;

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

const parseSingleLine = (singleLine) => {
   const newDigits = [];
   for (let i = 0; i < singleLine.length; ) {
      if (!isNaN(singleLine[i])) {
         newDigits.push(+singleLine[i]);
         i++;
      } else {
         const tempSubStr = singleLine.substring(i, i + 5);
         // console.log("tempSubStr ", tempSubStr);
         let fastForward = 1;
         if (tempSubStr.includes("one")) {
            newDigits.push(1);
            fastForward = 3;
         }
         if (tempSubStr.includes("two")) {
            newDigits.push(2);
            fastForward = 3;
         }
         if (tempSubStr.includes("six")) {
            newDigits.push(6);
            fastForward = 3;
         }
         if (tempSubStr.includes("four")) {
            newDigits.push(4);
            fastForward = 4;
         }
         if (tempSubStr.includes("five")) {
            newDigits.push(5);
            fastForward = 4;
         }
         if (tempSubStr.includes("nine")) {
            newDigits.push(9);
            fastForward = 4;
         }
         if (tempSubStr.includes("three")) {
            newDigits.push(3);
            fastForward = 5;
         }
         if (tempSubStr.includes("seven")) {
            newDigits.push(7);
            fastForward = 5;
         }
         if (tempSubStr.includes("eight")) {
            newDigits.push(8);
            fastForward = 5;
         }
         i += fastForward;
      }
      // console.log(newDigits);
      // sleep(100);
   }
   // console.log(newDigits);
   return newDigits;
};

// Read the file line by line
rl.on("line", (line) => {
   // console.log(line);
   const numArray = parseSingleLine(line);
   // console.log(numArray);
   const twoDigitNumber = createTwoDigitNumber(numArray);
   // console.log(twoDigitNumber);
   total += parseInt(twoDigitNumber);

   console.log(line, numArray, twoDigitNumber, total);
});

// Handle end of file
rl.on("close", () => {
   // console.log("total: ", total);
   // console.log("numbersWithPositions: ", numbersWithPositions);
   console.log("total: ", total);

   console.log("End of file");
});

const sleep = (millis) => {
   var stop = new Date().getTime();
   while (new Date().getTime() < stop + millis) {}
};

// const digitsInLetters = [
//    "one",
//    "two",
//    "three",
//    "four",
//    "five",
//    "six",
//    "seven",
//    "eight",
//    "nine",
// ];

// const threeLetters = ["one", "two", "six"];
// const fourLetters = ["four", "five", "nine"];
// const fiveLetters = ["three", "seven", "eight"];

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

// switch (tempSubStr) {
//    case tempSubStr.includes("one"):
//       newDigits.push(1);
//       fastForward = 3;
//       break;
//    case tempSubStr.includes("two"):
//       newDigits.push(1);
//       fastForward = 3;
//       break;
//    case tempSubStr.includes("six"):
//       newDigits.push(1);
//       fastForward = 3;
//       break;
//    default:
//       break;
// }
