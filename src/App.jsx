import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Summary from "./components/Summary";

import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

function App() {
  const aboutRefLink = useRef(null);
  const projectRefLink = useRef(null);
  const educationRefLink = useRef(null);
  const contactRefLink = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  const isAboutInView = useInView(aboutRefLink, { margin: "-25%" });
  const isProjectInView = useInView(projectRefLink, { margin: "-25%" });
  const isEducationInView = useInView(educationRefLink, { margin: "-25%" });
  const isContactInView = useInView(contactRefLink, { margin: "-25%" });

  useEffect(() => {
    if (isAboutInView) setActiveSection("about");
    if (isProjectInView) setActiveSection("projects");
    if (isEducationInView) setActiveSection("education");
    if (isContactInView) setActiveSection("contact");
    if (
      !isAboutInView &&
      !isProjectInView &&
      !isEducationInView &&
      !isContactInView
    )
      setActiveSection("");
  });

  return (
    <div className="home">
      <SideBar activeSection={activeSection} />
      <main>
        <Navbar />
        <div className="app-container">
          <Summary />
          <About aboutRefLink={aboutRefLink} />
          <Projects projectRefLink={projectRefLink} />
          <Education educationRefLink={educationRefLink} />
          <Contact contactRefLink={contactRefLink} />
        </div>
      </main>
    </div>
  );
}

export default App;
