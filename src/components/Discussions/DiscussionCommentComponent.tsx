"use client";

import React, { useContext } from "react";
import {
  DiscussionCommentReplyContext,
  DiscussionCommentReplyDispatchContext,
} from "@/context/DiscussionCommentReplyContext";
import clsx from "clsx";
import { DiscussionCommentWithReply } from "@/lib/types";

type PropsType = {
  comment: DiscussionCommentWithReply;
};

export const DiscussionCommentComponent = ({ comment }: PropsType) => {
  const { replyingTo } = useContext(DiscussionCommentReplyContext);
  const dispatch = useContext(DiscussionCommentReplyDispatchContext);

  return (
    <div
      className={clsx(
        "w-full bg-orange-200 text-gray-800 border-[1px] text-sm p-2",
        { "bg-orange-300": replyingTo?.id === comment.id }
      )}
    >
      <p className="text-xs">
        <span className="italic">{comment.name}</span>
        {comment.replyToComment && (
          <>
            {" "}
            in reply to{" "}
            <span className="italic">{comment.replyToComment.name}</span>
          </>
        )}
      </p>
      <p className="text-xs italic">
        {comment.datePosted.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p className="mt-1">
        {comment.text}
        <button
          className="ml-10 hover:underline underline-offset-2"
          onClick={() => dispatch({ type: "reply_to", payload: comment })}
        >
          Reply
        </button>
      </p>
    </div>
  );
};
