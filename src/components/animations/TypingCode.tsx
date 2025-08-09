import { useEffect, useState } from "react";

const LINES = [
  "// React + TypeScript + Query",
  "interface Repo { id: number; name: string; stargazers_count: number }",
  "export const useRepos = () => useQuery<Repo[]>({",
  "  queryKey: ['repos'],",
  "  queryFn: async () => {",
  "    const res = await fetch('/api/repos')",
  "    if (!res.ok) throw new Error('Failed')",
  "    return res.json()",
  "  },",
  "})",
  "// Accessibility. Performance. DX.",
];

const TypingCode = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [display, setDisplay] = useState<string[]>([]);

  useEffect(() => {
    let timeout: number;

    const type = () => {
      const currentLine = LINES[lineIndex];
      const currentText = display[lineIndex] || "";
      if (charIndex < currentLine.length) {
        timeout = window.setTimeout(() => {
          const newLine = currentText + currentLine[charIndex];
          const next = [...display];
          next[lineIndex] = newLine;
          setDisplay(next);
          setCharIndex((c) => c + 1);
        }, 28);
      } else {
        timeout = window.setTimeout(() => {
          if (lineIndex < LINES.length - 1) {
            setLineIndex((i) => i + 1);
            setCharIndex(0);
          } else {
            setLineIndex(0);
            setCharIndex(0);
            setDisplay([""]);
          }
        }, 600);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, display]);

  useEffect(() => {
    setDisplay([""]);
    setLineIndex(0);
    setCharIndex(0);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      <div className="rounded-xl border bg-gradient-to-b from-card/80 to-background/40 backdrop-blur shadow-soft overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/40">
          <span
            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/60"
            aria-hidden
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50"
            aria-hidden
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40"
            aria-hidden
          />
          <span className="ml-3 text-xs text-muted-foreground">app.tsx</span>
        </div>
        <pre
          aria-label="Animated code typing"
          className="p-4 text-xs md:text-sm font-mono text-muted-foreground"
        >
          <code>
            {display.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="select-none w-8 text-right pr-3 text-muted-foreground/60">
                  {idx + 1}
                </span>
                <span className="whitespace-pre-wrap flex-1">
                  {line}
                  {idx === lineIndex && <span className="blink-caret">|</span>}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TypingCode;
