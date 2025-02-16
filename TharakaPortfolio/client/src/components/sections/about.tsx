import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Laptop, Palette } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Development",
    description:
      "Expertise in modern web technologies and frameworks to build responsive applications.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with attention to detail.",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Software Engineering",
    description:
      "Building scalable and maintainable software solutions using best practices.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a software developer based in Kegalle, Sri Lanka, passionate about
            creating innovative solutions and delivering exceptional user
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="text-primary mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
