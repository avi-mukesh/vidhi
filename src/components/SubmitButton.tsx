"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type PropsType = {
  message: string | undefined | null;
  disabledButton: boolean;
};

function SubmitButton({ message, disabledButton }: PropsType) {
  const { pending } = useFormStatus();
  const submitted = message && message.length > 0;
  const disabled = pending || disabledButton;

  if (submitted) {
    return (
      <p className="mx-auto">
        Your message has been submitted. I will get back to you within a few
        hours.
      </p>
    );
  }
  return (
    <button
      disabled={disabled}
      className="mx-auto text-lg cursor-pointer"
      type="submit"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
