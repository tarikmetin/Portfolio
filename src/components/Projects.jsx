import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { projectList } from "../data/projectList.js";
import ProjectCard from "./ProjectCard.jsx";

const projectVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.25,
    },
  },
};

export default function Projects({ projectRefLink }) {
  const isInView = useInView(projectRefLink, { margin: "-25%" });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <motion.section
      id="projects"
      ref={projectRefLink}
      initial={"initial"}
      animate={mainControls}
      variants={projectVariants}
    >
      <div className="head-container">
        <h1>Projects</h1>
        <div className="line"></div>
      </div>
      <p>I like to design and build projects that has uses for people</p>
      <ul className="project-list">
        {projectList.map((project) => {
          return (
            <ProjectCard key={project.projectName} project={project}>
              {project.description}
            </ProjectCard>
          );
        })}
      </ul>
    </motion.section>
  );
}
