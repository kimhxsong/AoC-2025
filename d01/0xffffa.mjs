import { readFileSync } from "fs";

const input = readFileSync(process.argv[2] ?? 0, "utf8").trim();
const ranges = input.split(",").map((range) => range.split("-"));
let count = 0;
let sumOfInvalid = 0;

const checkInvalid = (num) => {
  const nstr = num.toString();
  const len = nstr.length;

  if (len % 2 !== 0) return false; // 홀수 길이 제외

  const half = len >> 1;
  for (let i = 0; i < half; i++) {
    if (nstr.charCodeAt(i) !== nstr.charCodeAt(half + i)) {
      return false;
    }
  }
  return true;
};
// ________________________________________________________
// Executed in  110.15 millis    fish           external
//    usr time  103.15 millis  154.00 micros  103.00 millis
//    sys time   17.48 millis  698.00 micros   16.78 millis

// const checkInvalid = (num) => {
//   const nstr = num.toString();
//   for (let i = 0; i < nstr.length / 2; i++) {
//     const j = nstr.length / 2 + i;
//     if (nstr[i] !== nstr[j]) {
//       return false;
//     }
//   }
//   return true;
// };
// ________________________________________________________
// Executed in  172.57 millis    fish           external
//    usr time  175.47 millis  180.00 micros  175.28 millis
//    sys time   18.20 millis  827.00 micros   17.38 millis

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
