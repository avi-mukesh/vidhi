import React from "react";
import CaseInquiryForm from "./CaseInquiryForm";

const CaseInquiries = () => {
  return (
    <section id="case-inquiries" className="text-center h-[80vh] mx-10">
      <h2 className="text-6xl text-center mb-8 relative max-w-fit mx-auto">
        Case Inquiries
      </h2>

      <div className="flex flex-col justify-center h-[40%] gap-10 text-lg">
        <p className="mb-5">
          At Vidhi Saharaa, we cover all areas of law—from civil to
          criminal—ensuring complete confidentiality in everything we do.
        </p>
        <p className="mb-5">
          Feel free to leave your inquiry below or email us directly, and
          we&apos;ll get back to you promptly. Don&apos;t worry, we&apos;re here
          to help.
        </p>
      </div>
      <CaseInquiryForm />
    </section>
  );
};

export default CaseInquiries;
