import CaseInquiryForm from "@/components/CaseInquiryForm";
import React from "react";

const page = () => {
  return (
    <div className="text-xl max-w-[70%] text-center mx-auto">
      <h1 className="text-4xl mb-8">Case Inquiries</h1>
      <p className="mb-5">
        At Vidhi Saharaa, we cover all areas of law—from civil to
        criminal—ensuring complete confidentiality in everything we do.
      </p>
      <p className="mb-15">
        Feel free to leave your inquiry below or email us directly, and
        we&apos;ll get back to you promptly. Don&apos;t worry, we&apos;re here
        to help.
      </p>
      <CaseInquiryForm />
    </div>
  );
};

export default page;
