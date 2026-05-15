import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-5xl flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Soumyajit Das. All rights reserved.
        </p>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Soumyajit2505"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/soumyajitdas7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:Soumyajitd310@email.com"
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
