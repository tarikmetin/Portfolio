import { motion } from "framer-motion";

const welcomeMessageVariants = {
  initial: (i) => {
    const distance = i * -100;
    return {
      opacity: 0,
      x: distance,
    };
  },

  animate: (i) => {
    const duration = i * 0.75;
    return {
      opacity: 1,
      x: 0,
      transition: {
        duration,
      },
    };
  },
};

export default function Summary() {
  return (
    <motion.section
      id="welcome-message"
      initial={"initial"}
      animate={"animate"}
    >
      <motion.p variants={welcomeMessageVariants} custom={3}>
        Hi, this is
      </motion.p>
      <motion.h1 variants={welcomeMessageVariants} custom={4}>
        Tarik Metin
      </motion.h1>
      <motion.p variants={welcomeMessageVariants} custom={5}>
        I am a web developer with an engineering background, based in Buenos
        Aires.
      </motion.p>
    </motion.section>
  );
}
