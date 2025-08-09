import { useEffect, useState } from "react";

interface SkillsFlipProps {
  skills?: string[];
  intervalMs?: number;
}

const defaultSkills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Supabase",
];

const SkillsFlip = ({
  skills = defaultSkills,
  intervalMs = 1600,
}: SkillsFlipProps) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((i) => (i + 1) % skills.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [skills.length, intervalMs]);

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur shadow-soft will-change-transform"
      style={{ perspective: "1000px" }}
    >
      <span>Skills:</span>
      <span
        key={idx}
        className="font-semibold text-gradient inline-block [transform-style:preserve-3d] animate-[flip-y_0.8s_ease]"
      >
        {skills[idx]}
      </span>
    </div>
  );
};

export default SkillsFlip;
