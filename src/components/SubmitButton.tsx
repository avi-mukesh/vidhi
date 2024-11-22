"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type PropsType = {
  validForm: boolean;
};

function SubmitButton({ validForm }: PropsType) {
  const { pending } = useFormStatus();
  const disabled = pending || !validForm;

  return (
    <button
      disabled={disabled}
      className="mx-auto text-lg cursor-pointer hover:underline underline-offset-2 p-1"
      type="submit"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
