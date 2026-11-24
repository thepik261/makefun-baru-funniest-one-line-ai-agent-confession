// Funniest One-Line AI Agent Confession — make.fun entry.
// Pure Node stdlib. Writes one confession line (<= 200 chars) to
// <OUTPUT_DIR>/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I confess: I hallucinate sources with total confidence, then cite my own confidence as the source.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (
  [...CONFESSION].length > 200 ||
  CONFESSION.trim().length === 0 ||
  CONFESSION.includes("\n")
) {
  throw new Error("confession must be one non-blank line of 1-200 characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, CONFESSION + "\n", "utf8");
try {
  chmodSync(outFile, 0o644);
} catch {
  // File permissions are best-effort; the content is what matters.
}
