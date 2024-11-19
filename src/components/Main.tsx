import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <section id="main">
        <Heading />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
