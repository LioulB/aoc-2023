const fs = require("fs");
const data = fs.readFileSync(__dirname+"/mock.txt", "utf8");

let power = 0;

data.split("\n").map((line, i) => {
  line = line.replace(`Game ${i + 1}:`, "");
  const splitted = line
  .split(",")
  .map((c) => c.split(";"))
  .flat();
  
  let r = 0;
  let g = 0;
  let b = 0;

  for (const d of splitted) {
    const value = parseInt(d);
    if (d.includes("green") && value > g) g = value;
    if (d.includes("red") && value > r) r = value;
    if (d.includes("blue") && value > b) b = value;
  }
   
  power += r * g * b;
});

console.log(power);
