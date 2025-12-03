import { readFileSync } from "fs";

const input = readFileSync(process.argv[2] ?? 0, "utf8").trim();
const ranges = input.split(",").map((range) => range.split("-"));
let count = 0;
let sumOfInvalid = 0;

// After optimization
const isRepeatingPattern = (nstr, pl) => {
  for (let i = pl; i < nstr.length; i++) {
    if (nstr.charCodeAt(i) !== nstr.charCodeAt(i % pl)) {
      return false;
    }
  }
  return true;
};

const checkInvalid = (num) => {
  const nstr = num.toString();
  const len = nstr.length;

  for (let pl = 1; pl <= len >> 1; pl++) {
    if (len % pl === 0 && isRepeatingPattern(nstr, pl)) {
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
      sumOfInvalid += current;
    }
  }
}
// ________________________________________________________
// Executed in  123.75 millis    fish           external
//    usr time  120.63 millis  169.00 micros  120.46 millis
//    sys time   16.12 millis  744.00 micros   15.38 millis

console.log(sumOfInvalid);

// Before optimization
// const isRepeatingPattern = (nstr, patternLength) => {
//   const pattern = nstr.slice(0, patternLength);

//   for (let i = 0; i < nstr.length; i += patternLength) {
//     const expected = nstr.slice(i, i + patternLength);
//     if (expected !== pattern) {
//       return false;
//     }
//   }
//   return true;
// };

// const checkInvalid = (num) => {
//   const nstr = num.toString();
//   for (let pl = 1; pl <= Math.floor(nstr.length / 2); pl++) {
//     if (isRepeatingPattern(nstr, pl)) {
//       return true;
//     }
//   }
//   return false;
// };

// for (const range of ranges) {
//   const start = +range[0];
//   const end = +range[1];
//   for (let current = start; current <= end; current++) {
//     if (checkInvalid(current)) {
//       count++;
//       sumOfInvalid += current;
//       // console.log(current);
//     }
//   }
// }

// ╰─❯ time node 0xffffb.mjs input.txt                              (base)
// 15704845910

// ________________________________________________________
// Executed in  307.76 millis    fish           external
//    usr time  288.28 millis  170.00 micros  288.11 millis
//    sys time   24.36 millis  665.00 micros   23.69 millis
// --------------------------------------------------------
