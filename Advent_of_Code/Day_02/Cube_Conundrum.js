const fs = require("fs");
const readline = require("readline");

const filePath = "example.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity,
});

const gameStats = [];

rl.on("line", (line) => {
   const singleGameStats = handleSingleLine(line);
   console.log(singleGameStats);
   gameStats.push(singleGameStats);
});

const handleSingleLine = (singleLine) => {
   const [Red, Green, Blue] = [[], [], []];
   const gameStats = {};
   // console.log("singleLine: ", singleLine);
   const seperateGameId = singleLine.split(":");
   // console.log("seperateGameId[1]:", seperateGameId[1]);
   const separateSets = seperateGameId[1].split(";");
   // console.log("separateSets: ", separateSets);
   separateSets.forEach((element) => {
      const separateColors = element.split(",");
      // console.log("separateColors: ", separateColors);
      separateColors.forEach((element) => {
         const separateColor = element.split(",")[0].trim();
         // console.log("separateColor: ", separateColor);
         const finalSeparation = separateColor.split(" ");
         // console.log("finalSeparation: ", finalSeparation);
         if (finalSeparation[1] === "red") Red.push(+finalSeparation[0]);
         if (finalSeparation[1] === "green") Green.push(+finalSeparation[0]);
         if (finalSeparation[1] === "blue") Blue.push(+finalSeparation[0]);
      });
   });
   // console.log({ Red }, { Green }, { Blue });
   // console.log(Math.max(...Red));
   // console.log(Math.max(...Green));
   // console.log(Math.max(...Blue));
   gameStats.gameId = seperateGameId[0].trim();
   gameStats.Red = Math.max(...Red);
   gameStats.Green = Math.max(...Green);
   gameStats.Blue = Math.max(...Blue);
   return gameStats;
};
