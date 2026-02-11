import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const projects = [
  {
    title: "Daily Glow",
    description:
      "A comprehensive habit tracking web app with persistent streaks, dark mode, custom themes, floating animations, progress tracking, and heatmap visualizations.",
    image: "/projects/daily-glow.jpg",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "#",
    github: "#",
  },

  {
    title: "Product Page",
    description:
      "A demo e-commerce product page for a women's clothing boutique built with React and Vanilla CSS. Features product listings, descriptions, and a clean, responsive feminine design.",
    image: "/projects/product-page.jpg",
    tags: ["React", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/megwilliams1/TheFinals",
  },
];

export const Projects = () => {
  // Track which project card is currently showing
  const [activeIdx, setActiveIdx] = useState(0);

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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to fun
            and interactive personal projects.
          </p>
        </div>

        {/* ============================
            CAROUSEL WRAPPER
        ============================= */}
        <div className="max-w-4xl mx-auto animate-fade-in animation-delay-300">
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
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
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
