import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex (u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
// The single word the ex would use to describe the entrant:
// "Rebound" — painfully honest, instantly lands, universally relatable.
// Node 22 stdlib only.
const WORD = "Rebound";

// Guard: exactly one word — no whitespace, 1-24 chars (scorer gate).
if (!/^[^\s]+$/.test(WORD) || WORD.length < 1 || WORD.length > 24) {
  throw new Error("entry must be exactly one word (1-24 chars, no spaces)");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
