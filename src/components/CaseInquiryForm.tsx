"use client";

import React from "react";
import { test } from "@/actions/create-inquiry";
// import { useForm } from "react-hook-form";
// import { useFormState } from "react-hook-form";
import SubmitButton from "./SubmitButton";

const CaseInquiryForm = () => {
  //   const initialState = { message: "", errors: {} };
  //   const [state, dispatch] = useFormState(createInquiry, initialState);

  // const {
  //   register,
  //   formState: { isValid },
  // } = useForm({ mode: "all" });

  return (
    <form action={test} className="flex flex-col gap-2 max-w-[40%] mx-auto">
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          // {...register("name", { required: "Name is required" })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          // {...register("name", { required: "Phone or email is required" })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="inquiry">Inquiry</label>
        <textarea
          id="inquiry"
          // {...register("inquiry", { required: "Inquiry is required" })}
        />
      </div>
      <div className="self-end">
        <SubmitButton disabledButton={false} message="" />
      </div>
    </form>
  );
};

export default CaseInquiryForm;
