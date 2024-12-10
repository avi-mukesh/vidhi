import React from "react";
import { DiscussionCommentComponent } from "@/components/Discussions/DiscussionCommentComponent";
import { DiscussionCommentWithReply } from "@/lib/types";

type PropsType = {
  comments: DiscussionCommentWithReply[];
};

export const DiscussionComments = ({ comments }: PropsType) => {
  return (
    <div className="w-full flex flex-col mb-1">
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <DiscussionCommentComponent key={comment.id} comment={comment} />
        );
      })}
    </div>
  );
};
