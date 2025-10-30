import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const taglines = [
  "Crafting scalable interfaces with clarity and precision.",
  "Building experiences that feel as good as they look.",
  "Transforming ideas into seamless digital realities.",
];

export default function HeroTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % taglines.length),
      3500 // cada 3.5 segundos
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero__tagline">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {taglines[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}