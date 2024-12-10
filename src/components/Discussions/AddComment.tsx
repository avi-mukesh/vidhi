"use client";

import {
  DiscussionCommentReplyContext,
  DiscussionCommentReplyDispatchContext,
} from "@/context/DiscussionCommentReplyContext";
import { postComment } from "@/lib/discussions/action";
import React, { useContext } from "react";

type PropsType = {
  discussionId: string;
};

const AddCommentNotMemoised = ({ discussionId }: PropsType) => {
  const { replyingTo } = useContext(DiscussionCommentReplyContext);
  const dispatch = useContext(DiscussionCommentReplyDispatchContext);

  const setReplyToNothing = () => {
    dispatch({ type: "reply_to", payload: undefined });
  };

  return (
    <div className="w-full">
      {replyingTo && (
        <div className="flex justify-between text-sm">
          <p className="mb-2">Replying to {replyingTo.name}</p>
          <p>
            <button
              className="hover:underline underline-offset-2 ml-6"
              onClick={setReplyToNothing}
            >
              Cancel reply
            </button>
          </p>
        </div>
      )}
      <form
        action={(formData: FormData) =>
          postComment(formData).then(setReplyToNothing)
        }
        className="mx-auto flex flex-col"
      >
        <textarea
          name="text"
          className="p-1 mb-1 h-[80px]"
          placeholder="Write your thoughts..."
        />
        <input name="name" className="p-1" placeholder="Your name (optional)" />
        <input hidden readOnly name="discussionId" value={discussionId} />
        <input
          hidden
          readOnly
          name="replyingTo"
          value={replyingTo ? replyingTo.id : ""}
        />
        <button className="self-end">Post</button>
      </form>
    </div>
  );
};

export const AddComment = React.memo(AddCommentNotMemoised);
