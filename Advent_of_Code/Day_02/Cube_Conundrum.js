const fs = require("fs");
const readline = require("readline");

// const filePath = "example.txt";
const filePath = "input.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity,
});

const gameStats = [];

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
   const gameId = parseInt(seperateGameId[0].split(" ")[1].trim());
   gameStats.Red = Math.max(...Red);
   gameStats.Green = Math.max(...Green);
   gameStats.Blue = Math.max(...Blue);

   return { gameId, ...gameStats };
};

const findPossible = (games, maxColorCubes) => {
   const filteredArray = games.filter(
      (game) =>
         game.Red <= maxColorCubes.red &&
         game.Green <= maxColorCubes.green &&
         game.Blue <= maxColorCubes.blue
   );
   return filteredArray;
};

const findTotal = (filteredArray) => {
   return filteredArray.reduce((acc, curVal) => acc + curVal.gameId, 0);
};

rl.on("line", (line) => {
   const singleGameStats = handleSingleLine(line);
   gameStats.push(singleGameStats);
});

rl.on("close", () => {
   console.log(gameStats);
   const possibleArray = findPossible(gameStats, {
      red: 12,
      green: 13,
      blue: 14,
   });

   console.log(findTotal(possibleArray));
});
