import { motion } from "framer-motion";

const drawVariant = {
  initial: { opacity: 0 },
  animate: (i) => {
    const delay = 1 + i * 0.5;
    return {
      opacity: 1,

      transition: {
        duration: 3,
        delay,
      },
    };
  },
};

export default function PageIcon() {
  return (
    <motion.svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 950.59 758.79"
      className="page-icon"
      initial={"initial"}
      animate={"animate"}
    >
      <g id="Layer_3" data-name="Layer 3">
        <motion.circle
          variants={drawVariant}
          custom={2}
          cx="342.98"
          cy="342.98"
          r="342.98"
          fill="#232323"
        />
        <motion.circle
          variants={drawVariant}
          custom={6}
          cx="818.27"
          cy="475.29"
          r="132.32"
          fill="#232323"
        />
        <motion.circle
          variants={drawVariant}
          custom={3}
          cx="664.83"
          cy="664.83"
          r="82.18"
          fill="#232323"
        />
        <motion.circle
          variants={drawVariant}
          custom={4}
          cx="854.38"
          cy="698.38"
          r="48.63"
          fill="#232323"
        />
        <motion.circle
          variants={drawVariant}
          custom={5}
          cx="503.71"
          cy="728.58"
          r="30.2"
          fill="#232323"
        />
        <motion.circle
          variants={drawVariant}
          custom={1}
          cx="931.83"
          cy="626.37"
          r="18.76"
          fill="#232323"
        />
      </g>
    </motion.svg>
  );
}
