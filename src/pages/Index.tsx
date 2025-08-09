import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

const Index = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Indrakant Mishra — Senior Full‑Stack
        Developer
      </footer>
    </div>
  );
};

export default Index;
