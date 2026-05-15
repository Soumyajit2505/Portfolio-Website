import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "C", level: 70, category: "languages" },
  { name: "C++", level: 70, category: "languages" },

  // Libraries & Frameworks
  { name: "Pandas", level: 90, category: "frameworks" },
  { name: "NumPy", level: 85, category: "frameworks" },
  { name: "Scikit-learn", level: 85, category: "frameworks" },
  { name: "Streamlit", level: 80, category: "frameworks" },
  { name: "LangChain", level: 75, category: "frameworks" },
  { name: "LangGraph", level: 70, category: "frameworks" },

  // Databases & Tools
  { name: "MongoDB", level: 70, category: "tools" },
  { name: "PostgreSQL", level: 80, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Power BI", level: 80, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },

  // Data Science & Core Skills
  { name: "Data Cleaning", level: 90, category: "core" },
  { name: "EDA", level: 85, category: "core" },
  { name: "Machine Learning", level: 85, category: "core" },
  { name: "Data Visualization", level: 85, category: "core" },
  { name: "Predictive Modeling", level: 80, category: "core" },
  { name: "AI Workflow Development", level: 75, category: "core" },

  // Professional Skills
  { name: "Problem Solving", level: 90, category: "professional" },
  { name: "Team Collaboration", level: 85, category: "professional" },
  { name: "Analytical Thinking", level: 90, category: "professional" },
  { name: "Real-World Solution Dev", level: 85, category: "professional" },
];

const categories = ["all", "languages", "frameworks", "tools", "core", "professional"];

const categoryLabels = {
  all: "All",
  languages: "Languages",
  frameworks: "Frameworks",
  tools: "Tools",
  core: "Core Skills",
  professional: "Professional",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-base"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
