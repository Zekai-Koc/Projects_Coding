const fs = require("fs");
const readline = require("readline");

const filePath = "example.txt";

const fileStream = fs.createReadStream(filePath);

const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity, // To recognize all instances of CR LF ('\r\n') as a single line break
});

rl.on("line", (line) => {
   console.log("Line:", line);
});

rl.on("close", () => {
   console.log("End of file");
});
