import { readFileSync } from "fs";

const input = readFileSync(process.argv[2] ?? 0, "utf8").trim();
const ranges = input.split(",").map((range) => range.split("-"));
let count = 0;
let sumOfInvalid = 0;

const checkInvalid = (num) => {
  const nstr = num.toString();
  for (let i = 0; i < nstr.length / 2; i++) {
    const j = nstr.length / 2 + i;
    if (nstr[i] !== nstr[j]) {
      return false;
    }
  }
  return true;
};

for (const range of ranges) {
  const start = +range[0];
  const end = +range[1];
  for (let current = start; current <= end; current++) {
    if (checkInvalid(current)) {
      count++;
      sumOfInvalid += current;
    }
  }
}

console.log(sumOfInvalid);
