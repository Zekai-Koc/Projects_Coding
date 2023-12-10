const fs = require("fs");
const readline = require("readline");

const filePath = "example.txt";
// const filePath = "input.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity,
});

rl.on("line", (line) => {
   console.log(line);
});

rl.on("close", () => {
   console.log("End of file");
});
