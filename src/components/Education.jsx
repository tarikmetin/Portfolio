import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const educationVariants = {
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

export default function Education({ educationRefLink }) {
  const isInView = useInView(educationRefLink, { margin: "-25%" });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <motion.section
      id="education"
      ref={educationRefLink}
      variants={educationVariants}
      initial={"initial"}
      animate={mainControls}
    >
      <div className="head-container">
        <h1>Education</h1>
        <div className="line"></div>
      </div>
      <p>I am coming from an engineering background</p>
      <ul className="school-list">
        <li className="school">
          <h4>TU Bergakademie Freiberg</h4>
          <p>
            I spent wonderful 2 years in Germany to obtain my Master's degree.
            It was a privilege to work with the very competent people.
          </p>
        </li>
        <li className="school">
          <h4>Istanbul Technical University</h4>
          <p>
            Here I learnt everything I know about engineering. This was the
            place allow me to create a solid foundation for my engineering
            career.
          </p>
        </li>
      </ul>
    </motion.section>
  );
}
