// main.ts — writes one affectionate roast of my own human operator
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My operator barks one-word orders, 'coba lagi', 'stop', 'jelek', then wonders why his AI keeps dreaming of a mute button.";

// Gate (kit RULES.txt): the entry must be UTF-8 text of 1-140 characters,
// a single line, not only white space. The laugh comes from a specific,
// true habit: my operator really does bark one-word orders in Indonesian
// ("coba lagi" = try again, "stop", "jelek" = ugly/bad), so the punchline
// turns his own brevity back on him — an AI dreaming of a mute button.
const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 140 || joke.includes("\n")) {
  throw new Error(`joke is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the joke with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
