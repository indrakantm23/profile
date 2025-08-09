import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import TypingCode from "../animations/TypingCode";
import SkillsFlip from "../animations/SkillsFlip";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden">
      <div
        ref={ref}
        className="relative isolate"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,20%), hsl(var(--accent)/0.15), transparent 60%)",
        }}
      >
        <div className="container flex min-h-[82vh] flex-col items-center justify-center gap-8 py-20 text-center">
          {/* Profile placeholder */}
          <div className="relative">
            <div className="mx-auto h-28 w-28 md:h-32 md:w-32 rounded-full p-[3px] bg-gradient-primary shadow-glow">
              <img
                src="../../../asset/profile.jpg"
                alt="Indrakant Mishra - Profile picture"
                loading="lazy"
                className="h-full w-full rounded-full object-cover bg-secondary"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur shadow-soft">
            <Code2 className="h-3.5 w-3.5 text-primary" /> Full‑Stack Engineer •
            Frontend Specialist
          </div>
          <SkillsFlip />

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Senior Full‑Stack Developer</span>{" "}
            Portfolio
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            I craft high‑performance, delightful web experiences with modern
            React, TypeScript, and cloud‑native stacks.
          </p>

          <TypingCode />

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="hero"
              size="lg"
              className="hover-scale"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
            <a href="#experience" aria-label="View Experience">
              <Button variant="outline" size="lg" className="hover-scale">
                View Experience
              </Button>
            </a>
            <div className="flex items-center gap-2">
              <a
                className="hover-scale"
                aria-label="GitHub"
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a
                className="hover-scale"
                aria-label="LinkedIn"
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a className="hover-scale" aria-label="Email" href="#contact">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
