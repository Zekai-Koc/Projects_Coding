const fs = require("fs");
const readline = require("readline");

// Replace 'file.txt' with the path to your text file
const filePath = "example.txt";

// Create a readable stream from the file
const fileStream = fs.createReadStream(filePath);

// Create an interface to read lines from the stream
const rl = readline.createInterface({
   input: fileStream,
   crlfDelay: Infinity, // To recognize all instances of CR LF ('\r\n') as a single line break
});

const createNumberArray = (line) => {
   return line.filter((character) => !isNaN(character));
};

// Read the file line by line
rl.on("line", (line) => {
   // Process each line here
   // console.log("Line:", line);
   // const newLineArray = line.split("");
   // console.log("newLineArray:", newLineArray);
   const numbers = createNumberArray(line.split(""));
   console.log(numbers);
});

// Handle end of file
rl.on("close", () => {
   console.log("End of file");
});
