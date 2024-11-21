import React from "react";
import StudentCommentForm from "./StudentCommentForm";
import Header from "./Header";

const Students = () => {
  return (
    <section
      id="students"
      className="text-center h-[120vh] mx-10 flex flex-col justify-center"
    >
      <Header>Students</Header>

      <div className="flex flex-col justify-center gap-10 md:text-lg mb-20">
        <p className="mb-5">
          Are you a law student looking to make a difference while gaining
          valuable experience to advance your career?
        </p>
        <p className="mb-5">
          At Vidhi Saharaa, we&apos;re seeking passionate and driven students
          like you to join our mission of giving back to society. By working
          with us, you&apos;ll have the opportunity to help those in need while
          building meaningful legal experience.
        </p>
        <p>
          Interested? Reach out to us via email or leave a comment below to get
          involved.
        </p>
      </div>
      <StudentCommentForm />
    </section>
  );
};

export default Students;
