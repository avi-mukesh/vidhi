"use client";
import React, { useState } from "react";
// import SubmitButton from "./SubmitButton";
import { createComment } from "@/actions/create-comment";

const StudentCommentForm = () => {
  const [submitted, setSubmitted] = useState(false);

  // const [formState, setFormState] = useState({
  //   comment: "",
  // });

  // const valid = formState.comment.length > 0;

  if (submitted) {
    return <p className="md: text-lg">Comment Submitted!</p>;
  }

  // const onChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   setFormState({ ...formState, [e.target.name]: e.target.value });
  // };

  return (
    <form
      action={createComment}
      className="flex flex-col gap-2 w-[80%] md:max-w-[65%] md:min-w-[40%] mx-auto"
      onSubmit={() => setSubmitted(true)}
    >
      <span>Student comments is disabled temporarily.</span>
      {/* <div className="input-group">
        <label htmlFor="comment">Your comment</label>
        <textarea
          name="comment"
          id="comment"
          value={formState.comment}
          onChange={onChange}
        />
      </div>
      <div className="self-end">
        <SubmitButton validForm={valid} />
      </div> */}
    </form>
  );
};

export default StudentCommentForm;
