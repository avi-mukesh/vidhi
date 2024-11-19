import React from "react";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className="text-xl max-w-[70%] text-center mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl text-center relative">Anjali Jain</h1>
        <span className="absolute">
          <a
            target="_blank"
            className="hover:text-blue-400"
            href="https://www.linkedin.com/in/anjaliijn/"
          >
            <FaLinkedin />
          </a>
        </span>
      </header>

      <p className="mb-5">
        Hi, I&apos;m the founder of Vidhi Saharaa, and I come from Saharanpur, a
        small town in India. My admiration for the judiciary began early, as
        I&apos;ve always believed in the power of the legal system to bring
        about justice and positive change. However, over the years, I noticed a
        growing distrust in the system, with many people feeling powerless and
        unsupported.
      </p>
      <p className="mb-5">
        Determined to make a difference, I set out to strengthen my knowledge
        and foundation in law, so I could give back to my community and help
        restore faith in the judiciary. Vidhi Saharaa was born from this
        vision—a platform created to support individuals who need guidance and
        assistance before approaching the courts.
      </p>
      <p className="mb-5">
        Vidhi Saharaa is committed to making a meaningful impact. Whether you
        need legal advice, resources, or simply someone to guide you through the
        process, we&apos;re here to ensure that you have the support you need to
        effectively pursue justice. We believe that everyone deserves a fair
        chance, and we&apos;re dedicated to being with you every step of the
        way.
      </p>
    </div>
  );
};

export default page;
