import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Students from "./Students";
import CaseInquiries from "./CaseInquiries";
// import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <Navbar />
      <main id="main">
        <Heading />
        <About />
        <Contact />
        <Projects />
        <AboutMe />
        <Students />
        <CaseInquiries />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Content;
