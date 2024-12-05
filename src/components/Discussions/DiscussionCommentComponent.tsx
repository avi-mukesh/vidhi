import React from "react";
import { DiscussionComment } from "@prisma/client";
import { getUser } from "@/lib/user/data";

type PropsType = {
  comment: DiscussionComment;
};

export const DiscussionCommentComponent = async ({ comment }: PropsType) => {
  const author = await getUser(comment.authorId);

  return (
    <div className="w-full bg-orange-200 text-gray-800 text-sm p-2">
      <p className="text-xs italic">{author?.email}</p>
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
      <p className="mt-1">{comment.text}</p>
    </div>
  );
};
