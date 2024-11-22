import React from "react";
import CaseInquiryForm from "./CaseInquiryForm";
import Header from "./Header";
import TextContainer from "./TextContainer";

const CaseInquiries = () => {
  return (
    <section
      id="case-inquiries"
      className="text-center h-[80vh] mx-10 flex flex-col justify-center"
    >
      <Header>Case Inquiries</Header>

      <TextContainer className="h-[40%]">
        <p className="mb-5">
          At Vidhi Saharaa, we cover all areas of law—from civil to
          criminal—ensuring complete confidentiality in everything we do.
        </p>
        <p className="mb-5">
          Feel free to leave your inquiry below or email us directly, and
          we&apos;ll get back to you promptly. Don&apos;t worry, we&apos;re here
          to help.
        </p>
      </TextContainer>

      <CaseInquiryForm />
    </section>
  );
};

export default CaseInquiries;
