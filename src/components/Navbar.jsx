import { motion } from "framer-motion";

const navBarElementVariants = {
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

export default function Navbar() {
  return (
    <motion.header
      className="nav-container-horizontal"
      initial={"initial"}
      animate={"animate"}
    >
      <ul>
        <motion.li variants={navBarElementVariants} custom={3}>
          <a href="https://github.com/tarikmetin" target="_blank">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              width="1.6rem"
              height="1.6rem"
            >
              <path
                d="m18,.7C8.21.7.26,8.64.26,18.44c0,7.84,5.08,14.49,12.13,16.83.89.16,1.17-.39,1.17-.85v-3.3c-4.93,1.07-5.96-2.09-5.96-2.09-.81-2.05-1.97-2.6-1.97-2.6-1.61-1.1.12-1.08.12-1.08,1.78.12,2.72,1.83,2.72,1.83,1.58,2.71,4.15,1.93,5.16,1.47.16-1.15.62-1.93,1.13-2.37-3.94-.45-8.08-1.97-8.08-8.77,0-1.94.69-3.52,1.83-4.76-.18-.45-.79-2.25.17-4.69,0,0,1.49-.48,4.88,1.82,1.41-.39,2.93-.59,4.44-.6,1.51,0,3.03.2,4.44.6,3.39-2.29,4.87-1.82,4.87-1.82.97,2.44.36,4.25.17,4.69,1.14,1.24,1.83,2.82,1.83,4.76,0,6.81-4.15,8.31-8.1,8.75.64.55,1.22,1.63,1.22,3.28v4.87c0,.47.28,1.03,1.18.85,7.04-2.35,12.12-9,12.12-16.83C35.74,8.64,27.8.7,18,.7Z"
                fill="#313142"
              />
            </svg>
          </a>
        </motion.li>
        <motion.li variants={navBarElementVariants} custom={4}>
          <a
            href="https://www.linkedin.com/in/%C5%9F%C3%BCkr%C3%BC-tar%C4%B1k-metin-117b39175/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.6rem"
              width="1.6rem"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </motion.li>
      </ul>
      {/* <motion.a
        variants={navBarElementVariants}
        custom={4}
        href=""
        className="my-resume"
      >
        My Resume
      </motion.a> */}
    </motion.header>
  );
}
