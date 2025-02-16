import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                Tharaka Viraj
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A passionate software developer crafting beautiful digital experiences
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296"
                alt="Tharaka Viraj"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
