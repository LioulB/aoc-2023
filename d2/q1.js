const fs = require("fs");
const data = fs.readFileSync(__dirname+"/mock.txt", "utf8");

let result = 0;

let r = 12;
let g = 13;
let b = 14;

data.split("\n").map((line, i) => {
  line = line.replace(`Game ${i + 1}:`, "");
  const splitted = line
    .split(",")
    .map((c) => c.split(";"))
    .flat();

  let count = false;
  for (const d of splitted) {
    const value = parseInt(d);
    if (
      (d.includes("green") && value > g) ||
      (d.includes("red") && value > r) ||
      (d.includes("blue") && value > b)
    ) {
      count = true;
    }
  }
  if (!count) {
    result += i + 1;
  }
});

console.log(result);
