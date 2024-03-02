import { useState } from "react";
import Modal from "./Modal.jsx";
import { motion } from "framer-motion";

let text;

export default function ProjectCard({ children, project }) {
  if (children.length > 150) {
    text = children.substring(0, 150);
  } else {
    text = children;
  }

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className="project">
      <div className="img-container">
        <img src={project.img} alt="" />
      </div>
      <div className="head-container">
        <h3>{project.projectName}</h3>
        <div className="line"></div>
        <a href={project.urlGithub} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36.39 35.49"
            stroke="#313142"
            fill="#313142"
            height="1.6rem"
            width="1.6rem"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path
                d="m18.2,0C8.15,0,0,8.15,0,18.2c0,8.04,5.21,14.86,12.44,17.27.91.17,1.2-.4,1.2-.87v-3.39c-5.06,1.1-6.12-2.15-6.12-2.15-.83-2.1-2.02-2.66-2.02-2.66-1.65-1.13.13-1.11.13-1.11,1.83.13,2.79,1.88,2.79,1.88,1.62,2.78,4.26,1.98,5.29,1.51.16-1.18.63-1.98,1.16-2.43-4.04-.46-8.29-2.02-8.29-8.99,0-1.99.71-3.61,1.87-4.88-.19-.46-.81-2.31.18-4.82,0,0,1.53-.49,5.01,1.87,1.45-.4,3.01-.61,4.55-.61,1.55,0,3.1.21,4.56.61,3.47-2.35,5-1.87,5-1.87.99,2.51.37,4.36.18,4.82,1.17,1.27,1.87,2.9,1.87,4.88,0,6.99-4.26,8.53-8.31,8.98.65.56,1.25,1.67,1.25,3.37v4.99c0,.48.29,1.05,1.21.87,7.23-2.41,12.43-9.23,12.43-17.26C36.39,8.15,28.24,0,18.2,0Z"
                fill="#313142"
              />
            </g>
          </svg>
        </a>
        <a href={project.urlDemo} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36.39 35.49"
            stroke="#313142"
            fill="#313142"
            height="1.6rem"
            width="1.6rem"
          >
            <g id="Layer_3" data-name="Layer 3">
              <g>
                <path
                  d="m32.38,15.19c-1.1,0-2,.9-2,2v10.25c0,1.62-1.32,2.94-2.94,2.94H6.94c-1.62,0-2.94-1.32-2.94-2.94V6.94c0-1.62,1.32-2.94,2.94-2.94h10.25c1.1,0,2-.9,2-2s-.9-2-2-2H6.94C3.11,0,0,3.11,0,6.94v20.49c0,3.83,3.11,6.94,6.94,6.94h20.49c3.83,0,6.94-3.11,6.94-6.94v-10.25c0-1.1-.9-2-2-2Z"
                  fill="#313142"
                />
                <path
                  d="m23.58,3.86h4.64l-11.88,11.23c-.7.66-.73,1.77-.07,2.47.34.36.81.55,1.27.55.43,0,.86-.16,1.2-.48l11.72-11.07v3.93c0,1.06.86,1.92,1.92,1.92s1.92-.86,1.92-1.92V2.14c0-.86-.57-1.58-1.36-1.82-.3-.19-.64-.3-1.02-.3h-8.34c-1.06,0-1.92.86-1.92,1.92s.86,1.92,1.92,1.92Z"
                  fill="#313142"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <p>{text}...</p>
      {children.length > 100 ? (
        <motion.button
          onClick={handleShowModal}
          whileHover={{ scale: 1.05 }}
          className="read-more-button"
        >
          Read more
        </motion.button>
      ) : null}

      <Modal
        project={project}
        setShowModal={setShowModal}
        showModal={showModal}
      >
        {children}
      </Modal>
    </li>
  );
}
