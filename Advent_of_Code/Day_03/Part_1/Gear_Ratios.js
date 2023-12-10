const fs = require("fs");
const readline = require("readline");

// const filePath = "example.txt";
const filePath = "input.txt";

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

   for (let i = 0; i < singleLine.length; i++) {
      if (!isNaN(singleLine[i])) {
         newDigits.push(+singleLine[i]);
         // i++;
      } else {
         const tempSubStr = singleLine.substring(i);
         // console.log("tempSubStr", tempSubStr);
         let found = false;

         for (const digit of digitsInLetters) {
            if (tempSubStr.startsWith(digit)) {
               newDigits.push(digitsInLetters.indexOf(digit) + 1);
               found = true;
               // i += digit.length;
            }
         }
         // if (!found) i++;
      }
      // console.log(newDigits);
      // sleep(1000);
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

rl.on("close", () => {
   console.log("total: ", total);
   console.log("End of file");
});

const sleep = (millis) => {
   var stop = new Date().getTime();
   while (new Date().getTime() < stop + millis) {}
};
