import React from "react";

const About = () => {
  return (
    <section id="about" className="text-center mx-10 text-lg">
      <div className="h-[100vh] grid place-content-center">
        <p className="mb-5">
          A platform connecting economically disadvantaged groups and law
          students to assist in basic legal matters and raise awareness.
        </p>
      </div>
      <div className="h-[100vh]">
        <p className="mb-5">
          <span className="text-3xl">Vidhi Saharaa</span> is an innovative
          platform designed to bridge the gap between economically disadvantaged
          communities and law students eager to gain practical experience. Our
          mission is to democratise legal aid by providing free or low-cost
          assistance in basic legal matters while raising legal awareness among
          underserved populations. Vidhi Saharaa leverages technology to connect
          individuals needing legal advice with aspiring lawyers, fostering a
          mutually beneficial relationship that not only addresses immediate
          legal concerns but also cultivates a more informed and empowered
          society.
        </p>
      </div>
      <div className="h-[100vh]">
        <p className="mb-5">
          Our <span className="text-3xl text-slate-200">vision</span> is to
          create a world where legal assistance is accessible to all, regardless
          of socioeconomic status. Vidhi Saharaa aims to be the leading platform
          for legal empowerment, transforming lives by providing essential
          support and education to those who need it most.
        </p>
      </div>
      <div className="h-[50vh]">
        <p className="mb-5">
          Vidhi Saharaa is dedicated to delivering affordable, quality legal
          support to marginalised communities by connecting them with passionate
          law students. We strive to enhance legal literacy and empower
          individuals to understand and exercise their rights, contributing to a
          more just and inclusive society.
        </p>
      </div>
    </section>
  );
};

export default About;
