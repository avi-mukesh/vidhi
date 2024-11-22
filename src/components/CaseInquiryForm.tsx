"use client";

import React, { useState } from "react";
import { createInquiry } from "@/actions/create-inquiry";
import SubmitButton from "./SubmitButton";

const CaseInquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    phoneOrEmail: "",
    inquiry: "",
  });

  const valid =
    formState.name.length > 0 &&
    formState.phoneOrEmail.length > 0 &&
    formState.inquiry.length > 0;

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return <p className="md: text-lg">Enquiry Submitted!</p>;
  }

  return (
    <form
      action={createInquiry}
      className="flex flex-col gap-2 w-[80%] md:max-w-[65%] md:min-w-[40%] mx-auto"
      onSubmit={() => setSubmitted(true)}
    >
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          value={formState.name}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phoneOrEmail">Phone/email</label>
        <input
          name="phoneOrEmail"
          id="phoneOrEmail"
          type="text"
          value={formState.phoneOrEmail}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="inquiry">Inquiry</label>
        <textarea
          name="inquiry"
          id="inquiry"
          value={formState.inquiry}
          onChange={onChange}
        />
      </div>
      <div className="self-end">
        <SubmitButton validForm={valid} />
      </div>
    </form>
  );
};

export default CaseInquiryForm;
