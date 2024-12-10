import { getDiscussionComment } from "@/lib/discussions/data";
import React from "react";

type PropsType = {
  commentId: string | null;
};

async function DiscussionCommentInReplyTo({ commentId }: PropsType) {
  if (commentId) {
    const comment = await getDiscussionComment(commentId);
    return <span> in reply to {comment?.text}</span>;
  }
}

export default DiscussionCommentInReplyTo;
