import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fraud-Shield",
    description:
      "Fraud-Shield is an intelligent fraud detection system that identifies suspicious credit card transactions using machine learning. It focuses on high recall, class imbalance handling, and real-time fraud risk prediction.",
    image: "/projects/Project1.png",
    tags: ["Python", "Streamlit", "FastAPI", "LightGBM", "Scikit-learn", "Jupyter Notebook"],
    demoUrl: "https://fraud-shield-wiyl.onrender.com/",
    githubUrl: "https://github.com/Soumyajit2505/Fraud-Shield",
  },
  {
    id: 2,
    title: "Customer Shopping Behavior Analysis",
    description:
      "This project analyzes customer transaction data to uncover shopping patterns, spending behavior, product trends, and business insights using SQL, PostgreSQL, Pandas, and Power BI dashboards.",
    image: "/projects/Project2.png",
    tags: ["PostgreSQL", "SQL", "Power BI", "Pandas", "Jupyter Notebook"],
    demoUrl: "",
    githubUrl: "https://github.com/Soumyajit2505/Customer-Shopping-Behavior-Analysis",
  },
  {
    id: 3,
    title: "InsightFlow — Instagram Analytics Dashboard",
    description:
      "InsightFlow helps creators and businesses understand Instagram performance through interactive analytics for engagement, reach, impressions, content trends, and profile-level insights.",
    image: "/projects/Project3.png",
    tags: ["Python", "Streamlit", "PostgreSQL", "Pandas", "Plotly"],
    demoUrl: "https://insightflow-dashboard-7uvs.onrender.com",
    githubUrl: "https://github.com/Soumyajit2505/InsightFlow",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-[0.9rem] leading-relaxed">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-xs flex flex-col border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.08)] hover:-translate-y-1"
            >
              {/* ── Image ── */}
              <div className="h-48 overflow-hidden bg-background/20 flex items-center justify-center p-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded"
                />
              </div>

              {/* ── Content ── */}
              <div className="p-5 flex flex-col flex-1">
                {/* Title — fixed 2-line zone */}
                <h3 className="text-base font-semibold leading-tight mb-3"
                    style={{ minHeight: "2.5em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {project.title}
                </h3>

                {/* Tags — fixed 2-row zone */}
                <div className="flex flex-wrap gap-1.5 mb-4"
                     style={{ minHeight: "3.25rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[0.65rem] font-medium border border-primary/20 rounded-full bg-primary/5 text-muted-foreground leading-none h-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border/20 mb-4" />

                {/* Description — flex-1 fills remaining space */}
                <p className="text-muted-foreground text-[0.85rem] leading-[1.7] mb-4 flex-1 text-left">
                  {project.description}
                </p>

                {/* ── Actions — pinned to bottom ── */}
                <div className="flex items-center gap-4 pt-3 border-t border-border/15 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-foreground/50 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
                      <span className="text-[0.75rem] font-medium">Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-foreground/50 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={14} />
                    <span className="text-[0.7rem] font-medium">Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Soumyajit2505"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
