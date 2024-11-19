import React from "react";
import SubmitButton from "./SubmitButton";
import { test } from "@/actions/create-inquiry";

const StudentCommentForm = () => {
  return (
    <form action={test} className="flex flex-col gap-2 max-w-[60%] mx-auto">
      <div className="input-group">
        <label htmlFor="comment">Your comment</label>
        <textarea
          id="comment"
          // {...register("inquiry", { required: "Inquiry is required" })}
        />
      </div>
      <div className="self-end">
        <SubmitButton disabledButton={false} message="" />
      </div>
    </form>
  );
};

export default StudentCommentForm;
