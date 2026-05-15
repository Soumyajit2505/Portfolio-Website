import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_cd415bf";
const EMAILJS_TEMPLATE_ID = "template_vclgx7j";
const EMAILJS_PUBLIC_KEY = "ePBjYFbNrPAq3GwYk";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          title: "Portfolio Contact Message",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description:
          "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-[0.9rem] leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-2 text-left">
              Contact Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-sm text-foreground/80">
                    Email
                  </h4>
                  <a
                    href="mailto:Soumyajitd310@email.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Soumyajitd310@email.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-sm text-foreground/80">
                    Phone
                  </h4>
                  <a
                    href="tel:+919725735044"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +91 97257 35044
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-sm text-foreground/80">
                    Location
                  </h4>
                  <span className="text-muted-foreground text-[0.85rem]">
                    Anand, Gujarat, India
                  </span>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="pt-4 text-left">
              <h4 className="font-medium mb-3 text-sm text-foreground/80">
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/soumyajitdas7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative p-3 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-foreground/70 group-hover/icon:text-primary transition-colors duration-300" />
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[0.65rem] font-medium bg-card border border-border rounded-md text-foreground/80 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    LinkedIn Profile
                  </span>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/Soumyajit2505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative p-3 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-foreground/70 group-hover/icon:text-primary transition-colors duration-300" />
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[0.65rem] font-medium bg-card border border-border rounded-md text-foreground/80 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    GitHub Profile
                  </span>
                </a>
                {/* Email */}
                <a
                  href="mailto:Soumyajitd310@email.com"
                  className="group/icon relative p-3 rounded-full bg-primary/5 border border-primary/20 hover:bg-primary/15 hover:border-primary/40 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-foreground/70 group-hover/icon:text-primary transition-colors duration-300" />
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[0.65rem] font-medium bg-card border border-border rounded-md text-foreground/80 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    Email Me
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-card p-6 md:p-8 rounded-lg shadow-xs border border-border/30">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5 text-left"
                >
                  Your Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/60 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5 text-left"
                >
                  Your Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/60 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1.5 text-left"
                >
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/60 focus:border-primary/40 transition-all duration-200 resize-none placeholder:text-muted-foreground/50"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
