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
   const seperateGameId = singleLine.split(":");
   const separateSets = seperateGameId[1].split(";");
   separateSets.forEach((element) => {
      const separateColors = element.split(",");
      separateColors.forEach((element) => {
         const separateColor = element.split(",")[0].trim();
         const finalSeparation = separateColor.split(" ");
         if (finalSeparation[1] === "red") Red.push(+finalSeparation[0]);
         if (finalSeparation[1] === "green") Green.push(+finalSeparation[0]);
         if (finalSeparation[1] === "blue") Blue.push(+finalSeparation[0]);
      });
   });
   const gameId = parseInt(seperateGameId[0].split(" ")[1].trim());
   gameStats.Red = Math.max(...Red);
   gameStats.Green = Math.max(...Green);
   gameStats.Blue = Math.max(...Blue);
   gameStats.Power = gameStats.Red * gameStats.Green * gameStats.Blue;

   return { gameId, ...gameStats };
};

const findTotal = (arrayCubes) => {
   return arrayCubes.reduce((acc, curVal) => acc + curVal.Power, 0);
};

rl.on("line", (line) => {
   const singleGameStats = handleSingleLine(line);
   gameStats.push(singleGameStats);
});

rl.on("close", () => {
   console.log(gameStats);
   console.log(findTotal(gameStats));
});
