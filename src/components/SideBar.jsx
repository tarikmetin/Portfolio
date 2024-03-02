import { useEffect } from "react";
import PageIcon from "./PageIcon";
import { motion } from "framer-motion";

const sideBarElementVariants = {
  initial: (i) => {
    const distance = i * -100;
    return {
      opacity: 0,
      y: distance,
      x: 0,
    };
  },

  animate: (i) => {
    const duration = i * 0.75;
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration,
      },
    };
  },
};

export default function SideBar({ activeSection }) {
  return (
    <motion.div
      className="nav-container-vertical"
      initial={"initial"}
      animate={"animate"}
    >
      <PageIcon />
      <ul>
        <motion.li
          variants={sideBarElementVariants}
          custom={1}
          className={`${activeSection === "about" ? "active" : ""}`}
        >
          <a href="#about">About</a>
        </motion.li>
        <motion.li
          variants={sideBarElementVariants}
          custom={2}
          className={`${activeSection === "projects" ? "active" : ""}`}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          variants={sideBarElementVariants}
          custom={3}
          className={`${activeSection === "education" ? "active" : null}`}
        >
          <a href="#education">Education</a>
        </motion.li>
        <motion.li
          variants={sideBarElementVariants}
          custom={4}
          className={`${activeSection === "contact" ? "active" : null}`}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
    </motion.div>
  );
}
