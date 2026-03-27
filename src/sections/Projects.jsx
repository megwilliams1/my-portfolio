import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Daily Glow",
    description:
      "A comprehensive habit tracking web app with persistent streaks, dark mode, custom themes, floating animations, progress tracking, and heatmap visualizations.",
    image: "/projects/daily-glow.jpg",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "https://daily-glow-plum.vercel.app/",
    github: "https://github.com/megwilliams1/daily-glow#",
  },

  {
    title: "Softly",
    description:
      "A gentle, emotionally-aware productivity app built around a living garden metaphor — you don't complete tasks, you nurture them. Designed for people who feel overwhelmed by traditional productivity tools, Softly prioritizes calm, clarity, and emotional safety.",
    image: "/projects/softly.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://softly--softly-b97e8.us-central1.hosted.app/",
    github: "https://github.com/megwilliams1/softly",
  },

  {
    title: "Hook, Line, & Savannah",
    description:
      "A fullstack community hub for Savannah, TN — the Catfish Capital of Tennessee. Built with a fellow engineer. Features a community event calendar, local resource listings, and email notifications. Full-stack Next.js app with PostgreSQL, Prisma ORM, and server actions.",
    image: "/projects/hook-line-savannah.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    link: "https://sav-community-hub--sav-community-hub.us-east4.hosted.app/",
    github: "https://github.com/RBlaylock-Dev/sav-community-hub",
  },
];

export const Projects = () => {
  // Track which project card is currently showing
  const [activeIdx, setActiveIdx] = useState(0);
  const [ref, isInView] = useInView();

  // Go to next project (loops back to start)
  const next = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  // Go to previous project (loops to end)
  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // The currently visible project
  const activeProject = projects[activeIdx];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase ${isInView ? "animate-fade-in" : "opacity-0"}`}>
            Featured Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground ${isInView ? "animate-fade-in" : "opacity-0"}`}>
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className={`text-muted-foreground animation-delay-200 ${isInView ? "animate-fade-in" : "opacity-0"}`}>
            A selection of my recent work, from complex web applications to fun
            and interactive personal projects.
          </p>
        </div>

        {/* ============================
            CAROUSEL WRAPPER
        ============================= */}
        <div className={`max-w-4xl mx-auto animation-delay-300 ${isInView ? "animate-fade-in" : "opacity-0"}`}>
          {/* Project Card */}
          <div className="glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500">
            {/* Project Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  // If image fails to load, show a pink gradient placeholder
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback placeholder if image is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-black hidden items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Add image to /public/projects/
                </span>
              </div>

              {/* Dark gradient overlay at bottom of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

              {/* Hover overlay with links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Project counter badge - top right */}
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm text-muted-foreground">
                {activeIdx + 1} / {projects.length}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold text-foreground">
                  {activeProject.title}
                </h3>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {activeProject.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ============================
              CAROUSEL CONTROLS
          ============================= */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Button */}
            <button
              onClick={previous}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 h-2 bg-primary" // active dot is wide + pink
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View All on GitHub CTA */}
        <div className={`text-center mt-12 animation-delay-500 ${isInView ? "animate-fade-in" : "opacity-0"}`}>
          <a
            href="https://github.com/megwilliams1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
