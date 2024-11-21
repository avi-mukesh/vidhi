import React from "react";
import Header from "./Header";
import TextContainer from "./TextContainer";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-center h-[100vh] mx-10 flex flex-col justify-center"
    >
      <Header>Projects</Header>

      <TextContainer>
        <p>
          Use of Internet Technology to Facilitate Communication in Planning
          International Crimes
        </p>
        <p className="text-sm md:text-base">
          Anjali Jain “Use of Internet Technology to Facilitate Communication in
          Planning International Crimes,” URSS SHOWCASE, accessed October 21,
          2024, https://urss.warwick.ac.uk/items/show/385.
        </p>
      </TextContainer>

      <div>
        <p className="text-lg md:text-xl">+WIP</p>
      </div>
    </section>
  );
};

export default Projects;
