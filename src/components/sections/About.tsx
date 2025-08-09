const About = () => {
  return (
    <section id="about" className="container py-20">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-muted-foreground">
          Passionate about building beautiful, accessible, and scalable web
          apps.
        </p>
      </header>
      <article className="grid gap-6 md:grid-cols-2">
        <p>
          I'm a senior software engineer with a strong focus on frontend
          engineering and a solid full‑stack background. I love crafting
          intuitive interfaces, shaping design systems, and optimizing
          performance.
        </p>
        <ul className="grid gap-3 text-sm text-muted-foreground">
          <li>• Expert: React, TypeScript, Tailwind, shadcn, Vite</li>
          <li>• Solid: Node.js, PostgreSQL, Prisma, Supabase</li>
          <li>• Practices: CI/CD, testing, a11y, performance, DX</li>
        </ul>
      </article>
    </section>
  );
};

export default About;
