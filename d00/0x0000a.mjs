import { readFileSync } from "fs";

const input = readFileSync(process.argv[2] ?? 0, "utf8").trim();

const MOD = 100;
let pos = 50;
let count = 0;

for (const line of input.split("\n")) {
  if (!line) continue;

  const delta = (line[0] === "R" ? 1 : -1) * +line.slice(1);
  pos = (((pos + delta) % MOD) + MOD) % MOD;
  if (pos === 0) count++;
}

console.log(count);
