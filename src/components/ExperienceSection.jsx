import { Briefcase, Calendar, MapPin, Lightbulb } from "lucide-react";

export const ExperienceSection = () => {
  const responsibilities = [
    "Worked with real-world datasets for preprocessing and analysis",
    "Assisted in building and evaluating machine learning models",
    "Performed iterative experimentation to improve model performance",
    "Applied data analytics techniques to generate actionable insights",
    "Participated in end-to-end machine learning workflow implementation",
  ];

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Data Analytics", icon: "📊" },
    { name: "AI/ML Fundamentals", icon: "🧠" },
  ];

  return (
    <section id="experience" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* ═══════════════════════════════════════════
            CENTERED HEADER — Icon + Divider Lines
        ═══════════════════════════════════════════ */}
        <div className="flex flex-col items-center text-center mb-14">

          {/* Glowing icon with divider lines */}
          <div className="flex items-center gap-5 mb-7">
            {/* Left divider line */}
            <div
              className="hidden sm:block w-20 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(139,92,246,0.5))",
              }}
            />

            {/* Glowing briefcase icon */}
            <div
              className="p-4 rounded-2xl border border-primary/25"
              style={{
                background: "rgba(139,92,246,0.08)",
                boxShadow:
                  "0 0 24px rgba(139,92,246,0.18), 0 0 60px rgba(139,92,246,0.06)",
              }}
            >
              <Briefcase className="h-7 w-7 text-primary" />
            </div>

            {/* Right divider line */}
            <div
              className="hidden sm:block w-20 h-px"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(139,92,246,0.5))",
              }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            style={{ lineHeight: 1.2 }}
          >
            Data Scientist Intern
          </h2>

          {/* Company name */}
          <p
            className="text-primary font-semibold text-base md:text-lg mt-2 tracking-wide"
            style={{ textShadow: "0 0 14px rgba(139,92,246,0.35)" }}
          >
            Pratinik INFOTECH
          </p>

          {/* Metadata pills */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground border border-primary/20 transition-colors duration-200 hover:border-primary/40"
              style={{ background: "rgba(139,92,246,0.06)" }}
            >
              <Calendar className="h-3.5 w-3.5 text-primary/80" />
              2 Months
            </span>
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground border border-primary/20 transition-colors duration-200 hover:border-primary/40"
              style={{ background: "rgba(139,92,246,0.06)" }}
            >
              <MapPin className="h-3.5 w-3.5 text-primary/80" />
              Remote
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            DESCRIPTION — Centered, readable
        ═══════════════════════════════════════════ */}
        <div className="max-w-2xl mx-auto mb-14 px-2">
          <p
            className="text-muted-foreground text-[0.9rem] text-center"
            style={{ lineHeight: 1.9 }}
          >
            Worked on real-world data science and machine learning tasks
            involving data analysis, preprocessing, model development, and
            performance optimization. Contributed to practical AI/ML workflows
            while gaining hands-on exposure to solving business-oriented
            problems using data-driven approaches.
          </p>
        </div>

        {/* Subtle separator */}
        <div className="max-w-md mx-auto mb-14">
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)",
            }}
          />
        </div>

        {/* ═══════════════════════════════════════════
            TWO-COLUMN: Responsibilities + Technologies
        ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 max-w-4xl mx-auto mb-14">

          {/* ── Responsibilities (3/5) ── */}
          <div
            className="md:col-span-3 rounded-xl p-6 md:p-7 border border-white/[0.06] backdrop-blur-sm"
            style={{
              background: "rgba(139,92,246,0.03)",
              boxShadow: "0 0 30px rgba(139,92,246,0.04)",
            }}
          >
            {/* Section heading with divider lines */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-6 h-px"
                style={{
                  background:
                    "linear-gradient(to right, rgba(139,92,246,0.5), transparent)",
                }}
              />
              <h3 className="font-semibold text-xs uppercase tracking-[0.18em] text-primary/90 whitespace-nowrap">
                Key Responsibilities
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(139,92,246,0.2))",
                }}
              />
            </div>

            <ul className="space-y-4">
              {responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-muted-foreground text-[0.85rem] group"
                  style={{ lineHeight: 1.7 }}
                >
                  <span
                    className="mt-[7px] w-[6px] h-[6px] rounded-full bg-primary/70 shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                  />
                  <span className="transition-colors duration-200 group-hover:text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Technologies (2/5) ── */}
          <div
            className="md:col-span-2 rounded-xl p-6 md:p-7 border border-white/[0.06] backdrop-blur-sm"
            style={{
              background: "rgba(139,92,246,0.03)",
              boxShadow: "0 0 30px rgba(139,92,246,0.04)",
            }}
          >
            {/* Section heading with divider lines */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-6 h-px"
                style={{
                  background:
                    "linear-gradient(to right, rgba(139,92,246,0.5), transparent)",
                }}
              />
              <h3 className="font-semibold text-xs uppercase tracking-[0.18em] text-primary/90 whitespace-nowrap">
                Technologies
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(139,92,246,0.2))",
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-primary/15 text-sm font-medium text-primary/90 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_14px_rgba(139,92,246,0.12)] cursor-default"
                  style={{ background: "rgba(139,92,246,0.05)" }}
                >
                  <span className="text-base">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            KEY LEARNING — Glassmorphism card
        ═══════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-xl p-7 md:p-8 border border-primary/15 backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 100%)",
              boxShadow: "0 0 30px rgba(139,92,246,0.06)",
            }}
          >
            {/* Heading with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-2.5 rounded-xl border border-primary/20"
                style={{
                  background: "rgba(139,92,246,0.1)",
                  boxShadow: "0 0 16px rgba(139,92,246,0.12)",
                }}
              >
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3
                className="font-semibold text-base text-primary tracking-wide"
                style={{ textShadow: "0 0 10px rgba(139,92,246,0.25)" }}
              >
                Key Learning
              </h3>
            </div>

            <p
              className="text-muted-foreground text-[0.85rem]"
              style={{ lineHeight: 1.85, textAlign: "justify" }}
            >
              This internship helped me understand how real-world data science
              projects are executed beyond theory. I gained practical exposure to
              cleaning messy datasets, analyzing patterns, building machine
              learning workflows, evaluating model performance, and converting
              technical results into useful insights.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
