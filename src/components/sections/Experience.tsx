import { Briefcase, Calendar } from "lucide-react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

const experiences = [
  {
    company: "SAP SuccessFactors",
    role: "Senior Frontend Engineer",
    duration: "2024 — Present",
    summary:
      "Led the design system and performance initiatives. Built complex dashboards with React, TanStack, and charts.",
    logo: "../../../asset/sap.png",
  },
  {
    company: "Deloitte Digital",
    role: "Full‑Stack Engineer",
    duration: "2021 — 2024",
    summary:
      "Developed end‑to‑end features across React, Node, and Postgres. Introduced CI and testing best practices.",
    logo: "../../../asset/deloitte.png",
  },
  {
    company: "Lowe's India",
    role: "Frontend Engineer",
    duration: "2020 - 2021",
    summary:
      "Shipped multiple SPA products, improved Lighthouse scores to 95+ and built reusable component libraries.",
    logo: "../../../asset/lowes.png",
  },
  {
    company: "Capgemini",
    role: "Frontend Engineer",
    duration: "2017 — 2020",
    summary:
      "Shipped multiple SPA products, improved Lighthouse scores to 95+ and built reusable component libraries.",
    logo: "../../../asset/capgemini.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container py-20">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" /> Experience
        </h2>
        <p className="text-muted-foreground">
          Company‑wise breakdown with roles and durations.
        </p>
      </header>

      <Carousel
        className="relative"
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
      >
        <CarouselContent>
          {experiences.map((item) => (
            <CarouselItem
              key={item.company}
              className="w-full max-w-full flex-1"
            >
              <Card className="group p-6 h-full w-full bg-gradient-to-br from-background to-muted/30 border border-border/60 shadow-soft hover:shadow-glow transition-all rounded-xl animate-fade-in hover:-translate-y-1 ring-1 ring-transparent hover:ring-primary/30 flex flex-col justify-between">
                <div className="mb-3 flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-1 ring-border/60 flex items-center justify-center overflow-hidden">
                    <AvatarImage
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="object-contain w-full h-full"
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground text-xs flex items-center justify-center w-full h-full">
                      {getInitials(item.company)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    {item.company}
                  </span>
                </div>
                <h3 className="text-lg font-medium">{item.role}</h3>
                <div className="mt-1 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-4 w-4" /> {item.duration}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.summary}
                </p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover-scale" />
        <CarouselNext className="hover-scale" />
      </Carousel>
    </section>
  );
};

export default Experience;
