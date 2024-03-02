import { motion, useInView, useAnimationControls } from "framer-motion";
import { forwardRef, useEffect, useRef } from "react";

const aboutMessageVariantsLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.25,
    },
  },
};

const aboutMessageVariantsRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.25,
    },
  },
};

export default function About({ aboutRefLink }) {
  const isInView = useInView(aboutRefLink, {
    margin: "-25%",
  });

  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  return (
    <>
      <motion.section
        id="about"
        initial={"initial"}
        animate={mainControls}
        ref={aboutRefLink}
      >
        <div className="head-container">
          <motion.h1 variants={aboutMessageVariantsLeft}>About me</motion.h1>
          <motion.div
            variants={aboutMessageVariantsRight}
            className="line"
          ></motion.div>
        </div>

        <div className="text-container">
          <motion.div variants={aboutMessageVariantsLeft} className="about-me">
            <p>
              Originally a mining engineer, later on I decided to work in web
              development. I spend my time on coding and creating web
              applications that has cool uses. Rest of my time goes to my
              freelance work, where I provide graphic design service to people
              who needs it.
            </p>
            <p>
              I am having a lot of fun currently learning and diving deeper to
              various libraries and frameworks for the web development. I must
              admit that even comparing my engineering and academic past,
              creating web applications that are both useful and decent looking
              is a great challange by its own. However, I really enjoy pushing
              these meaningful challanges in daily basis.
            </p>
            <p>
              Currently I am in search of a place I can work, learn and grow. If
              you happen to have an opening that you think I will be a good fit,
              then let's connect.
            </p>
          </motion.div>
          <motion.div
            variants={aboutMessageVariantsRight}
            className="my-skills"
          >
            <h3>My skillset</h3>
            <p>These are the tools I use when I am building a website:</p>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <br />
            <p>These are the tools that I am currently focused to learn:</p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Chart.js</li>
              <li>MongoDB</li>
              <li>FramerMotion</li>
            </ul>
            <br />
            <p>I am also proficient in these:</p>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
