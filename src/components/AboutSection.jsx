import { Briefcase, Code, User, Database, GraduationCap, Calendar, Award, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Heading + Divider — above the grid so both columns start equally */}
        <div className="mb-8 text-left max-w-6xl">
          <h3 className="text-xl md:text-2xl font-semibold leading-snug tracking-tight">
            <span className="text-primary">Data Scientist</span>
            <span className="text-muted-foreground mx-2">|</span>
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI &amp; Machine Learning
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent sm:block sm:mt-0.5">
              Enthusiast
            </span>
          </h3>
          <div className="w-12 h-1 rounded-full bg-primary/60 mt-4" />
        </div>

        {/* Two-column grid — both columns start at the same top line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column — Paragraphs + Buttons */}
          <div className="space-y-4 text-left">
            <p className="text-muted-foreground leading-[1.85] text-[0.9rem]" style={{ textAlign: "justify", hyphens: "auto" }}>
              I am currently pursuing a Bachelor of Technology in Computer
              Engineering from Madhuben and Bhanubhai Patel Institute of
              Technology, affiliated with Charutar Vidya Mandal University
              (CVMU), and currently in my 6th semester with a CGPA of&nbsp;
              <span className="text-foreground font-medium">8.52</span>.
            </p>

            <p className="text-muted-foreground leading-[1.85] text-[0.9rem]" style={{ textAlign: "justify", hyphens: "auto" }}>
              I am passionate about Data Science, Artificial Intelligence, and
              Machine Learning, with a strong interest in building intelligent
              systems that solve practical real-world problems.
            </p>

            <p className="text-muted-foreground leading-[1.85] text-[0.9rem]" style={{ textAlign: "justify", hyphens: "auto" }}>
              What sets me apart is my ability to transform complex and
              unstructured data into simple, meaningful, and actionable
              solutions. I focus on creating accurate, reliable, and
              user-friendly tools that help people understand insights clearly
              and make smarter decisions through data-driven approaches.
            </p>

            <p className="text-muted-foreground leading-[1.85] text-[0.9rem]" style={{ textAlign: "justify", hyphens: "auto" }}>
              I enjoy working on end-to-end data science projects — from data
              collection and analysis to model building and deployment. My goal
              is to continue learning, building impactful solutions, and
              contributing to innovative projects that create real-world value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/projects/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_8px_rgba(139,92,246,0.3)] text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column — Highlight Cards */}
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                icon: Code,
                title: "Data Science & ML",
                desc: "Building predictive models, performing EDA, and developing AI-driven applications using Python and Scikit-learn.",
              },
              {
                icon: User,
                title: "Data Visualization",
                desc: "Creating interactive dashboards and visual insights using Power BI, Streamlit, and Plotly to represent data effectively.",
              },
              {
                icon: Briefcase,
                title: "AI Applications",
                desc: "Developing intelligent solutions using LangChain, LangGraph, and modern AI frameworks for real-world use cases.",
              },
              {
                icon: Database,
                title: "Data Engineering",
                desc: "Working with databases like PostgreSQL and MongoDB, ensuring clean, structured, and optimized data workflows.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="gradient-border p-4 card-hover flex items-start"
              >
                <div className="flex items-start gap-3 w-full">
                  <div className="p-2.5 rounded-full bg-primary/10 shrink-0 mt-0.5">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left min-w-0">
                    <h4 className="font-semibold text-base mb-0.5">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground text-[0.85rem] leading-[1.7]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: GraduationCap, label: "Degree", value: "B.Tech in Computer Engg." },
            { icon: Calendar, label: "Semester", value: "6th Semester" },
            { icon: Award, label: "CGPA", value: "8.52" },
            { icon: MapPin, label: "Location", value: "Anand, Gujarat, India" },
          ].map((item) => (
            <div
              key={item.label}
              className="gradient-border p-4 flex items-center gap-3 rounded-lg"
            >
              <div className="p-2 rounded-full bg-primary/10 shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground truncate">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
