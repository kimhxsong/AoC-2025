import { readFileSync } from "fs";

const input = readFileSync(process.argv[2] ?? 0, "utf8").trim();

const MOD = 100;
let pos = 50;
let count = 0;

for (const line of input.split("\n")) {
  if (!line) continue;

  const dir = line[0] === "R" ? 1 : -1;
  const dist = +line.slice(1);

  if (dir === 1) {
    count += Math.floor((pos + dist) / MOD);
  } else {
    count += Math.ceil(pos / MOD) - Math.ceil((pos - dist) / MOD);
  }

  pos = (((pos + dir * dist) % MOD) + MOD) % MOD;
}

console.log(count);
