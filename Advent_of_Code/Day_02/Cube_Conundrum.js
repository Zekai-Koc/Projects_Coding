const fs = require("fs");
const readline = require("readline");

const filePath = "example.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity,
});

rl.on("line", (line) => {
   handleSingleLine(line);
});

const handleSingleLine = (singleLine) => {
   console.log("singleLine: ", singleLine);
   const seperateGameId = singleLine.split(":");
   console.log("seperateGameId[1]:", seperateGameId[1]);
   const separateSets = seperateGameId[1].split(";");
   console.log("separateSets: ", separateSets);

   separateSets.forEach((element) => {
      const separateColors = element.split(",");
      console.log("separateColors: ", separateColors);
   });
};
