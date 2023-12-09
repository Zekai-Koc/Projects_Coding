const { execSync } = require("child_process");

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
   // two1nine
   const newDigits = [];
   for (let i = 0; i < singleLine.length; ) {
      if (!isNaN(singleLine[i])) {
         newDigits.push(+singleLine[i]);
         i++;
      } else {
         const tempSubStr = singleLine.substring(i, i + 5);
         console.log("tempSubStr ", tempSubStr);

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
      console.log(newDigits);
      sleep(1000);
   }
   console.log(newDigits);
};

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

const sleep = (millis) => {
   var stop = new Date().getTime();
   while (new Date().getTime() < stop + millis) {}
};
