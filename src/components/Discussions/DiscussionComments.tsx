import React from "react";
import { getDiscussionComments } from "@/lib/discussions/data";
import { DiscussionCommentComponent } from "@/components/Discussions/DiscussionCommentComponent";

type PropsType = {
  discussionId: string;
};

export const DiscussionComments = async ({ discussionId }: PropsType) => {
  const comments = await getDiscussionComments(discussionId);

  return (
    <div className="w-full flex flex-col ">
      {comments.map((comment) => (
        <DiscussionCommentComponent key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
