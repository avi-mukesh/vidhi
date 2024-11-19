import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type PropsType = {
  children: React.ReactElement;
};

export default function Layout({ children }: PropsType) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
