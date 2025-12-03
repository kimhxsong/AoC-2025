import { readFileSync } from "fs";

const input = readFileSync(process.argv[2] ?? 0, "utf8").trim();
const ranges = input.split(",").map((range) => range.split("-"));
let count = 0;
let sumOfInvalid = 0;

const isRepeatingPattern = (nstr, patternLength) => {
  const pattern = nstr.slice(0, patternLength);

  for (let i = 0; i < nstr.length; i += patternLength) {
    const expected = nstr.slice(i, i + patternLength);
    if (expected !== pattern) {
      return false;
    }
  }
  return true;
};

const checkInvalid = (num) => {
  const nstr = num.toString();
  for (let pl = 1; pl <= Math.floor(nstr.length / 2); pl++) {
    if (isRepeatingPattern(nstr, pl)) {
      return true;
    }
  }
  return false;
};

for (const range of ranges) {
  const start = +range[0];
  const end = +range[1];
  for (let current = start; current <= end; current++) {
    if (checkInvalid(current)) {
      count++;
      sumOfInvalid += current;
      // console.log(current);
    }
  }
}

console.log(sumOfInvalid);
