import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ScrollCue({ target = "#about" }) {
  const reduce = useReducedMotion();

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      className="scroll-cue"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ duration: reduce ? 0.2 : 0.6, delay: 0.6 }}
    >
      <button
        className="scroll-cue__btn"
        onClick={handleClick}
        aria-label="Scroll to explore"
      >
        <span className="scroll-cue__label">SCROLL TO EXPLORE</span>
        <svg
          className="scroll-cue__icon"
          width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"
        >
          <path d="M12 16l-6-6h12l-6 6z" fill="currentColor" />
        </svg>
      </button>
    </motion.div>
  );
}