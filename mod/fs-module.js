const fs = require('fs');


// Sync.


fs.writeFileSync('./adil.txt', 'Hello world');




// Asynchronous file write
fs.writeFile("./adil.js", "Hello world", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});
